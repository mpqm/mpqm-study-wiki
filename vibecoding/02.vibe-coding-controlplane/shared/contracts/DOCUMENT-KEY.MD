# DK. DOCUMENT KEY CONTRACT
Controlplane이 관리하는 Markdown의 문서 키와 Section 형식을 정의한다.

## DK.1 FORMAT

- Base Key는 의미를 나타내는 영문 대문자 두 글자다.
- 루트 제어·Meta·Mode·Shared 문서는 `{XX}`, Domain 문서는 Namespace를 붙인 `D-{XX}`를 Qualified Key로 사용한다.
- History로 이동한 Task는 출처 추적을 위해 `D-TA`, refactor 기록은 `RR`처럼 원래 Qualified Key를 유지한다.
- 최상위 제목은 `# {KEY}. TITLE`, Section은 `## {KEY}.1 TITLE`, 하위 Section은 `### {KEY}.1.1 TITLE` 형식이다.
- Section Reference는 경로와 Qualified Key를 함께 기록한다. 예: `controlplane/domain/develop/contracts/EXECUTION.MD#D-EX.4`.
- 파일 확장자는 `.MD`를 사용한다.
- 외부·Third-party·Project Source 문서의 내용은 수정하지 않으며 Controlplane이 작성·관리하는 문서에 적용한다.

## DK.2 CONTROL KEY REGISTRY

- `CP`: Controlplane 구조와 책임
- `AG`: 공통 Agent 규칙
- `HP`: Controlplane 사용 안내
- `RF`: Refactor Control
- `MT`: Refactor Metrics
- `RR`: Refactor Record
- `HI`: History Meta
- `MO`: Mode Control
- `DR`: Direct Document Mode
- `GR`: Graph Document Mode
- `LP`: Loop Document Mode
- `HY`: Hybrid Document Mode
- `SH`: Shared
- `DK`: Document Key Contract
- `MC`: MCP Integration Contract
- `PR`: Path Resolution Contract

## DK.3 DOMAIN KEY REGISTRY

- `D-AG`: Domain 공통 Routing
- `D-CA`: Career
- `D-DV`: Deliverables
- `D-DE`: Develop
- `D-DC`: Company Develop
- `D-DP`: Personal Develop
- `D-EX`: Develop Execution Contract
- `D-CO`: Coordinator Role
- `D-PL`: Planner Role
- `D-RV`: Reviewer Role
- `D-IM`: Implementer Role
- `D-TA`: Task

새 Base Key는 기존 의미와 겹치지 않을 때 Registry에 추가한다. 같은 역할의 문서는 같은 Qualified Key를 사용할 수 있으며 경로로 식별한다.

## DK.4 CHANGE

키 변경 시 문서 Heading, 직접 Section Reference, Registry를 함께 갱신한다. 역할 의미나 참조 호환성이 바뀌면 검증을 마친 뒤 `controlplane/history/{YYYY}/{MM-DD}`에 기록한다.
