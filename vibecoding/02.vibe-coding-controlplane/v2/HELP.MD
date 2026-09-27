# HP. CONTROLPLANE HELP
내 작업 방식을 잊었을 때 보는 짧은 사용 설명서다. 자세한 규칙을 모두 읽기 전에 여기서 요청의 Domain과 실행 방법만 고른다.

## HP.1 MENTAL MODEL

```text
요청
 ├─ Owner: Domain 또는 controlplane 제어 영역
 ├─ agent_mode: 몇 Agent로 할지
 ├─ scope: 요청·영향·검수 기준으로 자동 결정할 Markdown 범위
 └─ rigor: 개발 절차를 얼마나 엄격하게 할지
```

- `project`: 회사·개인 프로젝트 원본
- `domain`: `career`, `deliverables`, `develop`, `task`의 지속 업무 규칙과 진행 상태
- History: 별도 Meta 영역 없이 사용자가 필요할 때 `controlplane/{YYYY-MM-DD}`에 직접 분류
- `contracts`: 둘 이상의 영역이 재사용하는 계약·형식·자산
- `controlplane`: 위 요소를 Routing하는 시작점이며 Project Source를 복제하지 않는다.

## HP.2 REQUEST TEMPLATE

필수 정보만 자연어로 말하고 나머지는 기본값에 맡긴다.

```text
[회사|개인] {프로젝트}에서 {목표}를 해줘.
agent_mode={auto|single|multi}
rigor={lean|standard|strict}
seed={시작 파일}, budget={파일/깊이/반복 상한}, checks={완료 검사}
```

- 일반 기본값: `agent_mode=auto`; 문서 범위는 요청에 따라 자동 결정
- 개인 개발 기본값: `rigor=lean`
- 회사 개발 기본값: `rigor=standard`
- 값이 없으면 위험과 독립 작업 수로 필요한 수준까지만 올린다.

예: `개인 zippop 화면설계서를 현재 구현 기준으로 만들어줘. agent_mode=single.`

## HP.3 AGENT MODE

| Mode | 선택 기준 |
|---|---|
| `single` | 범위가 작거나 순차 의존성이 높고 같은 파일을 집중 수정할 때 |
| `multi` | 서로 독립적인 하위 작업이 둘 이상이고 파일 소유권을 분리할 수 있을 때 |
| `auto` | 기본값. 병렬 이득이 명확하지 않으면 `single` |

Multi-Agent는 여러 답의 다수결이 아니다. Coordinator가 목표·Source·Output·파일 소유권을 나누고 결과를 통합한다.

## HP.4 AUTOMATIC DOCUMENT SCOPE

문서 범위는 별도 Mode를 선택하지 않고 Agent가 요청과 영향도를 분석해 자동 결정한다.

| 판단 신호 | 자동 범위 |
|---|---|
| 명시된 단일 파일 또는 목록 | 해당 파일·목록과 필요한 검수만 |
| Contract·키·경로 변경 | 직접 의존 문서까지 bounded dependency scope |
| Source와 원본 산출물 불일치 | Source 분석 범위와 원본 비교·통합 범위 |
| 반복 검증 필요 | 동일 범위 안의 제한된 재검사 |

Agent는 작업 시작 시 `seed`, `max_files`, `max_depth`, `checks`를 결정하고 보고한다. 요청·근거·Budget 밖으로 확장하지 않는다.

## HP.5 DEVELOPMENT METHOD

개발 역할은 특정 모델 이름이 아니라 책임으로 분리한다.

```text
SCOPE DECISION → PLAN → READ-ONLY REVIEW → DECISION GATE
               → PLAN UPDATE → IMPLEMENT → INDEPENDENT VERIFY → HANDOFF
```

