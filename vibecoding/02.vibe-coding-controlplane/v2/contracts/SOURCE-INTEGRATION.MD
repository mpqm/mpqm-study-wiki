# SI. SOURCE INTEGRATION CONTRACT

## SH.1 SCOPE

모든 Domain Contract와 그 계약으로 생성·변경·검수하는 산출물에 적용한다. 원본 산출물의 검수 결과가 Project Source의 구현 사실과 다르거나, 원본에 필요한 정보가 누락된 경우의 조사·비교·통합 절차를 정의한다.

## SH.2 AUTHORITY

사실 판단의 우선순위는 다음과 같다.

1. project/...의 실제 구현 Source
2. 사용자가 명시한 결정과 수정
3. 검증된 기존 산출물
4. 추론·제안

기존 산출물은 검수 대상이자 참고 자료이며, 구현 사실의 최상위 근거로 사용하지 않는다.

## SH.3 RECONCILIATION

- 검수 불일치·누락·모순이 발견되면 관련 Controller, Route, DTO, Entity, Migration, 설정, 테스트 등 Project Source를 필요한 범위에서 분석한다.
- Source 분석 결과와 원본 산출물을 항목별로 비교해 AS-IS, PROPOSED, UNRESOLVED를 구분한다.
- 최종 산출물은 원본의 유효한 내용과 Source에서 확인한 사실을 통합해 작성한다.
- 원본과 Source가 충돌하면 Source 근거와 차이를 표시하고, 사용자의 명시적 결정이 있으면 그 결정을 우선한다.
- Source로 확인되지 않는 정보는 사실처럼 채우지 않고 확인 필요 또는 UNRESOLVED로 남긴다.
- 외부 Artifact와 사용자가 작성한 원본은 임의로 덮어쓰지 않고, 별도 통합본 또는 변경 제안으로 제공한다.

## SH.4 VALIDATION

SOURCE INVENTORY → ARTIFACT REVIEW → DISCREPANCY ANALYSIS → SOURCE CODE ANALYSIS → RECONCILIATION → TRACEABILITY CHECK → FINAL REVIEW 순서로 검수한다.

검수 결과에는 최소한 다음을 남긴다.

- 원본 산출물의 항목과 상태
- 확인한 Project Source 경로
- 누락·충돌·변경 항목
- 통합 결과와 미해결 항목
- Source와 산출물 간 추적 가능성

## SH.5 NON-GOALS

- Source에 없는 구현을 추정해 사실로 추가하지 않는다.
- 검수 과정에서 원본 Artifact를 승인 없이 수정하지 않는다.
- 단순 형식 변환을 Source 변경으로 간주하지 않는다.
