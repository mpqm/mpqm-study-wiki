# HI. HISTORY META
History를 업무 Domain에서 분리하고 Controlplane 전체의 완료 기록을 날짜별로 통합한 변경이다.

## HI.1 CHANGE

- `date`: `2026-08-23`
- `time`: `1727`
- `id`: `HI-004_history-meta`
- `target`: History, Task Archive, refactor Record, 문서 키와 경로 계약
- `summary`: `controlplane/domain/history`를 `controlplane/history/{YYYY}/{MM-DD}` Meta 구조로 변경했다.

## HI.2 MIGRATION

- `domain/history/AGENTS.MD` → `history/AGENTS.MD`
- `domain/history/2026/H-*.MD` → `history/2026/08-23/{HHmm}_HI-*.MD`
- `domain/task/T-001_CONTROLPLANE-AUDIT/TASK.MD` → `history/2026/08-23/1708_TA-001_CONTROLPLANE-AUDIT.MD`
- `refactor/records/2026/R-001_CONTROLPLANE-BASELINE.MD` → `history/2026/08-23/1711_RR-001_CONTROLPLANE-BASELINE.MD`

History 문서는 Meta Key `HI`로 바꿨다. 보관된 Task는 출처 Key `D-TA`, refactor 기록은 `RR`을 유지한다.

## HI.3 REASON & IMPACT

- `domain`에는 진행 중인 지속 업무만 남고, 완료된 제어·Task·측정 기록은 한 날짜 축에서 찾을 수 있다.
- 완료 Task는 `{HHmm}_{TA-ID}.MD` 한 파일로 찾아볼 수 있고 첨부 자료용 하위 폴더를 만들지 않는다.
- refactor 규칙과 과거 측정값의 Owner가 분리된다.
- `CONTROLPLANE.MD` 중복을 압축해 `RR-001` 대비 모든 표준 Load Set의 Proxy가 감소했다. 상세 수치는 `1727_RR-002_HISTORY-META-REFACTOR.MD`가 Source of Truth다.

## HI.4 VALIDATION

- 이전 `domain/history`, `refactor/records` 경로 제거
- `{YYYY}/{MM-DD}/{HHmm}_{HI|RR|TA}-{SEQ}_{KEY}.MD` 깊이와 기록별 Key 검사
- 모든 직접 Reference와 구조 문서 갱신
- Standard Load Set 5개의 파일 수와 품질 Gate 유지
- Project Source 변경 없음
