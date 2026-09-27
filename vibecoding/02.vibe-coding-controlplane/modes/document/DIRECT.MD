# DR. DIRECT DOCUMENT MODE
사용자가 지정한 문서만 수정하는 기본 Mode다.

## DR.1 DEFAULT BUDGET

- `max_files=3`
- Graph 탐색과 반복 Round 없음

사용자가 명시한 파일 목록과 Budget이 다르면 명시 값을 우선한다.

## DR.2 FLOW

`SEED CHECK → EDIT → LOCAL VALIDATE → REPORT`

- Seed와 가장 가까운 `AGENTS.MD`만 적용한다.
- 직접 Reference에서 정합성 문제가 보여도 자동 전파하지 않고 후보로 보고한다.
- 같은 표현을 맞추기 위한 전역 검색·일괄 재작성은 하지 않는다.

## DR.3 STOP

Seed 수정과 Local 검증이 끝나면 종료한다. 다른 문서 수정이 필요하면 별도 요청 또는 `graph` Mode로 전환한다.
