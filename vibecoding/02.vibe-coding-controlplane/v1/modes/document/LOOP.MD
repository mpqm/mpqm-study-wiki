# LP. LOOP DOCUMENT MODE
처음 확정한 문서 집합을 검사하며 실패한 문서만 제한된 횟수로 개선한다.

## LP.1 DEFAULT BUDGET

- `max_rounds=2`
- `max_files=8`
- Scope 확장 금지

## LP.2 FLOW

`FIX SCOPE → CHECK → EDIT FAILURES → RECHECK DELTA → STOP`

- Round 1 전에 파일 목록과 종료 Check를 고정한다.
- 다음 Round에서는 직전 변경 파일과 실패한 검사만 다시 확인한다.
- 이미 통과한 문서를 다시 요약하거나 표현만 바꾸지 않는다.
- 새 의존 문서가 발견돼도 현재 Loop에 넣지 않고 후보로 보고한다.

## LP.3 STOP

다음 중 하나면 종료한다.

- 모든 Check 통과
- 새 변경이나 개선이 없음
- `max_rounds` 도달
- 같은 실패가 반복되어 사용자 결정 필요

Loop는 완벽해질 때까지 반복하는 방식이 아니라 정해진 Check를 Budget 안에서 만족시키는 방식이다.
