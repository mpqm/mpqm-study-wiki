# HI. TASK IO AND SHARED CONTRACTS
Task 입출력 경로와 누락 경로·외부 MCP 연동 행동을 명시한 제어 변경 기록이다.

## HI.1 CHANGE

- `date`: `2026-08-23`
- `time`: `1816`
- `id`: `HI-007_task-io-shared-contracts`
- `target`: Task 구조, History Archive 경계, Shared Contract, 문서 키, 공통 Agent Load
- `summary`: Task의 작업 자료와 산출물 폴더를 `input`·`output`으로 확정하고, 누락 경로 대응과 외부 MCP 승인·자동 설정·제약 가이드 계약을 추가했다.

## HI.2 REASON & IMPACT

- `controlplane/domain/task/{TA-ID}`는 `TASK.MD`, 필요 시 `input`, `output`만 사용하며 이전 `source`, `result` 폴더 명칭은 사용하지 않는다.
- `TASK.MD`의 추적 필드도 `input`·`output`으로 맞추고 Archive 전에 재사용 자료의 Owner와 보존 경로를 확정하도록 했다.
- `controlplane/shared/contracts/PATH-RESOLUTION.MD`를 추가해 명시된 경로가 없으면 사용자의 임의 변경으로 판단하고 유사 경로를 자동 대체하지 않으며 변경된 현재 경로를 요청하도록 했다.
- `controlplane/shared/contracts/MCP-INTEGRATION.MD`를 추가해 PC 전체 접근과 외부 앱·계정 권한을 분리했다. 새 MCP는 사용자 승인 후 최소 권한으로 설치·설정·검증을 자동 수행하고, 제약으로 막히면 `MCP-SETUP-GUIDE.MD`를 제공한다.
- `controlplane/AGENTS.MD`를 두 계약의 직접 Consumer로 연결하고 `MC`, `PR` 문서 키를 Registry에 추가했다.

## HI.3 MIGRATION

- 변경 시점에 `controlplane/domain/task`에 활성 `{TA-ID}` 디렉터리가 없어 자료 이동과 이름 변경은 발생하지 않았다.
- 향후 Task는 첫 산출물이 생길 때 `input`·`output` 구조를 사용한다.
- Workspace 루트의 `source`와 Project Source는 수정·이동하지 않았다.

## HI.4 VALIDATION

- History를 제외한 관리 Markdown 27개의 UTF-8, 최상위 Heading, Section Key 검사 통과
- Task 현행 계약의 `source`·`result` 폴더 Reference 0건, `input`·`output` 구조와 Field Reference 확인
- `CONTROLPLANE.MD` 구조, `AGENTS.MD` Consumer Link, `DOCUMENT-KEY.MD`의 `MC`·`PR` Registry 정합성 확인
- 경로 누락 시 임의 대체 중단·사용자 현재 경로 요청 조항 확인
- MCP 승인 전 변경 금지, 승인 후 자동 설치·설정, 최소 권한, 연결 검증, 제약 가이드 조항 확인
