# MT. REFACTOR METRICS
Controlplane 변경의 토큰·작업 효율을 같은 조건에서 비교하기 위한 측정 계약이다.

사용자가 수치 측정이나 전후 비교를 명시적으로 요청한 경우에만 읽고 실행한다. 일반 변경의 완료 검증에는 포함하지 않는다.

## MT.1 MEASUREMENT LEVEL

| Level | 사용할 수치 | 필수 근거 |
|---|---|---|
| `actual` | Runtime이 보고한 input·cached input·output token | Runtime, Model, 날짜, 작업 ID |
| `tokenizer` | 명시한 Tokenizer로 계산한 Load Set token | Model/Tokenizer와 Version, 정확한 파일 목록 |
| `proxy` | UTF-8 bytes·문자·줄·파일 수 | 정확한 파일 목록과 측정 명령 |

낮은 Level을 높은 Level처럼 표현하지 않는다. Runtime 수치가 없으면 과거 작업의 실제 Token을 추정해 기록하지 않는다.

## MT.2 STANDARD SCENARIO

- `bootstrap`: `CONTROLPLANE.MD` + 루트 `AGENTS.MD`
- `personal-lean`: `bootstrap` + `domain/AGENTS.MD` + Develop + Personal 규칙
- `company-standard`: `personal-lean`의 Personal 대신 Company 규칙 + Execution Contract
- `document-graph`: `bootstrap` + Mode Control + Graph Mode + 실제 대상 경로의 Agent 규칙
- `custom`: 사용자가 반복하는 작업의 고정 Load Set

Mode·Role 문서는 해당 Scenario가 실제 사용할 때만 Load Set에 넣는다. README·History·HELP처럼 자동으로 읽지 않는 문서는 일반 실행 비용에 포함하지 않는다.

## MT.3 WORK METRICS

- `read_files`: 실제로 Context에 넣은 고유 파일 수
- `edited_files`: 내용이 바뀐 파일 수
- `rounds`: 수정 후 검증 반복 횟수
- `handoffs`: Agent 간 요약 전달 횟수
- `checks`: 실행한 품질 검사와 결과
- `elapsed`: 같은 측정 환경에서 신뢰할 수 있을 때만 선택 기록

도구 호출 수나 대화 길이는 작업 성격에 따라 달라지므로 단독 합격 기준으로 쓰지 않는다.

## MT.4 CALCULATION

```text
delta = after - before
reduction_rate = (before - after) / before × 100
```

- Token 개선은 같은 Runtime/Model 또는 같은 Tokenizer의 `input_total`로 비교한다.
- Proxy 개선은 bytes·문자·줄을 각각 계산하고 Token 절감으로 환산하지 않는다.
- 작업 효율 개선은 동일한 완료 조건을 통과하면서 `read_files`, `rounds`, `handoffs` 중 목표 지표가 감소했는지 본다.
- 비용이 줄어도 같은 품질 Gate를 통과하지 못하면 `regression`, 조건이 다르면 `incomparable`이다.

## MT.5 RECORD SCHEMA

각 `controlplane/history/{YYYY}/{MM-DD}/{HHmm}_RR-{SEQ}_{KEY}.MD`는 다음 최소 항목만 가진다.

- `date`, `id`, `request`, `scenario`, `measurement_level`
- `before_source`, `after_source`, `load_set`
- `before`, `after`, `delta`, `reduction_rate`
- `quality_gate`, `result`, `decision`, `limits`

최초 Baseline은 `before`·`after` 대신 `current`를 기록하고 이후 비교가 해당 Record ID를 `before_source`로 참조한다.

기록은 결론의 근거이며 작업 로그 저장소가 아니다.
