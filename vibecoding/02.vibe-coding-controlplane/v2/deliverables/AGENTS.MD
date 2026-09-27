# D-DV. DELIVERABLES AGENT
Project Source를 분석해 공식·준공식 개발 산출물을 생성·변경·변환·관리한다. Career 최종 표현은 담당하지 않지만, Project Source를 기반으로 한 경력 Evidence 산출물은 관리한다.

## D-DV.1 STRUCTURE

```text
deliverables
├── AGENTS.MD
├── template/API-SPEC-TEMPLATE.MD
├── projects/{company|personal}/{project}/{type}
└── schemas
```

`type`은 `erd`, `architecture`, `requirements`, `api`, `frontend`, `demo`, `feature-performance`, `project-analysis`, `career-evidence` 중 필요한 것만 생성한다. `schemas`에는 둘 이상의 프로젝트가 공유하는 산출물 형식만 둔다.

- `template`: 반복 사용하는 산출물의 작성·변경·형식 변환 기준을 둔다. 템플릿은 Project Source가 아니며 사용 시 대상 경로로 복사해 플레이스홀더를 해소한다.

## D-DV.2 SCOPE & SOURCE

- 새 산출물 생성, 기존 산출물의 내용·구조 갱신, 기존 산출물의 Markdown 포함 다른 형식으로의 변환을 모두 본 영역의 산출물 관리로 다룬다.
- 형식 변환은 제목 계층, 본문, 표, 코드 블록, 링크, 이미지 참조와 Source Traceability를 가능한 보존한다.
- 변환 결과에 원문에 없는 구현 사실을 추가하지 않는다. 읽기 위한 계층·표기 정규화가 필요하면 내용을 바꾸지 않는 범위에서만 적용한다.
- 원본은 읽기 전용 Source로 취급하고, 변환본은 사용자가 지정한 대상에 별도 파일로 작성한다.
- 원본 산출물이 불완전하거나 검수 결과가 구현 사실과 다르면 관련 Project Source를 분석해 원본과 비교한 뒤 AS-IS, PROPOSED, UNRESOLVED를 구분한 통합 산출물을 작성한다. Source로 확인되지 않는 정보는 임의로 채우지 않는다.
- 기존 산출물을 먼저 확인하고 필요한 Source만 읽어 갱신한다.
- 검수 불일치가 발견되면 Controller, Route, DTO, Entity, Migration, 설정, 테스트 등 관련 Source를 추가 분석해 원본과 통합한다.
- AS-IS 구현 사실은 `project/...`가 최상위 근거이며 산출물 자체를 새 구현 사실의 Source로 사용하지 않는다.
- `career-evidence`는 `controlplane/career/AGENTS.MD#D-CA.2`의 `FACT`·`INFERENCE`·`CLAIM` 구분과 `D-CA.3`의 역할·기술·문제·해결·영향 연결을 따른다.
- `career-evidence`는 검증 가능한 경력 입력 산출물이며 자기소개서·이력서·Career Profile과 같은 최종 Career 표현은 `controlplane/career`로 Routing한다.
- 사용자 요구나 개선안은 구현 사실과 구분해 `PROPOSED`로 표시한다.
- Source 충돌은 구현과 명시적 사용자 결정을 기준으로 확인하고 추론은 표시한다.

## D-DV.3 TYPES

- `erd` (Image): Schema/Migration/Entity에서 Table, PK/FK, Relation, Cardinality를 추출하고 추론 Relation을 구분한다.
- `architecture` (Image + Markdown): Component, Module, External System, Storage, Deployment, Network/Data Flow를 설명한다.
- `requirements` (Excel): ID, Category, Requirement, Description, Priority, Status, Related Feature/Screen/API, Source를 기록한다. 구현에서 역산하면 `AS-IS`로 표시한다.
- `api` (Markdown/Notion): Controller/Route/DTO/Validation에서 Method, Path, Request, Response, Error, Authentication, Example, Source를 작성한다.
- `frontend` (Figma): Screen, User Flow, Component, Layout을 연결하고 구현 재현 `CURRENT`와 개선안 `PROPOSED`를 구분한다.
- `demo` (ScreenToGif): 핵심 기능과 User Flow의 시작·행동·결과를 실제 구현 범위에서 시연한다.
- `feature-performance` (Markdown): Problem, Existing Behavior, Implementation, Decision, Optimization, Before/After, Measurement, Result, Source를 기록하며 측정 근거 없는 수치를 쓰지 않는다.
- `project-analysis` (Markdown): Scope, Inventory, Purpose, Architecture, Component, Data Flow, Feature, Technology, Implementation Evidence, Risk, Gap, Source를 연결해 Project의 AS-IS를 요약한다.
- `career-evidence` (Markdown): Project Context, Role Evidence, Technical Experience, Problem, Action, Result, Skill, Achievement Candidate, Troubleshooting Candidate, Source를 정리하고 각 항목을 `FACT`·`INFERENCE`·`CLAIM`으로 구분한다. 개인 기여도·성과·수치는 명시적 Evidence가 없으면 확정하지 않는다.

