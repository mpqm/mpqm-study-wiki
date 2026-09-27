# WORKSPACE BOOTSTRAP

이 파일을 Workspace 루트로 복사하고 `AGENTS.MD`로 이름을 바꾼다.

모든 작업은 다음 순서로 시작한다.

1. `controlplane/CONTROLPLANE.MD`
2. `controlplane/AGENTS.MD`
3. 대상 경로상의 `AGENTS.MD`

`controlplane`의 Routing에 따라 Owner와 실행 방식을 정한다. `history`는 사용자가 요청하거나 이전 결정 확인이 필요할 때만 읽으며, Project Source는 해당 작업에 필요한 범위만 읽는다.
