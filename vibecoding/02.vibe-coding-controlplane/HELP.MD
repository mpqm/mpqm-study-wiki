# HP. CONTROLPLANE HELP
내 작업 방식을 잊었을 때 보는 짧은 사용 설명서다. 자세한 규칙을 모두 읽기 전에 여기서 요청의 Domain과 실행 방법만 고른다.

## HP.1 MENTAL MODEL

```text
요청
 ├─ Owner: Domain 또는 Meta 영역
 ├─ agent_mode: 몇 Agent로 할지
 ├─ document_mode: 어떤 Markdown까지 바꿀지
 └─ rigor: 개발 절차를 얼마나 엄격하게 할지
```

- `project`: 회사·개인 프로젝트 원본
- `domain`: `career`, `deliverables`, `develop`, `task`의 지속 업무 규칙과 진행 상태
- `history`: 제어 변경, 완료 Task, refactor 측정을 날짜별로 보관하는 Meta 영역
- `modes`: Markdown 수정 범위를 제한하는 전략
- `shared`: 둘 이상의 영역이 재사용하는 계약·형식·자산
- `controlplane`: 위 요소를 Routing하는 시작점이며 Project Source를 복제하지 않는다.

## HP.2 REQUEST TEMPLATE

필수 정보만 자연어로 말하고 나머지는 기본값에 맡긴다.

```text
[회사|개인] {프로젝트}에서 {목표}를 해줘.
agent_mode={auto|single|multi}
document_mode={direct|graph|loop|hybrid}
rigor={lean|standard|strict}
seed={시작 파일}, budget={파일/깊이/반복 상한}, checks={완료 검사}
```

- 일반 기본값: `agent_mode=auto`, `document_mode=direct`
- 개인 개발 기본값: `rigor=lean`
- 회사 개발 기본값: `rigor=standard`
- 값이 없으면 위험과 독립 작업 수로 필요한 수준까지만 올린다.

예: `개인 zippop 화면설계서를 현재 구현 기준으로 만들어줘. agent_mode=single, document_mode=direct.`

## HP.3 AGENT MODE

| Mode | 선택 기준 |
|---|---|
| `single` | 범위가 작거나 순차 의존성이 높고 같은 파일을 집중 수정할 때 |
| `multi` | 서로 독립적인 하위 작업이 둘 이상이고 파일 소유권을 분리할 수 있을 때 |
| `auto` | 기본값. 병렬 이득이 명확하지 않으면 `single` |

Multi-Agent는 여러 답의 다수결이 아니다. Coordinator가 목표·Source·Output·파일 소유권을 나누고 결과를 통합한다.

## HP.4 DOCUMENT MODE

| Mode | 동작 | 기본 상한 |
|---|---|---|
| `direct` | 지정 문서만 한 번 수정 | `max_files=3` |
| `graph` | 실제 Reference Edge로 연결된 영향 문서만 수정 | `max_depth=1`, `max_files=12` |
| `loop` | 처음 고정한 문서 묶음에서 실패한 검사만 반복 개선 | `max_rounds=2`, `max_files=8` |
| `hybrid` | Graph로 범위를 한 번 정한 뒤 그 안에서 Loop | Graph 12개, Loop 2회 |

Graph와 Loop는 “전부 변경” 명령이 아니다. Seed·Budget·중단 조건 밖으로 자동 확장하지 않는다. 평소에는 `direct`, Contract나 경로 전파에는 `graph`, 고정 범위 정합성 개선에는 `loop`, 둘 다 필요할 때만 `hybrid`를 쓴다.

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
- 재시작·인계가 필요하거나 `multi`·`strict`인 개발만 `controlplane/domain/develop/work/...`에 `TASK.MD`를 만든다.
- `TASK.MD`에는 목표, 범위, Source, 선택한 Mode/Rigor, 상태, 결정, 다음 행동만 둔다.
- `PLAN.MD`, `REVIEW.MD`, `RESULT.MD`는 필요한 단계에만 만들고 대화·터미널 전체 로그는 저장하지 않는다.
- Context가 교체되면 Project Source와 이 Checkpoint를 읽고 마지막 완료 단계 다음부터 재개한다.
- 완료 후에도 보존할 Task는 `controlplane/history/{YYYY}/{MM-DD}/{HHmm}_{TA-ID}.MD` 단일 파일로 이동한다.

## HP.7 DOCUMENT KEY

- 제어·Mode·Shared 문서: 두 글자 키 `CP`, `AG`, `MO`, `DK` 등
- Domain 문서: 두 글자 Base Key에 Namespace를 붙인 `D-CA`, `D-DE`, `D-TA` 등
- 상세 계약과 Registry: `controlplane/shared/contracts/DOCUMENT-KEY.MD`

## HP.8 REFACTOR REQUEST

토큰이나 작업 효율의 수치·비교·개선 근거가 필요할 때만 다음처럼 명시적으로 요청한다.

```text
controlplane 토큰 소모가 얼마나 줄었어?
controlplane의 {반복 작업}을 refactor 관점에서 분석해줘.
현재 Baseline을 측정하고, 개선안은 최대 3개만 제안해줘.
같은 완료 검사를 유지한 채 채택한 안을 적용하고 전후를 비교해줘.
```

명시적 요청이 없으면 일반 변경에서 refactor 측정이나 비교 기록을 자동 생성하지 않는다. 실제 Runtime Token이 보이지 않으면 Token 수를 만들어내지 않고 `proxy` 측정으로 표시한다. 확정한 비교 기록만 `controlplane/history/{YYYY}/{MM-DD}`에 남기며 전체 대화 로그는 저장하지 않는다.

## HP.9 FINISH CHECK

완료 전에는 요청 범위, 변경 파일, Source, 사용자 기존 변경 보존, 직접 의존성, 실행한 검증, 미검증 위험을 확인한다. Control 변경은 모든 검증 뒤 History를 작성하고, 개발 작업은 계획–반증–결정–구현–독립 검증 절차가 선택한 `rigor`에 맞게 수행됐는지 마지막에 확인한다.
