# D-DE. DEVELOP AGENT
Project Source의 분석·구현·리팩터링·테스트·리뷰·장애 분석을 Routing한다. 실제 코드는 `project/...`에서 수정하고 공식 산출물과 Career Knowledge는 각 Owner로 보낸다.

## D-DE.1 ROUTING

- `project/company/{project}` → `controlplane/domain/develop/company/AGENTS.MD` → `controlplane/domain/develop/work/company/{project}/{D-ID}`
- `project/personal/{project}` → `controlplane/domain/develop/personal/AGENTS.MD` → `controlplane/domain/develop/work/personal/{project}/{D-ID}`
- 회사와 개인 Source를 한 작업에 혼합하지 않는다. 교차 범위는 사용자가 명시한 경우에만 하나를 Owner로 정한다.

## D-DE.2 LOAD

- 공통 문서 다음에 본 문서와 해당 `company` 또는 `personal` 규칙 하나만 읽는다.
- 비단순 작업은 `controlplane/domain/develop/contracts/EXECUTION.MD`, 역할 분리가 필요하면 사용하는 `controlplane/domain/develop/roles/*.MD`만 추가로 읽는다.
- 대상 프로젝트에 `AGENTS.MD`가 있으면 가장 가까운 규칙을 함께 적용하고 기존 분석·계획·기준선을 재사용한다.

## D-DE.3 STRUCTURE

```text
develop
├── AGENTS.MD
├── company/AGENTS.MD
├── personal/AGENTS.MD
├── contracts/EXECUTION.MD
├── roles/{COORDINATOR|PLANNER|REVIEWER|IMPLEMENTER}.MD
└── work/{company|personal}/{project}/{D-ID}
```

`work` 디렉터리는 첫 지속 작업이 생길 때 생성한다.

## D-DE.4 WORK RECORD

- 재시작·인계가 필요하거나 `multi` 또는 `strict`인 작업만 기록한다.
- `TASK.MD`에는 ID, 목표, 범위, Source, `agent_mode`, `document_mode`, `rigor`, 상태, 다음 행동만 둔다.
- `PLAN.MD`, `REVIEW.MD`, `RESULT.MD`는 실제로 필요한 것만 생성하고 전체 대화·탐색 로그는 저장하지 않는다.
- 구현 사실은 Project Source, 반복 검증은 코드·테스트·게이트를 Source of Truth로 삼고 `work`에 복제하지 않는다.

## D-DE.5 FLOW

`ROUTE → MODE/RIGOR → SOURCE → CHANGE → VERIFY → SUMMARY`

- 실행 형태 `agent_mode`는 루트 `AGENTS.MD`, 문서 전략 `document_mode`는 `controlplane/modes/AGENTS.MD`, 절차 엄격도 `rigor`는 `controlplane/domain/develop/contracts/EXECUTION.MD`를 따른다.
- 구현에 필요한 Source만 읽고 확인되지 않은 동작을 가정하지 않는다.
- 검증은 변경 위험에 비례하며 실행하지 못한 항목은 이유와 위험을 남긴다.
- 공통 코드 수정과 최종 통합·회귀 판정은 한 Owner가 맡는다.

## D-DE.6 COMPLETION

요청·변경 범위, Source, 기준선, 검증 결과, 사용자 변경 보존, 미검증 항목, 필요한 후속 Routing을 확인한다.
