# HI. DOMAIN AND REFACTOR CONTROL
지속 업무 Domain과 Controlplane 자체의 효율 개선 영역을 분리한 제어 변경 기록이다.

## HI.1 CHANGE

- `date`: `2026-08-23`
- `time`: `1715`
- `id`: `HI-003_domain-refactor-control`
- `target`: Controlplane 구조, 문서 키, Develop 실행 계약, 사용 안내, 효율 측정
- `summary`: 다섯 지속 영역을 `domain` 아래로 이동하고 `D-XX` Qualified Key를 적용했다. `refactor`에는 측정 계약과 최초 Baseline을 추가했다.

## HI.2 REASON & IMPACT

- 업무 규칙인 Domain과 실행 전략인 `modes`, 공통 계약인 `shared`, 효율 근거인 `refactor`를 분리해 요청마다 필요한 문서만 읽도록 했다.
- `career`, `deliverables`, `develop`, `history`, `task`는 각각 `controlplane/domain/...`으로 이동했다.
- Domain Base Key 두 글자는 유지하고 Namespace를 붙여 `D-CA`, `D-DE`, `D-TA`처럼 경계를 드러냈다.
- `HELP.MD`에 요청 Template, Agent/Document/Rigor 선택, Context Checkpoint, refactor 요청법을 정리했다.
- `refactor` 측정은 Runtime Token이 없을 때 값을 만들지 않고 bytes·문자·줄·파일 수를 `proxy`로 구분한다.
- Project Source의 내용은 수정하지 않았으며 기존 `domain/task/source` 자료는 이동된 경로에서 그대로 보존했다.

## HI.3 DEVELOPMENT METHOD CHECK

회사 Project의 작업 절차·Orchestration·역할 카드·실제 계획 및 검토 기록을 읽기 전용으로 다시 대조했다.

- 책임 순서: 범위 결정 → 실행 가능한 계획 → 읽기 전용 계획 반증 → 조정자 결정 → 구현·테스트 → 조정자 독립 재현
- 계획과 구현의 파일 소유권 분리, 기준선 확인, 판정 가능한 완료 조건, 막히면 임의 결정 금지
- 구현 보고보다 실제 Diff·Gate·완료 조건을 먼저 확인하고 재작업은 최대 한 번만 허용
- 문서 전용 변경은 불필요한 Implementer 인계를 생략

이를 `controlplane/domain/develop/contracts/EXECUTION.MD`와 역할 카드에 모델 독립적인 책임으로 반영했다. 개인 작업은 기본 `lean`, 회사 작업은 기본 `standard`, 고위험 작업만 `strict`로 올리는 조정은 유지했다.

## HI.4 VALIDATION

- 최종 예상 집합: 관리 Markdown 30개, Task Source 포함 전체 Markdown 32개
- Registry Key 26개와 실제 사용 Unique Key 26개 일치
- 모든 관리 Markdown의 UTF-8, `.MD`, 최상위 Heading, Section Key, Domain Namespace 검사 통과
- 이전 최상위 Domain 경로, 이전 Key Reference, 특정 모델 의존 Reference 0건
- `direct`, `graph`, `loop`, `hybrid`의 Budget·중단 조건과 Develop `strict` 역할 순서 확인
- `refactor` Baseline 5개 Scenario의 현재 파일 합산값 재검산
