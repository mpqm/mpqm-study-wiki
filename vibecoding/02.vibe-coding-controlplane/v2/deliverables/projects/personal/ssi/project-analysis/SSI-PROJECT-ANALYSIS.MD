# D-DV. SSI PROJECT ANALYSIS
Hyperledger Fabric 기반 Self-Sovereign Identity Project의 Project Source를 전수 조사해 구현 범위, 아키텍처, 핵심 흐름, 품질·보안 Gap을 정리한 AS-IS 분석서다.

## D-DV.1 SCOPE AND EVIDENCE

- `owner`: `controlplane/deliverables`
- `type`: `project-analysis`
- `status`: `AS-IS`
- `source`: `project/personal/ssi`
- `method`: `multi-agent` 정적 전수조사 + Git 이력·아키텍처 이미지 교차 검증
- `evidence`: `FACT` = Source에서 직접 확인, `INFERENCE` = Evidence 기반 해석, `CLAIM` = README 또는 후속 표현 후보

Git 추적 파일 82개를 세 범위로 나누어 모두 조사했다. `.git` 내부 객체는 파일 전수 개수에서 제외했지만 commit 이력은 저작 귀속성 판단 보조 근거로 확인했다.

| 조사 범위 | 파일 수 | 주요 내용 | 누락 |
|---|---:|---|---:|
| `client`, `README.md`, `.gitignore`, `meta` | 42 | React UI, API Contract, 사용자 Flow, 문서·이미지 | 0 |
| `server` (`src/ssi` 제외) | 23 | Express, Route, Controller, MongoDB, Session, Crypto, Log | 0 |
| `hyperledgerfabric`, `project/personal/ssi/server/src/ssi` | 17 | Fabric Network, Chaincode, Gateway, DID·VC·VP | 0 |
| 합계 | 82 | Project 전체 | 0 |

`FACT` Source에는 실질 test/spec 파일이 없다. Server·Client 의존성 설치 디렉터리와 chaincode `go.mod`·`go.sum`이 없고 현재 환경에 Go toolchain도 없어 빌드·Fabric Network 실행·E2E 재현은 수행하지 않았다. 따라서 동작 완료와 운영 성과는 확정하지 않고 정적 구현 Evidence로만 판정한다.

## D-DV.2 EXECUTIVE SUMMARY

`FACT` 본 Project는 Issuer·Holder·Verifier 3개 역할의 React UI, TypeScript/Express API, MongoDB 업무 데이터·Session, Fabric Gateway, Go DID Chaincode, 3개 Peer 조직의 Hyperledger Fabric Network를 하나의 Demo로 연결한다. 구현은 DID 발급·CRUD, Challenge-Response 서명 검증, 학력·신원 VC 생성, 복합 VP 생성·검증을 포함한다. Source: `project/personal/ssi/README.md:125`, `project/personal/ssi/server/src/app.ts:33`, `project/personal/ssi/client/src/App.tsx:15`, `project/personal/ssi/hyperledgerfabric/network.sh:4`.

`INFERENCE` 기술적 가치는 단일 기능보다 다중 조직 Fabric 인프라, 원장 Contract, Web API, 암호화 Payload, 3자 역할 UI를 End-to-End로 조립한 통합 경험에 있다. 다만 현재 상태는 Production SSI보다 학습·시연용 Prototype에 가깝다. 개인키 처리, Challenge 재사용 방지, Fabric ACL, 표준 정합성, 재현 가능한 빌드·테스트에 중요한 Gap이 있다.

## D-DV.3 ARCHITECTURE

```text
React Demo UI
  Issuer | Holder | Verifier
            |
            v
TypeScript / Express REST API
  Session + MongoDB | DID Auth | VC/VP Crypto
            |
            v
Fabric Gateway / gRPC TLS / X.509 Signer
            |
            v
didchannel + Go DID Chaincode
            |
            v
3 Peer Orgs x 2 Peers + 6 CouchDB
3-node Raft Orderer + 4 Fabric CAs
```

`FACT` `meta/image2.png`도 React 역할 UI, Node.js 역할 모듈, Fabric Gateway, 3개 Peer 조직, 3개 Orderer, DID Channel을 같은 계층으로 표현한다. 이 이미지는 아키텍처 의도의 Evidence이며 실행 성공을 증명하는 로그는 아니다.

