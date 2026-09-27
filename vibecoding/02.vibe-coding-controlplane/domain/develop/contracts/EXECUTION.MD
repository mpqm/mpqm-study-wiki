# D-EX. DEVELOP EXECUTION CONTRACT
개발 작업의 Agent 구성과 검증 강도를 모델 이름과 분리해 정의한다.

## D-EX.1 DIMENSIONS

- `agent_mode`: `single`, `multi`, `auto`; 루트 `AGENTS.MD`를 따른다.
- `document_mode`: `direct`, `graph`, `loop`, `hybrid`; `modes/AGENTS.MD`를 따른다.
- `rigor`: `lean`, `standard`, `strict`; 회사·개인 규칙과 위험으로 정한다.
- 세 값은 독립적이다. 예를 들어 `single+strict+graph`, `multi+standard+direct`가 가능하다.

## D-EX.2 WORKFLOWS

- `lean`: `SOURCE → CHANGE → TEST → SUMMARY`
- `standard`: `SCOPE DECISION → PLAN → IMPLEMENT → VERIFY → SUMMARY`
- `strict`: `SCOPE DECISION → PLAN → READ-ONLY REVIEW → DECISION GATE → PLAN UPDATE → IMPLEMENT → INDEPENDENT VERIFY → HANDOFF`

애매하면 회사 작업은 높은 rigor, 개인 작업은 낮은 rigor에서 시작하되 위험이 확인되면 즉시 올린다.

## D-EX.3 ROLES

- `Coordinator`: Routing, 사용자 결정, 범위·소유권, 계획 승인 Gate, 최종 독립 검증
- `Planner`: Source 조사와 실행 가능한 계획 작성; Project Source 수정 금지
- `Reviewer`: 계획·코드·완료 조건 반증; 수정 금지
- `Implementer`: 승인된 계획의 구현과 테스트; 범위 밖 수정 금지

역할은 특정 모델에 고정하지 않는다. `multi+strict`에서는 Read-only Review와 구현을 서로 다른 Context/Checkpoint로 분리하고 Coordinator가 Review 반영 여부를 결정한 뒤 구현을 승인한다. 같은 실행 주체를 재사용하더라도 Review Context를 구현으로 이어 쓰지 않는다. `single`에서는 한 Agent가 역할별 Checkpoint를 구분하되 이를 독립 검증이라고 부르지 않는다.

소스·테스트·Migration 변경이 없는 문서 전용 작업은 형식적인 Implementer 인계를 만들지 않고 같은 문서 Owner가 계획과 수정을 맡는다. 선택한 `document_mode`의 품질 Gate는 그대로 적용한다.

## D-EX.4 PLAN CONTRACT

비단순 계획은 다음만 포함한다.

- 목표·제외 범위·사용자 결정
- Source·기준선·기존 실패
- 변경 파일 또는 파일 소유권
- 순서가 있는 작업과 검증 명령
- 판정 가능한 완료 조건
- 중단·보고 조건과 미검증 위험

검증 명령은 가능하면 계획 작성 중 실행 가능성을 확인한다. 변하는 총개수보다 실패 0, 집합 일치, 금지 항목 0 같은 불변식을 사용한다.

## D-EX.5 REVIEW & REWORK

- Reviewer는 `Critical`, `High`, `Medium`, `Low`와 근거·재현 조건을 보고한다.
- `Critical/High`는 구현 전 해소한다. `Medium/Low`는 반영하거나 제외 이유를 남긴다.
- 구현 후 독립 검증에서 결함이 나오면 확정된 수정사항을 Implementer에게 최대 한 번 되돌린다. 두 번째 검증에서도 결함이 남으면 추가 반복 대신 사용자에게 보고한다.
- 막히거나 계획 밖 선택이 필요하면 임의로 정하지 않고 멈춰 보고한다.

## D-EX.6 SAFETY & COMPLETION

- 운영·외부 시스템 작업은 가장 가까운 승인 규칙을 따르며 부하·변경 상한을 모르면 실행하지 않는다.
- 완료는 보고가 아니라 재현 가능한 검증 결과로 판정한다.
- 독립 검증자는 Implementer의 완료 주장에 의존하지 않고 확정된 계획, 실제 Diff, 완료 조건을 다시 대조한다.
- 결과에는 변경·이유·검증·미검증·남은 위험만 남기고 전체 로그를 전달하지 않는다.
