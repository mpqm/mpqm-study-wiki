# HI. HISTORY NAMING CONTRACT
History 기록의 파일 시각과 두 글자 Record Code를 일치시킨 제어 변경이다.

## HI.1 CHANGE

- `date`: `2026-08-23`
- `time`: `1751`
- `id`: `HI-006_history-naming-contract`
- `target`: History 파일명, Task 문서 키, 직접 경로 Reference
- `summary`: 파일명을 `{HHmm}_{HI|RR|TA}-{SEQ}_{KEY}.MD`로 통일하고 Task Qualified Key를 `D-TA`로 변경했다.

## HI.2 MIGRATION

- 기존 `H-*`, `R-*`, `T-*` 파일 코드를 `HI-*`, `RR-*`, `TA-*`로 변경했다.
- 기존 기록의 `HHmm`은 원본 파일 생성 시각을 사용했다.
- 진행 Task와 Archive ID는 `T-*`에서 `TA-*`, 문서 키는 `D-TK`에서 `D-TA`로 변경했다.
- History 계약은 별도 중복 문서 없이 `controlplane/history/AGENTS.MD`가 소유한다.

## HI.3 VALIDATION

- 날짜 디렉터리의 모든 기록이 `HHmm`과 `HI|RR|TA` 파일명 형식을 통과했다.
- 파일 코드별 Heading Key가 `HI`, `RR`, `D-TA`와 일치한다.
- 운영 문서의 이전 `H|R|T` 파일 패턴과 `D-TK` Reference가 제거됐다.
- 기존 Record 8개와 Project Source 내용은 보존됐다.
