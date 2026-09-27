# CT. CONTRACTS META AGENT
전역 계약과 메타 규칙을 관리한다. 프로젝트별 사실과 일회성 작업 상태는 두지 않는다.

## CT.1 STRUCTURE

```text
contracts
├── AGENTS.MD
├── DOCUMENT-KEY.MD
├── EXECUTION.MD
├── MCP-INTEGRATION.MD
├── PATH-RESOLUTION.MD
└── SOURCE-INTEGRATION.MD
```

각 계약은 필요한 Consumer가 직접 참조하며, 계약 간 중복을 만들지 않는다.

## CT.2 CHANGE

- 구조·경로·공통 행동 변경은 직접 Consumer를 검색하고 호환성 영향을 갱신한다.
- Domain 계약과 산출물 검수는 `SOURCE-INTEGRATION.MD`를 적용한다.
- 프로젝트별 사실과 일회성 작업 상태는 계약에 복제하지 않는다.
- 변경 기록은 Agent가 자동 생성하지 않으며 사용자가 필요할 때 `controlplane` 루트에 분류한다.

## CT.3 QUALITY

각 계약은 목적, Owner, 입력·출력, 직접 Consumer, 검증 조건이 분명해야 한다. 사용되지 않거나 특정 프로젝트에만 필요한 내용은 별도 계약으로 만들지 않는다.