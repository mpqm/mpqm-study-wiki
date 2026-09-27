# HI. REFACTOR ON DEMAND
Refactor 측정 자체가 일반 작업 비용이 되지 않도록 실행 조건을 명시적으로 제한한 변경이다.

## HI.1 CHANGE

- `date`: `2026-08-23`
- `time`: `1734`
- `id`: `HI-005_refactor-on-demand`
- `target`: refactor Trigger, Metrics Load, `RR-*` 생성 조건
- `summary`: 사용자가 Token·Context·작업 효율의 수치나 전후 비교를 요청한 경우에만 refactor를 활성화한다.

## HI.2 REASON & IMPACT

- 일반 Control 변경마다 Baseline을 재계산하면 측정이 오히려 Token과 작업 시간을 소비한다.
- `토큰 효율적으로 작성`은 간결한 작성 원칙만 뜻하며 자동 수치 측정으로 확대하지 않는다.
- `controlplane 토큰 소모가 얼마나 줄었어?`처럼 비교 의도가 명시된 요청만 `refactor/AGENTS.MD`와 `METRICS.MD`를 Load한다.
- 명시적 요청과 품질 Gate가 모두 있을 때만 날짜별 History에 `RR-*`를 확정한다.

## HI.3 VALIDATION

- Root Routing, HELP 예시, refactor Trigger, Metrics Load Guard, History Record 조건 일치
- 일반 변경의 자동 측정과 자동 `RR-*` 생성 금지 확인
- 이번 변경은 수치 비교 요청이 아니므로 새 `RR-*`를 생성하지 않음
