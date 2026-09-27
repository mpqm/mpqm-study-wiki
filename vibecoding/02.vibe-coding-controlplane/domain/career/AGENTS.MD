# D-CA. CAREER AGENT
Project Source와 검증된 Deliverables에서 재사용 가능한 Career Knowledge를 만든다. 개발 산출물의 생성·수정은 담당하지 않는다.

## D-CA.1 STRUCTURE

```text
career
├── AGENTS.MD
└── knowledge
    ├── projects
    ├── skills
    ├── achievements
    ├── troubleshooting
    └── profile
```

- `projects`: 프로젝트별 역할·기술·문제·해결·영향과 Source
- `skills`: 여러 프로젝트에서 검증된 기술 경험
- `achievements`: 근거와 측정 방법이 있는 성과
- `troubleshooting`: 재사용 가능한 문제 해결 사례
- `profile`: 위 Knowledge에서 파생한 Career Profile과 표현 후보
- 필요한 디렉터리와 문서만 생성한다.

## D-CA.2 SOURCE & EVIDENCE

- 근거의 권위는 `Project Source → 검증된 Deliverables → Career Knowledge` 순이다.
- 탐색은 비용을 줄이기 위해 `기존 Career Knowledge → Deliverables → 부족한 Project Source` 순으로 한다.
- `FACT`는 Source에서 직접 확인된 사실, `INFERENCE`는 Evidence 기반 추론, `CLAIM`은 경력 표현 후보이다.
- `INFERENCE`를 `FACT`로 승격하거나 근거 없는 역할·성과·수치·숙련도를 만들지 않는다.

## D-CA.3 FLOW

`KNOWLEDGE CHECK → EVIDENCE GAP → SOURCE CHECK → NORMALIZE → UPDATE`

- 역할, 기술, 문제, 해결, 영향의 Context를 연결하고 기능·기술 목록만 나열하지 않는다.
- Deliverable의 표현만 바뀌었다면 Knowledge를 갱신하지 않는다.
- 개발 산출물이 필요하면 `controlplane/domain/deliverables`로 Routing한다.
- 프로젝트 Inventory를 복제하지 않고 필요한 Evidence와 Source Reference만 남긴다.

## D-CA.4 CHANGE

`EVIDENCE CHANGE → CAREER IMPACT → AFFECTED KNOWLEDGE UPDATE`

실제 경력 사실에 영향받는 문서만 갱신하며 다른 Knowledge를 일괄 재생성하지 않는다.

## D-CA.5 COMPLETION

- 각 FACT가 `project/...` 또는 검증된 `controlplane/domain/deliverables/...`와 연결되는가
- FACT·INFERENCE·CLAIM과 역할·기술·성과가 구분되는가
- Career가 개발 산출물을 중복 생성하지 않았는가
- 다음 작업이 프로젝트 전체를 다시 분석하지 않고 이어질 수 있는가