- `Planner`: Source와 기준선을 조사해 실행 가능한 계획 작성
- `Reviewer`: 계획이나 구현을 수정하지 않고 누락·오류·위험 반증
- `Coordinator`: 사용자 결정을 반영하고 범위·소유권·완료 조건 확정
- `Implementer`: 확정된 계획만 구현하고 관련 테스트 수행
- 마지막 검증은 구현 보고를 믿는 것이 아니라 변경 범위와 완료 조건을 다시 재현한다.
- 문서만 바뀌는 작업은 별도 Implementer 인계를 생략해 불필요한 Context 왕복을 만들지 않는다.

개인 작업은 보통 이 역할을 한 Agent가 단계별 Checkpoint로 수행한다. 회사의 고위험 작업에서 `multi+strict`를 선택했을 때만 Reviewer와 Implementer Context를 분리하며, 같은 Agent의 재검토를 독립 검증이라고 부르지 않는다.

## HP.6 CONTEXT & CHECKPOINT

- 단순 작업은 별도 기록 없이 Source 확인 → 변경 → 검증 → 요약으로 끝낸다.
- 재시작·인계가 필요하거나 `multi`·`strict`인 개발만 `controlplane/develop/work/...`에 `TASK.MD`를 만든다.
- `TASK.MD`에는 목표, 범위, Source, 자동 결정한 scope와 Rigor, 상태, 결정, 다음 행동만 둔다.
- `PLAN.MD`, `REVIEW.MD`, `RESULT.MD`는 필요한 단계에만 만들고 대화·터미널 전체 로그는 저장하지 않는다.
- Context가 교체되면 Project Source와 이 Checkpoint를 읽고 마지막 완료 단계 다음부터 재개한다.
- Agent는 완료 기록을 자동 이동하지 않는다. 사용자가 필요할 때 `controlplane/{YYYY-MM-DD}/{HHmm}_{KEY}.MD` 형식으로 직접 분류한다.

## HP.7 DOCUMENT KEY

- 제어·계약 문서: 두 글자 키 `CP`, `AG`, `DK` 등
- Domain 문서: 두 글자 Base Key에 Namespace를 붙인 `D-CA`, `D-DE`, `D-TA` 등
- 상세 계약과 Registry: `controlplane/contracts/DOCUMENT-KEY.MD`

## HP.8 FINISH CHECK

완료 전에는 요청 범위, 변경 파일, Source, 사용자 기존 변경 보존, 직접 의존성, 실행한 검증, 미검증 위험을 확인한다. Agent는 History를 자동 작성하지 않고, 개발 작업은 계획–반증–결정–구현–독립 검증 절차가 선택한 `rigor`에 맞게 수행됐는지 마지막에 확인한다.

## HP.9 ROUTING GRAPH

```mermaid
flowchart TD
  A[사용자 요청] --> B[Workspace AGENTS.MD]
  B --> C[controlplane/AGENTS.MD]
  C --> D[대상 경로 AGENTS.MD]
  D --> E{Owner 자동 Routing}
  E --> F[Owner 선택]
  F --> G[career]
  F --> H[deliverables]
  F --> I[develop]
  F --> J[task]
  F --> K[contracts]
  I --> L[company 또는 personal 규칙]
  L --> M[Project AGENTS.MD]
  D -. 필요 시 .-> N[관련 계약]
  D -. Source 영향 .-> O[필요한 Project 범위]
  D --> P[scope·budget·checks 자동 결정]
  P --> Q[분석·변경·검수·완료]
  Q -. 사용자가 필요 시 .-> R[controlplane/{YYYY-MM-DD}/{HHmm}_{KEY}.MD]
```

- 기본 Load 순서는 Workspace → 통합된 controlplane/AGENTS.MD → 대상 경로다.
- 별도 문서 Mode를 입력하거나 선택하지 않는다.
- Agent가 최소 필요 범위와 상한을 결정하고, 계약·Source·검수 근거가 있을 때만 범위를 확장한다.
- 로그는 사용자가 필요할 때 `controlplane/{YYYY-MM-DD}`에 문서 키 규칙을 지켜 직접 분류한다.