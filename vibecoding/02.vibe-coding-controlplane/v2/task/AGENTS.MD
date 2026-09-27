# D-TA. TASK AGENT
`task` 도메인은 `career`, `deliverables`, `develop`에 속하지 않는 단발성·임시·조정 작업에만 사용한다. 해당 세 도메인에 속하는 요청은 반드시 각 도메인을 Owner로 Routing한다.
지속 영역에 속하지 않는 단발성·실험성 작업을 관리한다. 즉시 끝나는 단순 작업에는 Task 문서를 만들지 않는다.

## D-TA.1 STRUCTURE

```text
task
├── AGENTS.MD
└── {TA-ID}
    ├── TASK.MD
    ├── input
    └── output
```

`input`과 `output`은 필요할 때만 만든다. 작업에 제공된 자료는 `input`에서 읽고, 작업이 생성한 산출물은 `output`에 둔다. 기존 자료는 명시적 요청 없이 이동하지 않는다.

## D-TA.2 TASK RECORD

재시작·추적·인계가 필요한 작업만 `TASK.MD`에 다음 항목을 유지한다.

- `id`, `goal`, `owner`, `agent_mode`, `scope`, `status`
- `input`, `output`, `decisions`, 
ext_action`

`input`과 `output`은 각각 `{TA-ID}/input`, `{TA-ID}/output` 상대경로를 기록하고 첨부 내용을 `TASK.MD`에 복제하지 않는다. `status`는 `BACKLOG → ACTIVE → DONE → ARCHIVE`를 사용한다. 진행 중에는 디렉터리를 이동하지 않는다. Agent는 완료 기록을 자동 이동하지 않는다. 사용자가 필요할 때 `TASK.MD`를 `{YYYY-MM-DD-HHmm}_{D-TA}.MD`로 이름을 바꿔 `controlplane` 루트에 직접 분류한다. 원본을 복제하지 말고 가능한 한 경로로 참조한다.

## D-TA.3 EXECUTION

- `agent_mode`는 루트 `AGENTS.MD`를 따르고, `scope`는 요청·영향·검수 기준으로 자동 결정해 기록한다.
- `input`은 요청에 필요한 파일·디렉터리만 읽고 명시적 요청 없이 수정·이동·이름 변경하지 않는다.
- 민감 정보가 있는 Input은 값을 `TASK.MD`, `output`, History에 복제하지 않고 경로와 검증에 필요한 최소 사실만 기록한다.
- Multi-Agent 작업은 Worker별 목표·Source·Output·파일 소유권만 기록하고 전체 대화 로그는 저장하지 않는다.
- 진행 중에는 결정과 다음 행동을 갱신하고 완료 시 재사용할 산출물만 `output`에 남긴다.
- 반복되는 작업은 해당 지속 영역 또는 `contracts`로 승격한다.

## D-TA.4 COMPLETION

요청 결과를 검증한 뒤 `status`, Output 경로, 핵심 결정, 남은 작업을 갱신한다. 보존할 기록은 `ARCHIVE`로 전환하고, 사용자가 필요할 때 `{YYYY-MM-DD-HHmm}_{D-TA}.MD`로 `controlplane` 루트에 직접 분류한다. `input`·`output`이 남아 있으면 먼저 Owner와 보존 경로를 확정하며 임의로 삭제하지 않는다.
