# RF. REFACTOR CONTROL
Controlplane Markdown의 토큰 비용과 작업 효율을 측정하고 개선 근거를 관리한다. 업무 Domain의 내용이나 Project Source는 소유하지 않는다.

## RF.1 STRUCTURE

```text
refactor
├── AGENTS.MD
└── METRICS.MD
```

재현 가능한 Baseline과 실제 전후 비교는 `controlplane/history/{YYYY}/{MM-DD}/{HHmm}_RR-{SEQ}_{KEY}.MD`에 보관한다. 아이디어·전체 로그·근거 없는 예상치는 장기 기록으로 만들지 않는다.

## RF.2 TRIGGER

- 사용자가 Token 사용량, Context 크기, 작업 효율, 전후 개선량 또는 `refactor` 분석을 명시적으로 요청할 때만 활성화한다.
- 예: `controlplane 토큰 소모가 얼마나 줄었어?`, `이 변경 전후 Context를 비교해줘`, `refactor 관점에서 개선안을 제안해줘`.
- 일반 Control·Domain 변경에서는 본 문서와 `METRICS.MD`를 읽지 않고 Baseline·비교·`RR-*` 기록도 자동 생성하지 않는다.
- 단순히 “토큰 효율적으로 작성해줘”라고 한 경우에는 중복을 줄이는 작성 원칙만 적용하고, 수치 측정까지 요구한 것인지 임의로 확대 해석하지 않는다.

## RF.3 REQUEST FLOW

`SCENARIO → BASELINE → BOTTLENECK → PROPOSAL → CHANGE → SAME CHECK → COMPARE`

1. 사용자가 실제로 반복하는 작업 Scenario와 Load Set을 고정한다.
2. `METRICS.MD`에 따라 변경 전 비용과 품질 기준선을 측정한다.
3. 제안은 `대상 → 변경 → 예상 이득 → 위험 → 검증` 순서로 최대 세 개만 우선순위화한다.
4. 수정 요청이면 승인된 범위만 변경하고, 분석 요청이면 파일을 바꾸지 않는다.
5. 같은 Scenario와 검사를 재실행해 비용이 줄고 품질이 유지된 경우에만 개선으로 판정한다.

## RF.4 OPTIMIZATION PRIORITY

- 자주 읽는 루트 문서의 중복 제거와 Progressive Load 개선을 가장 먼저 본다.
- 사용하지 않는 Role·Mode·형제 Domain을 읽지 않도록 Routing을 좁힌다.
- 원문·로그 복제 대신 Source 경로와 재사용 가능한 결정만 남긴다.
- 파일 수만 줄이기 위해 서로 다른 책임을 합치거나 안전·완료 조건을 삭제하지 않는다.
- 거의 읽지 않는 History를 줄인 결과를 일반 작업의 토큰 절감으로 계산하지 않는다.

## RF.5 RECORD

- 실제 토큰은 실행 환경이 수치를 제공할 때만 기록한다.
- 실제 토큰을 알 수 없으면 bytes·문자·줄·읽은 파일 수를 `proxy`로 표시하며 토큰이라고 부르지 않는다.
- 비교 기록에는 같은 Scenario, Source revision, Agent/Model 조건, Load Set, 품질 검사, 전후 수치, Delta, 판단을 포함한다.
- 비교 기록 경로는 `controlplane/history/{YYYY}/{MM-DD}/{HHmm}_RR-{SEQ}_{KEY}.MD`다.
- 누적 총량을 위해 모든 대화를 기록하지 않는다. 의미 있는 Baseline과 채택한 변경만 기록한다.

## RF.6 COMPLETION

측정 출처, 전후 조건의 동일성, 품질 Gate, 계산식, 미측정 비용을 확인한다. 근거가 부족하면 `개선`, `악화` 대신 `판정 보류`로 기록한다.
