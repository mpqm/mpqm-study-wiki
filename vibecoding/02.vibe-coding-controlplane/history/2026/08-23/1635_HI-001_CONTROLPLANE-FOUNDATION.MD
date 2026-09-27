# HI. CONTROLPLANE FOUNDATION

## HI.1 CHANGE

- Date: `2026-08-23`
- Time: `1635`
- ID: `HI-001_controlplane-foundation`
- Target: `controlplane` 구조와 Agent 제어 문서
- Summary: `workspace`를 `controlplane`, `WORKSPACE.md`를 `CONTROLPLANE.MD`로 변경하고 모든 Markdown 확장자를 `.MD`로 통일했다. 영역별 `AGENTS.MD`, 실행 모드, 2자리 문서 키 계약을 추가했다.

## HI.2 REASON & IMPACT

모든 작업의 시작점에서 Owner와 Single/Multi-Agent 방식을 결정하되 필요한 영역 규칙만 단계적으로 읽어 Context와 중복 분석을 줄이기 위한 변경이다.

- 시작 경로: `controlplane/CONTROLPLANE.MD` → `controlplane/AGENTS.MD` → 대상 영역의 `AGENTS.MD`
- 이전 `workspace/...` Reference는 `controlplane/...`으로 Migration해야 한다.
- Project Source 내용은 변경하지 않았으며 `controlplane/domain/task/source`의 Markdown은 확장자만 변경했다.

## HI.3 VALIDATION

- 실제 최상위 구조와 `CP.1 STRUCTURE` 비교
- History 기록을 제외한 운영 문서에서 이전 이름·단일 문자 키·소문자 확장자 Reference 검색
- 제어 문서의 2자리 Heading 및 `.MD` 확장자 검사
- Git diff와 사용자 Source 보존 확인
