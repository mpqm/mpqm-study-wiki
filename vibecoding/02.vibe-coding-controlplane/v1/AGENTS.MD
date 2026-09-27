# AG. AGENT CONTROL
`controlplane` 영역의 공통 행동 규칙이다. 구조와 책임은 `CONTROLPLANE.MD`를 따른다.

## AG.1 LOAD & PRIORITY

- 시작 시 `CONTROLPLANE.MD`, 본 문서, 대상 경로상의 `AGENTS.MD`를 위에서 아래로 읽는다. 형제 영역은 읽지 않는다.
- 추가 Contract/Schema/Source는 현재 작업에 필요한 것만 단계적으로 읽고 기존 요약·산출물을 우선 재사용한다.
- 명시된 파일·폴더 경로를 찾을 수 없으면 `controlplane/shared/contracts/PATH-RESOLUTION.MD`를 적용한다.
- PC 접근 범위와 무관하게 외부 앱·계정·서비스의 MCP 연동이 필요하면 `controlplane/shared/contracts/MCP-INTEGRATION.MD`를 적용한다.
- 하위 `AGENTS.MD`는 상위 규칙을 반복하지 않고 해당 영역의 추가·변경만 정의한다.
- 충돌 시 `사용자 요청 → 가장 가까운 AGENTS.MD → 본 문서 → shared Contract → 기본 규칙` 순으로 적용한다.

## AG.2 ROUTING & SCOPE

- `CONTROLPLANE.MD`의 Ownership에 따라 Owner를 정한다. 여러 영역에 걸치면 하나만 Owner로 두고 나머지는 참조한다.
- 요청 범위 밖의 파일이나 다른 영역의 내부 상태를 임의로 변경하지 않는다.
- Project Source와 분석·제어 산출물을 분리한다.
- 반복 작업은 해당 지속 영역이나 `shared`로 승격하고, 단발성 작업은 `controlplane/domain/task`에서 관리한다.

## AG.3 EVIDENCE & CONTEXT

- 사실은 가능한 한 Project Source 또는 검증된 Knowledge에 근거하고, 추론·불확실성은 표시한다.
- 장문 원본 대신 필요한 사실·요약·WORKSPACE 상대경로를 기록한다.
- 검증된 Knowledge가 있으면 먼저 사용하고 부족한 부분만 원본에서 확인한다.
- 대량 분석은 `Inventory → Analysis → Summary`로 진행하며 재사용할 결과만 파일에 남긴다.
- 대화·터미널 로그를 장기 저장소나 다른 Worker의 Context로 사용하지 않는다.

## AG.4 DOCUMENT

- Markdown은 간결하게 작성하고 반복 설명·중복 Context·불필요한 빈 줄을 제거한다.
- 정보마다 하나의 Source of Truth를 두고 파생 문서는 복제 대신 참조한다.
- 문서당 최상위 `#` 하나와 `# → ## → ###` 순서를 사용한다.
- Section ID는 `{DOC}.{SECTION}`, 코드·경로·명령·ID·KEY는 Backtick으로 구분한다.
- 항상 읽는 문서에는 공통 불변 규칙만 두고, 상세 절차·필드·예시는 필요한 하위 문서나 Schema에 둔다.
- Dependency Metadata는 실제 갱신 의존성이 있는 문서에만 사용한다.

## AG.5 CHANGE & WRITE

- 일반 변경은 `SOURCE → IMPACT → UPDATE → VALIDATE` 순서로 처리하고 직접 의존 문서만 확인한다.
- `LOCAL`, `DEPENDENT`, `GLOBAL` 중 영향 범위를 판정하되 변경되지 않은 문서는 재생성하지 않는다.
- 사용자 요청 없이 대규모 구조를 바꾸거나 사용자 작성 내용을 제거·덮어쓰기·되돌리지 않는다.
- 새 파일은 목적과 Owner가 명확할 때만 만들고 임시·최종 산출물을 구분한다.
- CONTROLPLANE 제어 변경은 `CONTROLPLANE.MD`의 Change 규칙을 따른다.
- 사용자가 Token 사용량·Context 크기·작업 효율의 측정이나 비교를 명시적으로 요청한 경우에만 `controlplane/refactor/AGENTS.MD`로 Routing한다. 일반 변경에서는 측정과 `RR-*` 기록을 만들지 않는다.

## AG.6 EXECUTION MODES

- Agent 구성 `agent_mode`는 `single`, `multi`, `auto` 중 하나이며 사용자 지정이 우선한다. 지속 Task만 `TASK.MD`에 기록한다.
- `single`: 한 Agent가 처리한다. 범위가 작거나 순차 의존성이 높거나 같은 파일을 집중 수정할 때 사용한다.
- `multi`: 실행 환경과 사용자 요청이 허용하고, 독립적인 하위 작업이 둘 이상이며 조정 비용보다 병렬 이득이 클 때 사용한다.
- `auto`: 기본값이다. 위 조건이 명확하지 않으면 `single`을 선택한다.
- 여러 Markdown의 탐색·수정 전략 `document_mode`는 `direct`, `graph`, `loop`, `hybrid` 중 하나이며 기본값은 `direct`이다.
- `document_mode`가 필요할 때만 `controlplane/modes/AGENTS.MD`와 선택한 Mode 문서 하나를 읽는다.
- Multi-Agent의 Coordinator는 시작 전에 Worker별 목표·Source·Output·파일 소유권을 정하고 상태와 결과만 취합한다.
- Worker는 할당 범위만 처리한다. 공통 Inventory를 재사용하고 같은 Source의 중복 분석과 같은 파일의 동시 수정을 피한다.
- Worker 간에는 전체 로그 대신 결정·근거·변경·미해결 사항을 요약해 전달하며 충돌은 Source로 판정한다.

## AG.7 HISTORY & SAFETY

- 구조·경로·영역 역할·Agent 규칙·Contract·Schema·Prompt·주요 Orchestration 변경만 `controlplane/history/{YYYY}/{MM-DD}`에 기록한다.
- 표현 수정, 일반 Knowledge 갱신, 탐색·명령·Worker 실행은 기록하지 않는다.
- 삭제·덮어쓰기·대규모 이동 전 범위를 확인하고 비밀키·Password·Token을 문서에 복제하지 않는다.
- 회사·개인 자료와 사실·추론을 각각 구분한다.

## AG.8 COMPLETION

요청 범위, 변경 파일, Source, 직접 의존성, 구조 일치, History 필요 여부, 사용자 내용 보존, 검증 결과를 확인하고 다음 작업자가 재분석 없이 이어받을 수 있게 마무리한다.
