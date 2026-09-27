# DK. DOCUMENT KEY CONTRACT
Controlplane이 관리하는 Markdown의 문서 키와 Section 형식을 정의한다.

## DK.1 FORMAT

- Base Key는 의미를 나타내는 영문 대문자 두 글자다.
- 루트 제어·Meta·계약 문서는 `{XX}`, Domain 문서는 Namespace를 붙인 `D-{XX}`를 Qualified Key로 사용한다.
- 사용자가 History로 분류하는 문서는 출처 추적을 위해 원래 Qualified Key를 유지한다.
- 최상위 제목은 `# {KEY}. TITLE`, Section은 `## {KEY}.1 TITLE`, 하위 Section은 `### {KEY}.1.1 TITLE` 형식이다.
- Section Reference는 경로와 Qualified Key를 함께 기록한다. 예: `controlplane/contracts/EXECUTION.MD#D-EX.4`.
- 파일 확장자는 `.MD`를 사용한다.
- 외부·Third-party·Project Source 문서의 내용은 수정하지 않으며 Controlplane이 작성·관리하는 문서에 적용한다.

## DK.2 CONTROL KEY REGISTRY

- `CP`: Controlplane 구조와 책임
- `AG`: 공통 Agent 규칙
- `HP`: Controlplane 사용 안내
- `HI`: 사용자 분류 History Record



- `DK`: Document Key Contract
- `MC`: MCP Integration Contract
- `PR`: Path Resolution Contract
- `SI`: Source Integration Contract

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

키 변경 시 문서 Heading, 직접 Section Reference, Registry를 함께 갱신한다. 역할 의미나 참조 호환성이 바뀌면 검증 후 사용자가 필요할 때 `controlplane` 루트에 기록한다.

## DK.5 LOG CONTRACT

- 로그는 별도 History 도메인 없이 `controlplane/{YYYY-MM-DD}` 날짜 폴더에 둔다.
- 로그 파일명은 `{HHmm}_{KEY}.MD`를 사용한다.
- 로그 문서의 최상위 Heading, Section, Qualified Key는 이 문서의 규칙을 따른다.
- Agent는 로그를 자동 생성·복원하지 않으며, 사용자가 필요할 때 직접 분류한다.