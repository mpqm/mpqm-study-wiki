# D-DV. SSI CAREER EVIDENCE SUMMARY
SSI Project 전수조사 결과를 Career 계약의 역할·기술·문제·해결·영향 Context와 `FACT`·`INFERENCE`·`CLAIM`으로 분류한 경력 Evidence 산출물이다. 이 문서는 최종 이력서·자기소개서 표현이 아니다.

## D-DV.1 EVIDENCE POLICY

- `FACT`: `project/personal/ssi` Source에서 직접 확인된 Project 사실
- `INFERENCE`: 여러 FACT를 연결한 경험·역할 해석
- `CLAIM`: 개인 신원·담당 범위·실행 결과가 확인된 후에만 사용할 경력 표현 후보

Project 구현 사실과 개인 기여는 다른 사실이다. Source에 코드가 있다는 이유로 특정 인물이 모든 설계·구현을 담당했다고 확정하지 않는다.

## D-DV.2 PROJECT CARD

| 항목 | 등급 | 내용 | Source |
|---|---|---|---|
| Project | `FACT` | Self-Sovereign Identity / Hyperledger Fabric 기반 신원인증 Prototype | `project/personal/ssi/README.md:25`, `:122` |
| Team | `FACT` | README에 박종성·김민규 2인 졸업 팀으로 기록 | `project/personal/ssi/README.md:14`, `:20` |
| Period | `FACT` | Git commit은 `2023-11-27`~`2025-04-23`; 후반부는 주로 README·Meta 갱신 | `project/personal/ssi/.git`, commits `684d1a6`~`1ce65e4` |
| Source Scale | `FACT` | Git 추적 82개: Client 38, Server 30, Fabric 10, Meta 2, 기타 2 | `project/personal/ssi` 전체 Inventory |
| Purpose | `CLAIM` | DID·VC·VP와 Private Blockchain을 활용한 자기주권 신원인증 및 보안·프라이버시 강화 | `project/personal/ssi/README.md:28` |
| AS-IS | `FACT` | React 3역할 UI, Express 22 API, MongoDB, Fabric Gateway, Go DID CRUD, 3 Org Network 코드 존재 | `project/personal/ssi/client/src/App.tsx:15`, `project/personal/ssi/server/src/routes/*.ts`, `project/personal/ssi/hyperledgerfabric/*` |
| Runtime Result | `FACT` | Source에 자동 Test·실행 Log·성능 측정 결과가 없음 | Project 전체 Inventory |

## D-DV.3 ROLE ATTRIBUTION

### D-DV.3.1 VERIFIED

- `FACT` README는 2인 Team을 명시하지만 개인별 담당 Module·역할·기여율을 기록하지 않는다. Source: `project/personal/ssi/README.md:14`.
- `FACT` Repository의 17개 Commit은 모두 `MpqM/mpqm` 명의와 두 Email 조합으로 기록된다. Initial commit `684d1a6`은 80개 파일 34,399행을 추가했고, 이후 Commit은 주로 README·Meta 갱신이다. Source: `project/personal/ssi/.git`.
- `FACT` README의 박종성 Link는 `github.com/mpqm`이지만, 김민규 Link는 `{github}` Placeholder다. Source: `project/personal/ssi/README.md:20`.

### D-DV.3.2 INTERPRETATION

- `INFERENCE` `MpqM/mpqm`과 박종성이 동일 인물이라면 Repository 초기 통합·관리와 후속 문서화 역할을 주도했을 가능성이 높다.
- `INFERENCE` 하지만 Initial commit이 완성된 Code 대부분을 한 번에 추가했으므로 파일별 저작·개인별 구현 범위는 Git 이력만으로 분리할 수 없다.
- `CLAIM` 박종성·`mpqm`·현재 사용자의 동일성과 직접 담당 범위를 사용자가 확인하기 전에는 “전체 설계·구현”, “단독 개발”을 사용하지 않는다.

## D-DV.4 EXPERIENCE CLASSIFICATION

