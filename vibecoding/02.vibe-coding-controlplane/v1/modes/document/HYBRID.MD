# HY. HYBRID DOCUMENT MODE
Graph로 영향 범위를 한 번 선택하고 그 고정 범위 안에서 Loop를 수행한다.

## HY.1 DEFAULT BUDGET

- Graph: `max_depth=1`, `max_files=12`, `direction=dependents`
- Loop: `max_rounds=2`
- 전체 수정 상한은 Graph의 `max_files`와 같다.

## HY.2 FLOW

`SEED → BOUNDED GRAPH → FREEZE SCOPE → CHECK → EDIT FAILURES → DELTA RECHECK`

- Graph 단계가 끝나면 Scope를 고정한다.
- Loop 중 새 Edge가 보여도 Scope를 자동 확장하지 않는다.
- 실제 영향이 있고 Check에 실패한 문서만 수정한다.
- Graph와 Loop 결과를 각각 만들지 않고 하나의 변경 Manifest로 합친다.

## HY.3 USE

Contract·규칙 변경처럼 의존 문서를 찾아야 하고, 선택된 문서의 정합성을 두 번 이상 확인해야 할 때만 사용한다. 단순 표현 수정에는 사용하지 않는다.
