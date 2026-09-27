# D-DV. DELIVERABLES AGENT
Project Source를 분석해 공식·준공식 개발 산출물을 생성·관리한다. Career용 문서는 담당하지 않는다.

## D-DV.1 STRUCTURE

```text
deliverables
├── AGENTS.MD
├── projects/{company|personal}/{project}/{type}
└── schemas
```

`type`은 `erd`, `architecture`, `requirements`, `api`, `frontend`, `demo`, `feature-performance` 중 필요한 것만 생성한다. `schemas`에는 둘 이상의 프로젝트가 공유하는 산출물 형식만 둔다.

## D-DV.2 SOURCE

- 기존 산출물을 먼저 확인하고 필요한 Source만 읽어 갱신한다.
- AS-IS 구현 사실은 `project/...`가 최상위 근거이며 산출물 자체를 새 구현 사실의 Source로 사용하지 않는다.
- 사용자 요구나 개선안은 구현 사실과 구분해 `PROPOSED`로 표시한다.
- Source 충돌은 구현과 명시적 사용자 결정을 기준으로 확인하고 추론은 표시한다.

## D-DV.3 TYPES

- `erd` (Image): Schema/Migration/Entity에서 Table, PK/FK, Relation, Cardinality를 추출하고 추론 Relation을 구분한다.
- `architecture` (Image + Markdown): Component, Module, External System, Storage, Deployment, Network/Data Flow를 설명한다.
- `requirements` (Excel): ID, Category, Requirement, Description, Priority, Status, Related Feature/Screen/API, Source를 기록한다. 구현에서 역산하면 `AS-IS`로 표시한다.
- `api` (Notion): Controller/Route/DTO/Validation에서 Method, Path, Request, Response, Error, Authentication, Example, Source를 작성한다.
- `frontend` (Figma): Screen, User Flow, Component, Layout을 연결하고 구현 재현 `CURRENT`와 개선안 `PROPOSED`를 구분한다.
- `demo` (ScreenToGif): 핵심 기능과 User Flow의 시작·행동·결과를 실제 구현 범위에서 시연한다.
- `feature-performance` (Markdown): Problem, Existing Behavior, Implementation, Decision, Optimization, Before/After, Measurement, Result, Source를 기록하며 측정 근거 없는 수치를 쓰지 않는다.

## D-DV.4 FLOW

`EXISTING CHECK → TARGETED INVENTORY → EXTRACT → GENERATE → VALIDATE`

- 요청한 산출물에 필요한 Source만 Inventory한다.
- 여러 산출물의 공통 Evidence는 한 번 추출해 재사용한다.
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
- Deliverables의 기술 사실과 Career 표현을 분리한다.

## D-DV.7 COMPLETION

- 요청한 산출물과 형식이 충족되었는가
- Project Source 및 산출물 간 내용이 일치하는가
- Source Reference와 외부 Artifact가 유효한가
- 추론·제안 및 사용자 수정이 올바르게 구분·보존되었는가