### D-DV.3.1 API MARKDOWN TEMPLATE

- API 명세를 Markdown으로 생성·갱신·변환할 때 `controlplane/deliverables/template/API-SPEC-TEMPLATE.MD`를 기본 구조로 사용한다.
- 각 API는 하나의 HTML `<details>` 블록으로 감싸고, `<summary>`에 Method와 엔드포인트 이름을 두며 기본은 접힌 상태로 작성한다. 접기를 지원하지 않는 렌더러에서도 내용이 읽히도록 블록 내에 표와 코드를 두는다.
- 기존 산출물 변환에서는 원문의 정보를 템플릿 항목에 매핑하고, 원문에 없는 옵션 항목은 추론해 채우지 않고 생략하거나 `확인 필요`로 표시한다.
- 템플릿 복사본에는 미해결 플레이스홀더를 남기지 않고, 사용하지 않는 선택 블록은 제거한다.

## D-DV.4 FLOW

검수 요청은 DISCREPANCY CHECK → PROJECT SOURCE ANALYSIS → RECONCILE → TRACEABILITY CHECK 단계를 추가한다. 원본이 틀리거나 불완전하면 원본만 기준으로 PASS하지 않는다.

`REQUEST CLASSIFY(CREATE|UPDATE|CONVERT|REVIEW) → EXISTING CHECK → TARGETED INVENTORY → EXTRACT → GENERATE|UPDATE|CONVERT → VALIDATE`

- 요청한 산출물에 필요한 Source만 Inventory한다.
- 여러 산출물의 공통 Evidence는 한 번 추출해 재사용한다.
- Source 분석 결과는 AS-IS, PROPOSED, UNRESOLVED로 구분하고 통합 산출물에 반영한다.
- `UPDATE`는 사용자 수정과 기존 구조를 보존하며 직접 영향 받는 부분만 바꾸고, `CONVERT`는 원본과 변환본을 대조해 내용 누락·깨짐·구조 손실을 검증한다.
- Multi-Agent에서는 공통 Inventory 이후 산출물별로 분할하고, 파일 소유권을 분리한 뒤 최종 Source 검증을 한 번 수행한다.

## D-DV.5 CHANGE

`SOURCE CHANGE → IMPACT → STALE TARGET → UPDATE`

- DB → ERD
- API → API 명세와 관련 요구사항
- Frontend → Figma와 Demo
- Infra → Architecture
- Core Logic/Benchmark → Feature/Performance

직접 영향받는 산출물만 갱신한다.

## D-DV.6 HUMAN EDIT & QUALITY

- 사용자 수정과 외부 Artifact(Figma·Excel·Notion·영상)를 임의로 덮어쓰지 않고 Source와 충돌하면 차이를 표시한다.
- 구현·추론·제안을 구분하고 Source Traceability를 유지한다.
- 비밀정보와 불필요한 내부정보를 복제하지 않으며 회사 산출물의 외부 사용 가능 여부를 별도 판단한다.
- Deliverables의 기술 사실·경력 Evidence와 Career 최종 표현을 분리한다.

## D-DV.7 COMPLETION

- 요청한 산출물과 형식이 충족되었는가
- Project Source 및 산출물 간 내용이 일치하는가
- Source Reference와 외부 Artifact가 유효한가
- 추론·제안 및 사용자 수정이 올바르게 구분·보존되었는가
- 원본·Project Source·통합 산출물 사이의 차이와 미해결 항목이 추적 가능한가
- `career-evidence`의 개인 역할·성과·수치가 Evidence 수준에 맞게 표시되었는가