| 계층 | AS-IS 구성 | 핵심 Source |
|---|---|---|
| Client | React 18, TypeScript, Router, React-Bootstrap, native `fetch`, Web Storage | `project/personal/ssi/client/package.json:6`, `project/personal/ssi/client/src/App.tsx:15`, `project/personal/ssi/client/src/network/SSIapi.ts:4` |
| API | Express 4, 4 Router, 22 Endpoint, Error Middleware, Winston | `project/personal/ssi/server/src/app.ts:30`, `project/personal/ssi/server/src/routes/*.ts`, `project/personal/ssi/server/src/utils/logger.ts:4` |
| App Data/Auth | Mongoose Model 3종, bcrypt, express-session, MongoStore | `project/personal/ssi/server/src/controllers/issuer.ts:20`, `project/personal/ssi/server/src/models/*.ts`, `project/personal/ssi/server/src/app.ts:19` |
| SSI | RSA 2048/ECC secp256k1, SHA-256 서명, DID·VC·VP Helper | `project/personal/ssi/server/src/utils/crypto.ts:10`, `project/personal/ssi/server/src/ssi/did-helper.ts:15`, `project/personal/ssi/server/src/ssi/vcvp-helper.ts:4` |
| Fabric Client | 3 Org Connection Info, gRPC TLS, MSP Identity, Signer, Evaluate/Submit | `project/personal/ssi/server/src/ssi/connection-info.ts:17`, `project/personal/ssi/server/src/ssi/fabric-gateway.ts:12`, `project/personal/ssi/server/src/ssi/did-operation.ts:8` |
| Ledger | Go Chaincode DID CRUD, `didchannel`, Majority Endorsement | `project/personal/ssi/hyperledgerfabric/chaincode/did/did.go:77`, `project/personal/ssi/hyperledgerfabric/config/configtx.yaml:173` |
| Network | 3 Peer Org, 6 Peer, 6 CouchDB, 3-node Raft Orderer, 4 CA | `project/personal/ssi/hyperledgerfabric/docker-compose/*.yaml`, `project/personal/ssi/hyperledgerfabric/config/configtx.yaml:249` |

## D-DV.4 CORE FLOWS

### D-DV.4.1 DID LIFECYCLE

1. `FACT` Server가 RSA 2048 또는 ECC secp256k1 Key Pair를 생성하고 공개키 SHA-256 Hash로 `did:hlf:{hash}` ID를 만든다. Source: `project/personal/ssi/server/src/utils/crypto.ts:16`, `project/personal/ssi/server/src/ssi/did-helper.ts:15`.
2. `FACT` DID Document를 Fabric Contract 인자로 직렬화하고 `CreateDID`·`UpdateDID`·`DeleteDID`는 submit, `GetDID`는 evaluate로 호출한다. Source: `project/personal/ssi/server/src/ssi/did-helper.ts:4`, `project/personal/ssi/server/src/ssi/did-operation.ts:8`.
3. `FACT` Chaincode는 DID ID를 World State Key로 사용해 중복 생성을 막고 조회·전체 갱신·삭제한다. Source: `project/personal/ssi/hyperledgerfabric/chaincode/did/did.go:77`, `:100`, `:113`, `:138`.

### D-DV.4.2 DID AUTH

1. `FACT` Issuer·Verifier·SSI Endpoint가 문자열 Challenge를 발급한다. Source: `project/personal/ssi/server/src/controllers/issuer.ts:97`, `project/personal/ssi/server/src/controllers/verifier.ts:8`, `project/personal/ssi/server/src/controllers/ssi.ts:49`.
2. `FACT` Holder Endpoint가 요청으로 받은 Private Key로 Challenge를 서명한다. Source: `project/personal/ssi/server/src/controllers/holder.ts:6`.
3. `FACT` 검증자가 Fabric에서 DID 공개키를 조회해 서명을 검증한다. Source: `project/personal/ssi/server/src/controllers/issuer.ts:103`, `project/personal/ssi/server/src/controllers/ssi.ts:55`.
4. `INFERENCE` Challenge의 Server-side 저장·만료·사용 완료 표시가 없어 재사용 방지가 완성되지 않았다.

### D-DV.4.3 VC ISSUANCE

1. `FACT` Issuer가 MongoDB에 저장한 학력 또는 신원 정보를 조회한다. Source: `project/personal/ssi/server/src/controllers/issuer.ts:55`, `:66`, `:121`.
2. `FACT` Issuer DID, Holder DID, 발급·만료 시각, Credential Subject를 포함한 두 종류 VC를 만들고 Issuer Private Key로 서명한다. Source: `project/personal/ssi/server/src/ssi/vcvp-helper.ts:4`, `:45`.
3. `FACT` VC를 Fabric에 저장하는 Contract 호출은 없다. `INFERENCE` VC는 Off-chain JSON이고 Ledger DID는 검증키 탐색에 쓰이는 구조다.

