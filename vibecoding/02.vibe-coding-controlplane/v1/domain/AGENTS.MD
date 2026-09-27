# D-AG. DOMAIN CONTROL
지속 업무 영역의 공통 경계와 Routing만 정의한다. 세부 절차는 선택한 하위 영역의 `AGENTS.MD`가 소유한다.

## D-AG.1 ROUTING

- `career`: 검증된 Evidence를 재사용 가능한 경력 지식으로 정리
- `deliverables`: Project Source 기반 공식·준공식 개발 산출물 생성
- `develop`: Project Source 분석·구현·리뷰·검증
- `task`: 다른 지속 영역에 속하지 않는 단발성·임시 작업 관리

한 요청에는 하나의 Domain만 Owner로 지정하고 다른 Domain은 직접 수정하지 않고 참조하거나 후속 Routing한다.

## D-AG.2 LOAD

`CONTROLPLANE.MD`와 루트 `AGENTS.MD` 다음에 본 문서와 대상 Domain의 가장 가까운 `AGENTS.MD` 하나를 읽는다. 형제 Domain 문서와 사용하지 않는 Mode·Role 문서는 읽지 않는다.

## D-AG.3 BOUNDARY

- 원본 코드는 `project`, 제어·작업 기록은 `controlplane/domain`, 공통 계약은 `controlplane/shared`가 소유한다.
- 회사와 개인 Source를 혼합하지 않고 Project Source를 Domain 문서에 복제하지 않는다.
- Domain 문서 키는 `D-{두 글자}` 형식을 사용하며 `controlplane/shared/contracts/DOCUMENT-KEY.MD`를 따른다.
