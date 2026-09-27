# RR. CONTROLPLANE LOAD BASELINE
Domain·Mode·refactor 구조를 적용한 뒤 반복 작업별 기본 Load Set의 최초 비용 기준선이다.

## RR.1 RECORD

- `date`: `2026-08-23`
- `time`: `1711`
- `id`: `RR-001_controlplane-baseline`
- `request`: Controlplane Markdown의 토큰·작업 효율 개선을 판단할 근거 마련
- `measurement_level`: `proxy`
- `source`: 현재 Controlplane working tree
- `actual_token`: Runtime 수치가 제공되지 않아 미측정

## RR.2 LOAD SET

- `bootstrap`: `CONTROLPLANE.MD`, `AGENTS.MD`
- `personal-lean`: `bootstrap` + `domain/AGENTS.MD`, Develop, Personal 규칙
- `company-standard`: `bootstrap` + `domain/AGENTS.MD`, Develop, Company 규칙, Execution Contract
- `document-graph-develop-contract`: `bootstrap` + Domain, Develop, Mode Control, Graph Mode, Execution Contract
- `refactor-audit`: `bootstrap` + refactor Control, Metrics Contract

## RR.3 CURRENT

| Scenario | Files | UTF-8 bytes | Characters | Lines |
|---|---:|---:|---:|---:|
| `bootstrap` | 2 | 11,032 | 6,974 | 167 |
| `personal-lean` | 5 | 17,293 | 10,844 | 267 |
| `company-standard` | 6 | 21,336 | 13,087 | 328 |
| `document-graph-develop-contract` | 7 | 21,617 | 13,545 | 365 |
| `refactor-audit` | 4 | 16,286 | 10,254 | 267 |

각 값은 Load Set 파일의 파일 크기, UTF-8로 읽은 문자 수, 줄 수를 합산했다. Characters와 bytes를 Token으로 환산하지 않는다.

## RR.4 QUALITY GATE

- 이전 최상위 Domain 디렉터리 없음, 새 `domain` 경로 존재
- 관리 Markdown의 `.MD`, UTF-8, Heading Key, Registry 일치
- 이전 경로와 특정 모델 의존 Reference 없음
- Develop `strict` 순서에 계획, 읽기 전용 반증, 결정 Gate, 구현, 독립 검증 존재
- Result: `PASS`

## RR.5 INITIAL PROPOSAL

1. `bootstrap`에서 구조 Tree와 Area 경로의 중복을 측정해 `CONTROLPLANE.MD` 축약안을 먼저 검토한다. 모든 Scenario에 영향을 주지만 Routing 정보 손실 위험이 있다.
2. 루트 `AGENTS.MD`는 항상 필요한 불변 규칙만 남았는지 Section별 사용 빈도를 수집한 뒤 축약한다. 안전·완료 조건은 삭제하지 않는다.
3. 실제 작업부터 가능하면 Runtime의 input·cached input·output Token과 `read_files`를 기록해 Proxy와 실제 비용의 상관을 확인한다.

아직 동일 품질의 변경 후 수치가 없으므로 절감률은 계산하지 않는다.

## RR.6 DECISION & LIMITS

- `decision`: 본 수치를 이후 Refactor의 `before_source`로 사용
- `result`: `baseline`
- `limits`: Source 파일 본문, Tool Schema, 대화 History, Runtime 내부 Prompt는 Load Set에 포함하지 않았다. 실제 Token·Cache·소요 시간은 판단할 수 없다.
