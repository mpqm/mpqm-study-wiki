# CP. CONTROLPLANE
`controlplane`은 모든 작업의 시작점이자 제어면이다. 요청을 Owner로 Routing하고 Agent 구성·문서 전략·개발 엄격도를 독립적으로 선택해 `C:\workspace`의 작업 효율을 높인다. 본 문서는 구조와 책임의 Source of Truth이다.

## CP.1 STRUCTURE

```text
WORKSPACE
├── controlplane
│   ├── {AGENTS|CONTROLPLANE|HELP}.MD
│   ├── domain
│   │   ├── AGENTS.MD
│   │   ├── {career|deliverables|task}/AGENTS.MD
│   │   └── develop/{AGENTS.MD|company|personal|contracts|roles|work}
│   ├── history/{AGENTS.MD|{YYYY}/{MM-DD}/{HHmm}_{HI|RR|TA}-{SEQ}_{KEY}.MD}
│   ├── modes/{AGENTS.MD|document/{DIRECT|GRAPH|LOOP|HYBRID}.MD}
│   ├── refactor/{AGENTS|METRICS}.MD
│   └── shared/{AGENTS.MD|contracts/{DOCUMENT-KEY|MCP-INTEGRATION|PATH-RESOLUTION}.MD}
└── project/{company|personal}
```

## CP.2 CONTRACT

- 실제 구조와 `CP.1 STRUCTURE`를 일치시키고 구조 변경 시 본 문서를 갱신한다.
- 경로는 `C:\workspace` 기준 상대경로로 기록한다.
- 기본 Load는 `controlplane/CONTROLPLANE.MD` → `controlplane/AGENTS.MD` → 대상 경로상의 `AGENTS.MD` 순서이며 형제 영역은 읽지 않는다.
- 지속 작업 ID는 `{TYPE}-{SEQ}_{KEY}` 형식을 사용한다. TYPE은 `C=Career`, `V=Deliverables`, `D=Develop`, `TA=Task`, `S=Shared`이다.
- 공통 자산은 `controlplane/shared`, 완료된 Meta 기록은 `controlplane/history`에서 관리한다.
- Markdown 문서 키와 Section 형식은 `controlplane/shared/contracts/DOCUMENT-KEY.MD`를 따른다.

## CP.3 OWNERSHIP

- `controlplane/domain`: 지속 업무의 공통 경계와 Routing
- `controlplane/domain/{career|deliverables|develop|task}`: 경력 지식, 개발 산출물, 코드 작업, 진행 Task
- `controlplane/history`: 제어 변경, 완료 Task, refactor 측정의 날짜별 Meta 기록
- `controlplane/modes`: 범위 제한형 Markdown 탐색·수정 전략
- `controlplane/refactor`: 사용자 요청 시에만 사용하는 Markdown 토큰·작업 효율 측정 규칙
- `controlplane/shared`: 여러 영역이 함께 쓰는 규칙과 리소스
- `project/{company|personal}`: 회사·개인 프로젝트 원본

세부 규칙은 각 영역의 `AGENTS.MD`가 소유하며 상위 내용을 반복하지 않는다.

## CP.4 LAZY STRUCTURE

첫 산출물이 생길 때만 다음 하위 경로를 만든다.

- `controlplane/domain/career/knowledge/{projects,skills,achievements,troubleshooting,profile}`
- `controlplane/domain/develop/work/{company|personal}/{project}/{D-ID}`
- `controlplane/domain/deliverables/projects/{company|personal}/{project}/{type}`
- `controlplane/domain/task/{TA-ID}/{TASK.MD|input|output}`
- `controlplane/history/{YYYY}/{MM-DD}/{HHmm}_{HI|RR|TA}-{SEQ}_{KEY}.MD`
- `controlplane/shared/{contracts,schemas,prompts,resources}`

실제 코드는 `project`에서 수정한다. 완료 후 보존할 Task는 `{HHmm}_{TA-ID}.MD` 단일 기록으로 History에 이동한다.

## CP.5 FLOW

```text
project ──→ deliverables ──→ career
   └──────────────────────→ career
develop ──수정────────────→ project
```

`career`는 산출물을 Evidence로 참조하고, `deliverables`는 Career 표현을 만들지 않으며, `develop`은 다른 Domain의 책임을 대신하지 않는다.

## CP.6 CHANGE

- `CONTENT`(오타·표현·설명): 해당 문서만 수정한다.
- `CONTROL`(구조·경로·Contract·책임): `DIFF → IMPACT → UPDATE → VALIDATE → HISTORY` 순서로 처리한다.
- 직접 의존하는 제어 문서만 갱신하고 `controlplane/history/{YYYY}/{MM-DD}`에 변경 이유를 기록한다.
- 변경 검토와 검증이 끝난 뒤 History를 확정한다.

## CP.7 PRINCIPLE

`project = 원본`, `domain = 지속 업무`, `shared = 공통 규칙`, `modes = 수정 전략`, `refactor = 효율 측정`, `history = 완료 Meta 기록`이며 같은 책임을 중복 소유하지 않는다.
