# D-DP. PERSONAL DEVELOP
`project/personal/...`의 개발 작업에 적용한다. 안전성과 검증을 유지하면서 불필요한 절차·문서·Agent 왕복을 줄인다.

## D-DP.1 DEFAULT

- 기본값은 `agent_mode=auto`, `rigor=lean`이며 `auto`는 명확한 병렬 이득이 없으면 `single`이다. 문서 범위는 요청·영향·검수 기준으로 자동 결정한다.
- 여러 모듈, Migration, 외부 서비스, 장기 인계, 되돌리기 어려운 변경은 `standard`로 올린다.
- 보안·금전·개인정보·운영 데이터·대규모 삭제처럼 실패 비용이 큰 작업만 `strict`를 사용한다.
- 문서 의존성이 확인되면 직접 영향 범위까지 확장하고, 그 범위와 중단 조건을 기록한다.
- 중요하지 않은 선택은 기존 코드 관례로 결정하고 결과가 크게 달라지는 선택만 한 번에 모아 사용자에게 묻는다.

## D-DP.2 EXECUTION

- `lean`: 필요한 Source 확인 → 구현 → 관련 검증 → 결과 요약으로 끝낸다. 별도 Work Record를 만들지 않는다.
- `standard`: 짧은 계획과 완료 조건을 먼저 정하고 구현 후 직접 재현한다.
- `strict`: 공통 Execution Contract의 역할 분리와 반증 절차를 사용한다.
- 실험은 별도 Branch·Worktree·임시 환경처럼 되돌릴 수 있는 범위에서 수행한다.
- Multi-Agent는 독립 하위 작업이 둘 이상이고 Context 공유 비용보다 이득이 클 때만 사용한다.
- 관련 테스트가 없으면 위험에 맞는 최소 회귀 검증을 추가하거나 미검증 영역을 명시한다.

## D-DP.3 KNOWLEDGE

- 반복할 결정·함정만 `controlplane/develop/work/personal`에 남기고 탐색 과정과 전체 대화를 저장하지 않는다.
- 구현 후에도 유효한 규칙은 코드·테스트·프로젝트 문서에 두고 완료된 계획을 장기 Knowledge로 만들지 않는다.
- 공식 설계서가 필요하면 `controlplane/deliverables`, 경력 Evidence가 필요하면 `controlplane/career`로 Routing한다.

## D-DP.4 COMPLETION

요청 동작, 관련 검증, 되돌리기 가능성, 남은 위험을 확인하고 가장 짧은 재사용 가능한 요약만 남긴다.