### D-DV.4.4 VP PRESENTATION AND VERIFICATION

1. `FACT` Holder UI는 학력 VC·신원 VC·Holder DID·Private Key·Verifier Challenge를 VP 발급 API에 전달한다. Source: `project/personal/ssi/client/src/components/IssueVPModal.tsx:20`.
2. `FACT` Server는 두 VC를 고정 필드로 가진 VP Message를 Holder Key로 서명한다. Source: `project/personal/ssi/server/src/ssi/vcvp-helper.ts:84`.
3. `FACT` Verifier는 Fabric에서 Issuer·Holder DID Public Key를 조회해 학력 VC, 신원 VC, VP 서명의 Boolean 3개를 반환한다. Source: `project/personal/ssi/server/src/controllers/verifier.ts:14`.
4. `FACT` VP의 Challenge·Domain은 서명 Payload 외부의 Proof에 추가된다. `INFERENCE` Challenge가 Holder 서명에 결속되지 않아 재사용·변조를 서명만으로 막기 어렵다. Source: `project/personal/ssi/server/src/ssi/vcvp-helper.ts:85`, `:95`, `:98`.

## D-DV.5 IMPLEMENTATION INVENTORY

### D-DV.5.1 FRONTEND

- `FACT` 4개 Page(`Home`, `Issuer`, `Holder`, `Verifier`), 17개 UI Component, 3개 Network·Type Module로 구성된다.
- `FACT` Issuer는 계정·DID·신원/학력 Data·VC, Holder는 DID·DID Auth·VP, Verifier는 Challenge·VP Input·Verification을 담당한다. Source: `project/personal/ssi/client/src/pages/*.tsx`.
- `FACT` DTO와 API 함수를 `Interface.ts`, `SSIapi.ts`로 분리했고 401·409·500 응답을 별도 Error로 변환한다. Source: `project/personal/ssi/client/src/network/SSIapi.ts:4`, `project/personal/ssi/client/src/network/HttpErrors.ts:1`.
- `FACT` Web Storage를 Demo Wallet과 역할 간 상태 전달에 사용한다. Source: `project/personal/ssi/client/src/components/HolderViewer.tsx:10`, `project/personal/ssi/client/src/components/IssueVPModal.tsx:12`, `project/personal/ssi/client/src/components/RequireVPModal.tsx:17`.

### D-DV.5.2 BACKEND

- `FACT` 4개 Router에 22개 API가 있으며 Issuer 7개 Endpoint에 Session Guard가 적용된다. Source: `project/personal/ssi/server/src/routes/*.ts`.
- `FACT` User·Identity·University 3개 Mongoose Model, bcrypt Password Hash, MongoStore Session, Winston Daily Rotate Log, envalid 환경 검증을 구성한다. Source: `project/personal/ssi/server/src/models/*.ts`, `project/personal/ssi/server/src/app.ts:19`, `project/personal/ssi/server/src/utils/logger.ts:4`, `project/personal/ssi/server/src/utils/validate-env.ts:4`.
- `FACT` TypeScript `strict`, `noImplicitAny`, NodeNext, declaration·source map Build를 사용한다. Source: `project/personal/ssi/server/tsconfig.json:2`.

### D-DV.5.3 FABRIC AND CHAINCODE

- `FACT` `network.sh`는 CA/MSP 생성, Genesis·Channel Artifact, Node 실행, 6 Peer Join, Anchor Update, Chaincode Package·Install·Approve·Commit, CRUD Smoke 호출을 오케스트레이션한다. Source: `project/personal/ssi/hyperledgerfabric/network.sh:6`, `:446`, `:541`, `:609`, `:749`.
- `FACT` Application/Lifecycle Endorsement는 Majority Policy이고 Ordering은 3-node `etcdraft`다. Source: `project/personal/ssi/hyperledgerfabric/config/configtx.yaml:173`, `:249`.
- `FACT` Gateway는 TLS Root, MSP Identity, Private-key Signer, Evaluate·Endorse·Submit·Commit Deadline을 구성한다. Source: `project/personal/ssi/server/src/ssi/fabric-gateway.ts:23`.

## D-DV.6 STRENGTHS

