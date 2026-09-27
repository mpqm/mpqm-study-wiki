# HI. HISTORY META
Controlplane 전체의 완료 기록을 날짜별로 보관하는 Meta 영역이다. 진행 상태, Project Source, 대화·명령 전체 로그를 복제하지 않는다.

## HI.1 STRUCTURE

```text
history
├── AGENTS.MD
└── {YYYY}/{MM-DD}
    ├── {HHmm}_HI-{SEQ}_{KEY}.MD
    ├── {HHmm}_RR-{SEQ}_{KEY}.MD
    └── {HHmm}_TA-{SEQ}_{KEY}.MD
```

연도와 일자 디렉터리는 첫 기록이 생길 때 생성한다. 날짜와 파일명 앞의 `HHmm`은 기록이 확정되거나 Task가 Archive된 Asia/Seoul 기준 24시간제 시각을 사용한다.

## HI.2 RECORD TYPE

- `HI-*`: 구조·경로·책임·Agent 규칙·Contract·Schema·Prompt·주요 Orchestration 변경
- `RR-*`: 재현 가능한 refactor Baseline과 전후 비교
- `TA-*`: 완료 후에도 보존해야 하는 단일 Task Checkpoint

파일 코드와 문서 키는 History `HI`, refactor Record `RR`로 일치시킨다. 보관된 Task의 파일 코드는 `TA`, 문서 Qualified Key는 Domain 출처를 유지해 `D-TA`를 사용한다.

## HI.3 LIFECYCLE

- Control 변경은 직접 의존성 검증을 마친 뒤 같은 날짜의 `{HHmm}_HI-*`에 이유와 결과를 기록한다.
- 진행 중인 Task는 `controlplane/domain/task`; 완료 후 보존할 Task는 `ARCHIVE`로 바꾸고 `TASK.MD`를 `{HHmm}_{TA-ID}.MD`로 이름을 바꿔 History에 이동한다.
- Task의 재사용 가능한 Input·Output은 먼저 해당 Owner로 승격하거나 경로로 참조한다. `input`·`output` 폴더를 History 아래에 만들지 않는다.
- refactor 기록은 사용자가 측정·비교를 명시적으로 요청하고 품질 Gate까지 끝난 경우에만 같은 날짜의 `{HHmm}_RR-*`로 확정한다.
- 기존 기록은 경로 Migration이나 사실 오류 정정 외에는 덮어쓰지 않는다.

## HI.4 CONTENT

각 기록에는 날짜·시각·ID, 변경 또는 측정 대상, 이유, 영향, 검증 결과, 필요한 Migration만 남긴다. 표현 수정, 일반 Knowledge 갱신, 파일 탐색, Worker 실행, Git diff 전문은 기록하지 않는다.
