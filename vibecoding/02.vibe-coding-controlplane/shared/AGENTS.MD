# SH. SHARED AGENT
둘 이상의 영역이 안정적으로 재사용하는 자산만 관리한다. 프로젝트별 사실과 일회성 작업 상태는 두지 않는다.

## SH.1 STRUCTURE

```text
shared
├── AGENTS.MD
├── contracts
├── schemas
├── prompts
└── resources
```

- `contracts`: 영역 간 입력·출력·행동 계약
- `schemas`: 구조화 데이터와 문서 형식
- `prompts`: 반복 검증된 작업 Prompt
- `resources`: 둘 이상의 영역이 참조하는 정적 자산

필요한 디렉터리만 생성한다.

## SH.2 PROMOTION

- 두 영역 이상에서 같은 규칙·형식·자산을 반복 사용할 때만 `shared`로 승격한다.
- 상위 `AGENTS.MD`의 공통 규칙이나 하위 영역의 세부 규칙을 복제하지 않는다.
- Consumer가 필요한 자산만 직접 참조할 수 있도록 파일을 작고 독립적으로 유지한다.
- 변경 시 직접 Consumer를 검색하고 호환성 영향이 있을 때만 Version·Migration을 기록한다.

## SH.3 QUALITY

각 자산은 목적, Owner, 입력·출력, 직접 Consumer가 분명해야 한다. 사용되지 않거나 특정 프로젝트에만 필요한 자산은 `shared`에 두지 않는다.
