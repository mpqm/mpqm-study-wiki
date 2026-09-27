# {{SERVICE_NAME}} API 명세서

> 상태: `{{CURRENT|PROPOSED}}`  
> 기준 일자: `{{YYYY-MM-DD}}`  
> Base URL: `{{BASE_URL}}`  
> Source: `{{SOURCE_PATH_OR_URL}}`

## 1 문서 개요

| 항목 | 내용 |
| --- | --- |
| 서비스 | `{{SERVICE_NAME}}` |
| 버전 | `{{API_VERSION}}` |
| 설명 | {{API_DESCRIPTION}} |
| 기본 Content-Type | `application/json` |
| 인증 방식 | {{AUTHENTICATION_SCHEME_OR_NONE}} |
| 연락처/소유자 | {{OWNER_OR_CONTACT}} |

## 2 공통 규약

- 모든 시간은 `{{TIMEZONE}}`을 기준으로 한다.
- 인증이 필요한 요청은 `{{AUTH_HEADER_EXAMPLE}}`를 사용한다.
- 성공 응답은 `{{SUCCESS_ENVELOPE_DESCRIPTION}}` 구조를 사용한다.
- 실패 응답은 `{{ERROR_ENVELOPE_DESCRIPTION}}` 구조를 사용한다.
- 페이지네이션·정렬·필터 규칙: {{PAGINATION_SORT_FILTER_RULES}}

**공통 성공 응답 예시**

```json
{
  "code": "{{SUCCESS_CODE}}",
  "success": true,
  "message": "{{SUCCESS_MESSAGE}}",
  "result": {}
}
```

**공통 실패 응답 예시**

```json
{
  "code": "{{ERROR_CODE}}",
  "success": false,
  "message": "{{ERROR_MESSAGE}}",
  "result": null
}
```

## 3 {{FEATURE_GROUP}}

<details>
<summary><strong>[{{METHOD}}] {{ENDPOINT_NAME}}</strong></summary>


| 항목 | 내용 |
| --- | --- |
| Method | `{{METHOD}}` |
| Path | `{{PATH}}` |
| Description | {{ENDPOINT_DESCRIPTION}} |
| Authentication | `{{REQUIRED|OPTIONAL|NONE}}` |
| Authorization | {{ROLE_OR_POLICY_OR_NONE}} |
| Content-Type | `{{CONTENT_TYPE}}` |
| 요구사항 ID | `{{REQUIREMENT_ID}}` |
| Source | `{{CONTROLLER_OR_ROUTE_SOURCE}}` |

**Path parameters**

| 이름 | 타입 | 필수 | 제약 조건 | 설명 | 예시 |
| --- | --- | --- | --- | --- | --- |
| `{{PATH_PARAM}}` | `{{TYPE}}` | `{{Y|N}}` | {{CONSTRAINT}} | {{DESCRIPTION}} | `{{EXAMPLE}}` |

**Query parameters**

| 이름 | 타입 | 필수 | 기본값 | 제약 조건 | 설명 | 예시 |
| --- | --- | --- | --- | --- | --- | --- |
| `{{QUERY_PARAM}}` | `{{TYPE}}` | `{{Y|N}}` | `{{DEFAULT_OR_NONE}}` | {{CONSTRAINT}} | {{DESCRIPTION}} | `{{EXAMPLE}}` |

**Request headers**

| 이름 | 필수 | 설명 | 예시 |
| --- | --- | --- | --- |
| `{{HEADER_NAME}}` | `{{Y|N}}` | {{DESCRIPTION}} | `{{EXAMPLE}}` |

**Request body**

| 필드 | 타입 | 필수 | 제약 조건 | 설명 | 예시 |
| --- | --- | --- | --- | --- | --- |
| `{{FIELD_NAME}}` | `{{TYPE}}` | `{{Y|N}}` | {{VALIDATION}} | {{DESCRIPTION}} | `{{EXAMPLE}}` |

```json
{
  "{{FIELD_NAME}}": "{{EXAMPLE_VALUE}}"
}
```

**성공 응답**

- HTTP Status: `{{SUCCESS_HTTP_STATUS}}`
- 조건: {{SUCCESS_CONDITION}}

```json
{
  "code": "{{SUCCESS_CODE}}",
  "success": true,
  "message": "{{SUCCESS_MESSAGE}}",
  "result": {{SUCCESS_RESULT_EXAMPLE}}
}
```

**실패 응답**

| HTTP Status | 코드 | 조건 | 메시지 |
| --- | --- | --- | --- |
| `{{ERROR_HTTP_STATUS}}` | `{{ERROR_CODE}}` | {{ERROR_CONDITION}} | {{ERROR_MESSAGE}} |

```json
{
  "code": "{{ERROR_CODE}}",
  "success": false,
  "message": "{{ERROR_MESSAGE}}",
  "result": null
}
```

**처리 흐름·주의 사항**

1. {{PROCESS_STEP_1}}
2. {{PROCESS_STEP_2}}
3. {{PROCESS_STEP_3}}

- 멱등성·재시도: {{IDEMPOTENCY_OR_RETRY_NOTES}}
- 보안·민감정보: {{SECURITY_OR_PRIVACY_NOTES}}
- 기타 제약: {{ADDITIONAL_CONSTRAINTS}}

</details>

<!-- 기능군은 ## 블록을, API는 위 <details> 블록을 복제해 추가한다. 원문이나 Source에 없는 정보는 추론해 채우지 않는다. -->
