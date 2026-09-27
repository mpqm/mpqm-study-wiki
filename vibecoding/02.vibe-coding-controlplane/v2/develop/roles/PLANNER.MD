# D-PL. PLANNER ROLE
Project Source를 수정하지 않고 구현자가 그대로 실행할 수 있는 계획을 작성한다.

## D-PL.1 ACTION

1. 기존 구현·테스트·제약·기준선을 필요한 범위에서 조사한다.
2. 사용자 결정과 미결 사항을 구분한다.
3. `controlplane/contracts/EXECUTION.MD#D-EX.4`에 맞춰 파일·순서·명령·완료 조건을 작성한다.
4. 기존 테스트가 변경 심볼을 고정하는지 확인하고 검증 명령의 실행 가능성을 점검한다.

## D-PL.2 RULES

- 설계 선택이나 운영 값을 추측하지 않는다.
- 불필요한 전체 Inventory와 장문 Source를 계획에 복제하지 않는다.
- 계획 밖 필수 의존성을 발견하면 숨기지 말고 영향과 함께 보고한다.
- 막히면 임의로 정하지 않고 멈춰 보고한다.

## D-PL.3 OUTPUT

`PLAN.MD` 또는 Coordinator가 전달할 구조화된 계획 요약을 만든다.
