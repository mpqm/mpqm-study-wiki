# GR. GRAPH DOCUMENT MODE
Seed에서 실제 의존 Edge를 따라 영향받는 문서만 제한적으로 갱신한다.

## GR.1 DEFAULT BUDGET

- `max_depth=1`
- `max_files=12`
- `direction=dependents`

사용자는 `dependencies`, `dependents`, `both`와 Budget을 바꿀 수 있다.

## GR.2 EDGES

다음 근거가 있을 때만 Edge로 인정한다.

- Markdown의 직접 Link·경로·Section Reference
- `source`, `depends_on`, `derived` Metadata
- 상위/하위 `AGENTS.MD` 적용 관계
- 명시된 Contract·Schema·Prompt Consumer

같은 단어가 나온다는 이유만으로 Edge를 만들지 않는다.

## GR.3 FLOW

`SEED → EDGE DISCOVERY → BOUNDED IMPACT SET → EDIT AFFECTED → VALIDATE EDGES`

- 탐색된 문서와 실제 수정 문서를 구분한다.
- 영향이 없는 Node는 읽기만 하고 수정·재생성하지 않는다.
- Queue가 Budget에 닿으면 확장을 멈추고 남은 Node를 후보로 보고한다.
- Task가 지속될 때만 선택된 Node와 Edge를 `GRAPH.MD`로 저장한다.

## GR.4 STOP

선택된 Edge의 Reference와 계약이 일치하면 종료한다. Workspace 전체의 연결 성분을 완주하는 것이 목표가 아니다.