| 경험 분류 | Project `FACT` | 경험 `INFERENCE` | `CLAIM` 후보 조건 |
|---|---|---|---|
| SSI Domain 모델링 | Issuer·Holder·Verifier, DID·VC·VP Flow가 UI·API·Type에 반영 | 신원 증명 역할과 데이터 Flow를 Software 경계로 분해한 경험 | Domain 설계 담당 확인 |
| Fabric Network | 3 Org, 6 Peer/CouchDB, 3-node Raft, 4 CA, Channel·Anchor·Lifecycle Script 존재 | 다중 조직 Permissioned Ledger 구성과 Bootstrap 자동화 경험 | `network.sh`·Compose·Policy 직접 작성 확인 |
| Smart Contract | Go DID Model·Create/Get/Update/Delete World-state Contract 존재 | Ledger Key·State Transition·Existence Check 설계 경험 | Chaincode 직접 구현 확인 |
| Fabric Integration | TypeScript Gateway, TLS gRPC, X.509 Identity, Signer, Evaluate/Submit 분리 | Application–Ledger 통합 경계 구현 경험 | Gateway·Env 구성 직접 담당 확인 |
| Cryptography | RSA 2048, ECC secp256k1, SHA-256 Signature·Verify, Public-key Hash DID | Key Pair·Digital Signature를 SSI Flow에 적용한 경험 | Crypto·DID Helper 직접 구현 확인 |
| VC/VP | 학력·신원 VC, 두 VC를 포함한 VP, Issuer·Holder Signature 검증 | Off-chain Credential과 On-chain DID Public Key를 결합한 Prototype 경험 | VC/VP Helper·Verifier 직접 담당 확인 |
| Backend | TypeScript Strict, Express 22 API, MongoDB 3 Model, Session, bcrypt, Log·Env Validation | Web2 계정·업무 Data와 SSI Flow를 통합한 Backend 경험 | Server Module 담당 확인 |
| Frontend | React 3 Role Route, 17 Component, API·DTO 분리, Demo Wallet | 역할별 시나리오를 통합 Demo UI로 제공한 경험 | Client Module 담당 확인 |
| Architecture/Docs | Project README, SSI 개념도, Full-stack/Fabric 아키텍처도, 실행 절차 | 복합 System을 시각·운영 관점으로 문서화한 경험 | 이미지·README 작성 주체 확인 |

## D-DV.5 PROBLEM ACTION RESULT CANDIDATES

### D-DV.5.1 MULTI-ORGANIZATION FABRIC BOOTSTRAP

- `INFERENCE Problem`: CA·MSP·Orderer·Peer·Channel·Chaincode의 순서와 인증서 경로를 다수 조직에서 반복 구성해야 한다.
- `FACT Action`: `network.sh`가 MSP 생성, Artifact, Node, Channel, Anchor, Lifecycle, Smoke 호출을 함수화하고 `start`로 연결한다. Source: `project/personal/ssi/hyperledgerfabric/network.sh:6`, `:17`, `:446`, `:588`, `:609`, `:749`.
- `INFERENCE Result`: 다중 조직 개발 Network의 수동 설정 단계를 하나의 Script Flow로 재현하려는 자동화 경험으로 분류할 수 있다.
- `Gap`: 실행 Log·시간 단축·성공률 Evidence가 없고 Fail-fast·안전한 Reset이 미흡하다.

### D-DV.5.2 APPLICATION TO LEDGER INTEGRATION

- `INFERENCE Problem`: Express 업무 Logic이 Fabric의 TLS, MSP Identity, Signer, Channel, Contract, Transaction 유형을 매번 다루지 않도록 경계가 필요하다.
- `FACT Action`: 조직별 `connection-info`, Gateway Factory, DID Operation으로 분리하고 CRUD를 evaluate/submit에 매핑했다. Source: `project/personal/ssi/server/src/ssi/connection-info.ts:5`, `project/personal/ssi/server/src/ssi/fabric-gateway.ts:12`, `project/personal/ssi/server/src/ssi/did-operation.ts:8`.
- `INFERENCE Result`: Backend Controller가 Fabric SDK 세부사항 대신 DID Operation에 의존하는 계층 분리 경험으로 분류할 수 있다.
- `Gap`: Gateway Org 선택 `switch` 오류로 실제 조직 분리 결과는 확정할 수 없다.

### D-DV.5.3 SIGNED CREDENTIAL VERIFICATION

- `INFERENCE Problem`: Off-chain VC·VP의 위변조를 Ledger에 등록된 DID Public Key로 검증해야 한다.
- `FACT Action`: Issuer와 Holder가 각각 VC·VP Message를 서명하고 Verifier가 Fabric DID를 조회해 서명 3개를 검증한다. Source: `project/personal/ssi/server/src/ssi/vcvp-helper.ts:32`, `:95`, `project/personal/ssi/server/src/controllers/verifier.ts:14`.
- `INFERENCE Result`: On-chain Identifier/Key Registry와 Off-chain Credential를 연결한 검증 Pipeline 구현 경험으로 분류할 수 있다.
- `Gap`: JSON Canonicalization, Challenge Binding, Credential Status/Revocation, Schema Validation Evidence가 없다.

### D-DV.5.4 ROLE-BASED DEMO FLOW

- `INFERENCE Problem`: Issuer·Holder·Verifier 상호작용을 하나의 시연 환경에서 재현해야 한다.
- `FACT Action`: 역할별 Route·Modal·API를 분리하고 Web Storage와 수동 JSON 복사로 Challenge·VC·VP를 전달한다. Source: `project/personal/ssi/client/src/App.tsx:15`, `project/personal/ssi/client/src/components/*.tsx`.
- `INFERENCE Result`: 복잡한 SSI Protocol을 역할별 사용자 Flow로 시각화한 Prototype 경험으로 분류할 수 있다.
- `Gap`: 별도 기기·계정 간 전달, Wallet Key 보호, 선택적 공개는 완성되지 않았다.

## D-DV.6 SKILL EVIDENCE

