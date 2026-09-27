# HI. DEVELOP MODES

## HI.1 CHANGE

- Date: `2026-08-23`
- Time: `1655`
- ID: `HI-002_develop-modes`
- Target: `controlplane/modes`, `controlplane/domain/develop`, 실행 필드
- Summary: Agent 구성을 `agent_mode`, Markdown 범위 전략을 `document_mode`로 분리했다. `direct`, `graph`, `loop`, `hybrid`에 Budget과 중단 조건을 추가하고 Develop을 회사·개인 정책 및 모델 독립 역할로 분리했다.

## HI.2 REASON & IMPACT

Graph나 Loop 요청이 Domain 전체 수정으로 확대되는 것을 막고, 필요한 문서와 역할 카드만 단계적으로 로드하기 위한 변경이다.

- 이전 `mode` 필드는 `agent_mode`로 Migration한다.
- 지속 문서 작업은 필요할 때만 `document_mode`와 Budget을 기록한다.
- `project/company`와 `project/personal`은 서로 다른 Develop 기본 정책을 적용한다.
- Project Source 내용과 기존 Work Record는 변경하지 않았다.

## HI.3 VALIDATION

- CONTROLPLANE 구조와 실제 경로 비교
- 모든 제어 문서의 2자리 Key 및 `.MD` 확장자 검사
- 이전 단일 `mode` Field와 특정 모델명 Reference 검색
- Graph/Loop의 Budget·Scope Freeze·Stop 조건 확인
