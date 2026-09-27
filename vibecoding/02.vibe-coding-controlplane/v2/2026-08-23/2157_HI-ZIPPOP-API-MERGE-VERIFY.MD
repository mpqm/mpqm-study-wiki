# HI. ZIPPOP API 원본 병합·소스 검증 로그

## HI.1 요청 및 범위

- 대상 산출물: `output/zippopv2-백엔드 API 명세서.md`
- 원본 문서:
  - `merge/backup/zippopv2-백엔드 API 명세서`
  - `merge/backup/zippopv2-백엔드 API 명세서.md`
  - `merge/backup/백엔드 API 명세서 261a64eb8b5081009e4cc1fa94f976c7.md`
- Project Source: `project/personal/zippop/backend/src`
- 목적: 원본 중복·누락 교차검증, 실제 백엔드 구현 대조, API 산출물 반영

## HI.2 원본 Inventory 및 병합 결과

| 항목 | 결과 |
| --- | --- |
| 확장자 없는 원본과 `261a...md` | SHA-256 동일: `012B1ACD7E888D524C9F43A53C473A273C69362371DF6DCFB76699A50B4DCB7E` |
| 변환 Markdown API 블록 | 48개 `<details>` 블록 |
| 최종 산출물 API 블록 | 48개, 누락 0개·추가 0개 |
| 원본 고유 URL | 56개 모두 최종 산출물에 존재 |
| 포트폴리오 문서 내부 관리정보 | 제거: `D-DV`, merge 경로, Project Source 내부 경로 |

중복 원본은 한 번만 반영했다. 변환 Markdown의 접기 구조와 모든 API 본문은 유지했고, 원본의 `SuccessResponse<T>`, 권한 매트릭스, 코드 대역, 검증 기록을 통합했다.

## HI.3 Source 대조

| 검증 항목 | 결과 | 근거 |
| --- | --- | --- |
| HTTP Controller 매핑 | 44개 | Account, Cart, Popup, CompanyPopup, Goods, Orders, Reserve Controller |
| 인증 필터 경로 | 3개 | 로그인, 로그아웃, OAuth2 로그인 |
| STOMP 매핑 | 1개 | `ReserveController @MessageMapping("/reserve/status")` |
| 문서 API 총계 | 48개 | HTTP 47개 + STOMP 1개 |
| 성공 응답 타입 | 정정 | `global/base/SuccessResponse.java` 및 Controller 반환 타입 |
| WebSocket | 일치 | `/ws`, `/pub`, `/sub`, `/queue`, `/user` |
| 예약 사용자 구독 | 정정 | `/user/queue/reserve/status` |
| 권한 | 일치 | `SecurityConfig.java`의 `ROLE_CUSTOMER`, `ROLE_COMPANY`, 공개 경로 |
| DTO 검증 | 일치 | Controller의 `@Valid`, `@RequestBody`, `@RequestPart`, `@RequestParam` |

## HI.4 실행 검증

실행 명령:

```text
project/personal/zippop/backend/gradlew.bat test --no-daemon
```

결과:

```text
BUILD SUCCESSFUL
tests=26
failures=0
errors=0
skipped=0
```

## HI.5 검증 판정 및 잔여 범위

- API 원본 병합: PASS
- 중복 제거: PASS
- Controller·Security·STOMP Source Traceability: PASS
- 백엔드 테스트 실행: PASS
- 프론트엔드 테스트, Docker smoke, 외부 PG 실거래: 이번 실행에서 재현하지 않음. 원본 기록과 독립 검증 결과를 구분해야 함.

## HI.6 산출물 반영

- 포트폴리오 산출물에는 API 내용, 접기 구조, 공개 가능한 검증 요약만 남겼다.
- 병합 원본 목록, 내부 Source 경로, 교차검증 상세, Agent 실행 결과는 이 로그에만 기록했다.
