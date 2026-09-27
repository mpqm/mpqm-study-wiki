# MO. MODE CONTROL
Controlplane 작업의 탐색·변경 전략을 선택한다. Agent 구성은 `agent_mode`, 문서 범위 전략은 `document_mode`로 구분한다.

## MO.1 ROUTING

- 한 문서 또는 명시 목록만 변경 → `direct`
- Source/의존 문서의 영향만 전파 → `graph`
- 고정 범위를 반복 점검·개선 → `loop`
- 영향 범위를 먼저 찾고 그 안에서 반복 개선 → `hybrid`
- 사용자가 지정하지 않으면 가장 작은 범위인 `direct`를 사용한다.

선택한 `controlplane/modes/document/*.MD` 하나만 추가로 읽는다.

## MO.2 REQUEST

문서 변경 전에 다음 값을 확정한다.

- `owner`: `domain/career`, `domain/deliverables`, `domain/develop`, `domain/task`, `shared`, `history`, `refactor`
- `seed`: 시작 문서 또는 명시된 파일 목록
- `document_mode`: `direct`, `graph`, `loop`, `hybrid`
- `max_files`: 수정 가능한 최대 파일 수
- `max_depth`: Graph 탐색 깊이
- `max_rounds`: Loop 반복 수
- `checks`: 종료를 판정할 검사

해당하지 않는 값은 생략한다. 지속 작업일 때만 `TASK.MD`에 기록한다.

## MO.3 BOUNDARY

- 먼저 읽기 전용으로 대상 집합을 확정한 뒤 수정한다.
- 선택된 Owner, Seed, Budget 밖으로 자동 확장하지 않는다.
- Archive, Third-party, Project Source는 사용자가 직접 포함하지 않으면 수정 대상에서 제외한다.
- 변경되지 않았거나 검사에 통과한 문서는 다시 생성·재요약하지 않는다.
- Budget을 넘으면 전체 처리를 계속하지 않고 초과 원인과 다음 후보를 보고한다.

## MO.4 OUTPUT

변경 파일, 선택 근거, 검사 결과, Budget에서 제외된 후보만 보고한다. 전체 탐색 로그와 변경되지 않은 문서 목록은 저장하지 않는다.