| 등급 | 구현 강점 | Evidence |
|---|---|---|
| `FACT` | Issuer·Holder·Verifier를 UI–API–Crypto–Ledger까지 연결한 End-to-End 범위 | `project/personal/ssi/README.md:125`, `project/personal/ssi/client/src/App.tsx:15`, `project/personal/ssi/server/src/app.ts:33` |
| `FACT` | 3개 Org·6 Peer·3 Orderer·6 CouchDB·4 CA의 Fabric Topology를 코드로 구성 | `project/personal/ssi/hyperledgerfabric/docker-compose/*.yaml`, `project/personal/ssi/hyperledgerfabric/config/configtx.yaml:249` |
| `FACT` | Fabric Bootstrap과 Chaincode Lifecycle을 단일 Script에 통합 | `project/personal/ssi/hyperledgerfabric/network.sh:6`, `:609` |
| `FACT` | DID CRUD는 Ledger, VC·VP는 Off-chain Signature Object로 분리 | `project/personal/ssi/hyperledgerfabric/chaincode/did/did.go:77`, `project/personal/ssi/server/src/ssi/vcvp-helper.ts:4` |
| `FACT` | RSA·ECC Key, SHA-256 Signature, Fabric X.509 Signer, TLS gRPC를 한 Project에서 다룸 | `project/personal/ssi/server/src/utils/crypto.ts:16`, `project/personal/ssi/server/src/ssi/fabric-gateway.ts:39` |
| `INFERENCE` | 분산 신원 Domain을 인프라·Smart Contract·Backend·Frontend 경계로 분해하고 통합한 설계 경험으로 평가 가능 | 상기 전체 Evidence |

## D-DV.7 RISKS AND GAPS

| 우선순위 | 등급 | 항목 | Evidence / Impact |
|---|---|---|---|
| 1 | `FACT → INFERENCE` | Private Key가 HTTP 응답·요청, `localStorage`, UI에 노출 | `project/personal/ssi/server/src/controllers/ssi.ts:38`, `project/personal/ssi/server/src/controllers/holder.ts:6`, `project/personal/ssi/client/src/components/IssueVPModal.tsx:20`; 자기주권 Key 보관 모델과 충돌 |
| 2 | `FACT → INFERENCE` | Challenge를 `Math.random()`으로 만들고 Server 저장·만료·일회성 검증이 없음 | `project/personal/ssi/server/src/controllers/issuer.ts:97`, `project/personal/ssi/server/src/controllers/verifier.ts:8`, `project/personal/ssi/server/src/controllers/ssi.ts:49`; 예측·Replay 위험 |
| 3 | `FACT → INFERENCE` | VP Challenge·Domain이 서명 Payload 밖에 있음 | `project/personal/ssi/server/src/ssi/vcvp-helper.ts:85`, `:95`; Proof 결속 불충분 |
| 4 | `FACT → INFERENCE` | Chaincode Update/Delete에 Client Identity·MSP·Controller ACL이 없음 | `project/personal/ssi/hyperledgerfabric/chaincode/did/did.go:113`, `:138`; 타 DID 변경 가능성 |
| 5 | `FACT` | Gateway `switch` case에 `break/return`이 없어 최종 Org1 정보가 선택됨 | `project/personal/ssi/server/src/ssi/fabric-gateway.ts:15`; 조직별 Context 분리 실패 |
| 6 | `FACT → INFERENCE` | DID Key Fragment가 `#keys-1`, `#auth-1`, Proof의 `#key-1`로 불일치 | `project/personal/ssi/server/src/ssi/did-helper.ts:22`, `project/personal/ssi/server/src/ssi/did-helper.ts:28`, `project/personal/ssi/server/src/ssi/vcvp-helper.ts:39`; Key Resolution 불일치 |
| 7 | `FACT → INFERENCE` | DID·VC·VP가 `context`를 사용하고 VP Credential이 표준 배열이 아닌 고정 Object | `project/personal/ssi/server/src/ssi/*-interface.ts`; W3C 상호운용성 미검증 |
| 8 | `FACT` | README의 선택적 제출 주장과 달리 VP가 학력·신원 VC 모두를 고정 포함 | `project/personal/ssi/README.md:138`, `project/personal/ssi/server/src/ssi/vcvp-helper.ts:84` |
| 9 | `FACT` | `/ssi` DID Create·Update·Delete에 HTTP Auth Middleware가 없음 | `project/personal/ssi/server/src/routes/ssi.ts:6`; Fabric ACL도 없어 변경 권한 불명 |
| 10 | `FACT → INFERENCE` | `network.sh reset`이 Host의 모든 Docker Container를 중지·삭제 | `project/personal/ssi/hyperledgerfabric/network.sh:851`; 다른 Project 파괴 위험 |
| 11 | `FACT` | Crypto Artifact에 `777` 권한, Source에 정적 CA·CouchDB Credential 포함 | `project/personal/ssi/hyperledgerfabric/network.sh:14`, `project/personal/ssi/hyperledgerfabric/docker-compose/*.yaml`; 값은 본 문서에 복제하지 않음 |
| 12 | `FACT` | Verifier의 VP Input Component가 `localStorage`만 갱신하고 형제 Component State를 갱신하지 않음 | `project/personal/ssi/client/src/components/InPutVPModal.tsx:12`, `project/personal/ssi/client/src/components/VerifyVPModal.tsx:12`; 같은 Session의 Stale VP 가능 |
| 13 | `FACT` | Test/spec 0, Server/Client Dependency 미설치, Chaincode Module Lock 없음 | 전체 Inventory; 빌드·통합 재현 미검증 |
| 14 | `FACT` | Fabric Image Version 일부가 `latest`, Ledger/CouchDB Persistent Volume이 없음 | `project/personal/ssi/hyperledgerfabric/docker-compose/*.yaml`; 재현성·Data 보존 Gap |
| 15 | `FACT` | `didId` Schema의 `required` 오타, 빈 Array 404 판정, 신원 VC Error Message 오류 | `project/personal/ssi/server/src/models/issuer-user.ts:6`, `project/personal/ssi/server/src/controllers/issuer.ts:77`, `:128` |