### D-DV.6.1 CORE

- `FACT`: Hyperledger Fabric CA/MSP, Raft Orderer, Peer/Gossip, Channel, Endorsement, CouchDB, Chaincode Lifecycle
- `FACT`: DID Document, VC, VP, Challenge-Response, Digital Signature, Public-key Verification
- `FACT`: TypeScript/Express, React/TypeScript, Go Chaincode, MongoDB/Mongoose
- `FACT`: Fabric Gateway, gRPC TLS, X.509 Identity/Signer, Docker Compose, Shell Automation

### D-DV.6.2 SUPPORTING

- `FACT`: bcrypt, express-session, connect-mongo, envalid, Winston Daily Rotate
- `FACT`: REST API/DTO Layer, React Router, React-Bootstrap, Web Storage
- `FACT`: RSA 2048, ECC secp256k1, SHA-256 Hash/Signature

### D-DV.6.3 PROFICIENCY BOUNDARY

- `INFERENCE`: 다중 조직 Fabric–Full Stack 통합과 SSI Domain Prototype 구현을 다룬 Evidence는 충분하다.
- `CLAIM`: 전문 수준, Production 운영, W3C 준수, 보안 강화 성과, 성능 최적화는 현재 Evidence로 주장하지 않는다.

## D-DV.7 ACHIEVEMENT AND TROUBLESHOOTING STATUS

### D-DV.7.1 ACHIEVEMENT

- `FACT` Project Source로 검증할 수 있는 것은 기능·구성 범위이다.
- `FACT` 사용자 수, 처리량, Latency, 장애 감소, Test 통과율, 개발 기간 단축, 운영 기간 수치가 없다.
- `CLAIM`: “성능 개선”, “안정성 향상”, “보안 강화 달성”, 정량 성과는 사용 불가다.

### D-DV.7.2 TROUBLESHOOTING

- `FACT` Source에 Issue, Incident, 장애 재현, 대안 비교, 수정 전후 검증 기록이 없다.
- `INFERENCE` `network.sh` 자동화, Gateway 캡슐화, 서명 Message 재구성은 문제 해결 주제 후보지만 실제 문제·선택 이유·결과 확인이 필요하다.

## D-DV.8 CONDITIONAL CLAIM CANDIDATES

아래는 개인 담당 범위와 실행 Evidence를 확인한 후에만 사용할 수 있다.

- `CLAIM`: “3개 참여 조직, 3-node Raft Orderer, 6개 Peer/CouchDB로 구성된 Hyperledger Fabric SSI 개발 Network를 설계·구성했다.”
- `CLAIM`: “Fabric CA/MSP 생성부터 Channel 구성·Chaincode Lifecycle·CRUD Smoke Flow까지 Shell Script로 자동화했다.”
- `CLAIM`: “Go Chaincode로 DID World-state CRUD를 구현하고 TypeScript Fabric Gateway의 TLS·X.509 Signer와 연동했다.”
- `CLAIM`: “Issuer·Holder·Verifier Flow에서 DID 발급, Challenge-Response, 학력·신원 VC, VP 서명 검증을 End-to-End로 통합했다.”
- `CLAIM`: “TypeScript/Express 22개 API와 React 역할별 UI를 연결해 SSI 통합 Demo를 구성했다.”

다음 표현은 현재 상태에서 사용하지 않는다.

- “W3C DID/VC 표준 완전 준수”
- “선택적 공개 구현 완료”
- “Private Key를 안전하게 보호하는 Wallet 구현”
- “Production 배포·운영”
- “성능·가용성·보안 정량 개선”
- “Project 전체 단독 개발”

## D-DV.9 EVIDENCE NEEDED FOR PROMOTION

Career Knowledge와 최종 이력서 표현으로 승격하려면 다음을 확인해야 한다.

1. 현재 사용자, 박종성, Git Author `MpqM/mpqm`의 동일성
2. 본인이 직접 담당한 범위: Fabric, Chaincode, Backend, Frontend, Architecture, Paper 중 구체 Module
3. 팀원 김민규와의 역할 분담과 공동 작업 범위
4. 실제 실행·시연 환경, 성공한 Flow, 사용한 Fabric·Node·Go Version
5. 개발 중 겪은 장애·성능·설계 문제, 검토한 대안, 선택 이유, 검증 결과
6. 시연·논문·발표·평가 결과와 정량·정성 피드백

## D-DV.10 SUMMARY

`FACT` SSI Project Source는 Hyperledger Fabric 인프라, Go DID Chaincode, TypeScript/Express, MongoDB, React를 통합해 DID·VC·VP 시나리오를 구현한 Evidence를 제공한다. `INFERENCE` 가장 강한 경험 분류는 “Permissioned Blockchain 기반 SSI End-to-End Prototype 통합”과 “다중 조직 Fabric 개발 Network 자동화”다. `CLAIM` 개인 기여, 표준 준수, 운영 성과, 정량 성과는 추가 Evidence 전에 확정하지 않는다.