## D-DV.8 CLAIM CONSISTENCY

| README/Project Claim | 구현 Evidence | 판정 |
|---|---|---|
| DID 생성·수정·삭제·조회 | Server API·Chaincode에 CRUD 존재, Client는 발급·조회만 노출 | Backend/Ledger `FACT`, UI는 부분 구현 |
| DID Challenge-Response | Challenge·Sign·Verify Code 존재 | 기능 `FACT`, Replay 방지 미완성 |
| VC 발급·VP 생성·검증 | 학력·신원 VC, 복합 VP, 서명 3개 검증 | Prototype 구현 `FACT` |
| 필요 정보만 선택 제출 | VP가 VC 2개를 고정 포함 | `CLAIM` 미충족 |
| W3C 표준 | W3C Context URL·용어 사용, 필드·Proof·Credential Shape 불일치 | 표준 참조 `FACT`, 준수 `CLAIM` 미검증 |
| 보안·프라이버시 강화 | Fabric TLS·서명 검증은 존재, Private Key·Challenge·ACL Gap 존재 | 강화 효과 `CLAIM` 미검증 |
| 역할별 서비스 | 3개 UI Route·4개 API Router·3 Org Topology | 구조 `FACT`, 실 Actor 분리는 Demo 수준 |

## D-DV.9 SOURCE MAP

- Project 의도·실행·Stack: `project/personal/ssi/README.md:25`, `:37`, `:122`, `:156`
- 아키텍처: `project/personal/ssi/meta/image1.png`, `project/personal/ssi/meta/image2.png`
- Client Route·Flow: `project/personal/ssi/client/src/App.tsx:15`, `project/personal/ssi/client/src/pages/*.tsx`, `project/personal/ssi/client/src/components/*.tsx`
- Client API·DTO: `project/personal/ssi/client/src/network/SSIapi.ts:4`, `project/personal/ssi/client/src/network/Interface.ts:1`
- Server Bootstrap·Session: `project/personal/ssi/server/src/app.ts:19`, `:33`, `:41`
- HTTP Contract: `project/personal/ssi/server/src/routes/*.ts`, `project/personal/ssi/server/src/controllers/*.ts`
- Crypto·DID·VC·VP: `project/personal/ssi/server/src/utils/crypto.ts:10`, `project/personal/ssi/server/src/ssi/*.ts`
- Chaincode: `project/personal/ssi/hyperledgerfabric/chaincode/did/did.go:15`
- Fabric Topology·Policy: `project/personal/ssi/hyperledgerfabric/config/configtx.yaml:1`, `project/personal/ssi/hyperledgerfabric/docker-compose/*.yaml`
- Network Automation: `project/personal/ssi/hyperledgerfabric/network.sh:6`
- Repository History: `project/personal/ssi/.git`, commits `684d1a6` through `1ce65e4`

## D-DV.10 CONCLUSION

`FACT` Source는 SSI Domain의 Issuer·Holder·Verifier Flow와 Fabric DID Ledger를 통합한 광범위한 Prototype을 보여준다. `INFERENCE` 경력 가치는 다중 기술 Stack을 하나의 시나리오로 연결한 설계·구현·자동화 경험에 있다. 다만 실행·테스트 Evidence, 개인별 기여, 표준 준수, 보안 강화 효과, 정량 성과는 현재 Source로 확정할 수 없다.
