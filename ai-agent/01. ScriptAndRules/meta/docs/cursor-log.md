# 프로젝트 개발 로그

## STEP1: 클래스 다이어그램 이동 및 기본 코드 작성

- 클래스 다이어그램 코드를 해당 패키지로 이동
  - [x] 기본 클래스 및 유틸리티 클래스
  - [x] DTO 클래스
  - [x] DAO 인터페이스
  - [x] 컨트롤러 클래스
  - [x] 서비스 클래스
  - [x] MyBatis 매퍼 파일
- 테이블 생성 쿼리 작성
  - [x] 회원 테이블
  - [x] 카테고리 테이블
  - [x] 게시글 테이블
  - [x] 게시글 이미지 테이블
  - [x] 댓글 테이블
  - [x] 랭킹 테이블
- 설정
  - [x] application.properties 설정

## STEP2: 백엔드 요구사항 개발

- API 엔드포인트
  - [x] 코드 조회 API
    - [x] 카테고리 목록 조회 API
  - [x] 게시글 관리 API
    - [x] 게시글 등록 API
    - [x] 게시글 수정 API
    - [x] 게시글 삭제 API
    - [x] 게시글 조회 API
    - [x] 게시글 목록 조회 API
    - [x] 게시글 좋아요 API
    - [x] 게시글 싫어요 API
    - [x] 게시글 조회수 증가 API
  - [x] 댓글 관리 API
    - [x] 댓글 등록 API
    - [x] 댓글 삭제 API
    - [x] 댓글 목록 조회 API
  - [x] 랭킹 조회 API
    - [x] 조회수 기준 랭킹 조회 API
    - [x] 좋아요 기준 랭킹 조회 API
    - [x] 싫어요 기준 랭킹 조회 API

## STEP3: 프론트엔드 요구사항 개발

- 페이지 개발
  - [x] 게시글 목록 페이지 (/, /post-list)
    - [x] post-list.html (Thymeleaf 템플릿)
    - [x] post-list.css (스타일)
    - [x] post-list.js (JavaScript)
  - [x] 게시글 상세 페이지 (/post-detail/{idx})
    - [x] post-detail.html (Thymeleaf 템플릿)
    - [x] post-detail.css (스타일)
    - [x] post-detail.js (JavaScript)
  - [x] 게시글 작성/수정 페이지 (/post-edit/{idx})
    - [x] post-edit.html (Thymeleaf 템플릿)
    - [x] post-edit.css (스타일)
    - [x] post-edit.js (JavaScript)

## STEP4: 수정사항
1. 게시글 목록 클릭 기능: 행 클릭 시 상세 페이지로 이동하는 기능 추가
2. 카테고리 표시 개선: 매핑 객체를 통해 codeIdx를 카테고리 이름으로 변환
3. 날짜 표시 형식 개선: 시간과 분까지 포함하는 형식으로 수정
4. 검색바 레이아웃 개선: 카테고리, 정렬, 검색 UI를 개선
5. 이미지 표시 기능 수정: WebConfig 클래스를 추가하여 /upload 경로 설정
6. 불필요한 API 호출 제거: 멤버 확인 API 호출 제거
7. 게시글 수정 흐름 개선: 비밀번호 확인 없이 편집 페이지로 바로 이동
8. 이미지 로딩 방식 개선: 게시글 데이터에 포함된 이미지 정보 직접 사용
9. 댓글 수 랭킹 UI 추가: TOP 5 게시글을 댓글 수 기준으로 표시하는 기능 추가
10. 비밀번호 오류 표시 개선: 비밀번호 필드 근처에 직접 오류 메시지 표시
11. 게시글 삭제 기능 개선: 게시글 삭제 시 "Request method 'DELETE' is not supported" 오류 발생 해결
12. 페이지네이션 기능 개선: 게시글 목록 페이지에서 페이지네이션 버튼이 표시되지 않는 문제 해결
13. 댓글 페이지네이션 기능 구현: 게시글 상세 페이지에서 댓글 목록에 페이지네이션 구현
14. 댓글 로딩 방식 개선: "댓글 목록 보기" 버튼 클릭 시 별도 API로 댓글 로드
15. 댓글 UI 개선: 댓글 작성 폼 위치 변경 및 댓글 토글 버튼 디자인 수정
16. 댓글 수정 기능 복원: 수정 버튼과 수정 폼 추가
17. 게시글 헤더 개선: 목록/수정/삭제 버튼을 제목과 함께 헤더에 배치
18. 게시글 헤더 스타일 변경: 배경색을 흰색으로 변경하고 카드 디자인 개선
19. 게시글 정보 UI 개선: 작성자, 카테고리, 등록일, 조회수 등의 높이를 통일하고 구분선 추가
20. 조회수 표시 방식 개선: 좋아요/싫어요와 같은 형태의 비활성화된 버튼으로 변경
21. TOP5 랭킹 UI 개선: 제목뿐만 아니라 행 전체 클릭 시 해당 게시물로 이동하도록 수정
22. 댓글 폼 배경색 개선: 댓글 작성 폼의 배경색을 흰색으로 변경하여 UI 일관성 향상
23. 댓글 레이아웃 개선: 작성자와 액션 버튼을 한 줄에, 내용과 생성일을 다음 줄에 배치
24. 게시글 삭제 처리 개선: 삭제 성공 시 목록 페이지로 이동하지 않고 현재 페이지에서 삭제 상태 표시
25. 게시글 등록/수정 흐름 개선: 성공 시 즉시 해당 게시글 상세 페이지로 이동하도록 변경
26. URL 파라미터 기반 알림 시스템 구현: 페이지 이동 시 메시지 정보를 URL 파라미터로 전달하고 표시
27. 게시글 목록에 정보 추가: 게시글 목록 테이블에 좋아요 수, 싫어요 수, 댓글 수 컬럼 추가
28. WebConfig 클래스 어노테이션 추가: 정적 리소스 핸들러 메서드에 @NonNull 어노테이션 추가하여 컴파일 경고 해결
29. 게시글 저장 시 반환값 ID 고정 문제 해결 및 이미지 업로드 기능 수정
30. 댓글 수정 기능 강화: 클라이언트에서 서버로 idx 값 전송 및 서버에서 댓글 dto에 idx 설정 로직 추가
31. 게시글 상세 페이지 삭제 기능 개선: 삭제 후 메인 페이지로 리다이렉션하도록 변경
32. 알림 UI 개선: 알림 영역에서 닫기(X) 버튼 제거하여 간결한 UI로 변경
33. 게시글 목록의 댓글 수 표시 기능 재구현: IFNULL 함수를 사용하여 LEFT JOIN으로 댓글 수 조회
34. 서버 코드 주석 스타일 통일: 모든 /** */ 스타일 주석을 // 스타일로 변경
35. PostQueryReqDto 개선: 페이지네이션을 위한 offset 필드 및 getOffset() 메서드 추가
36. SQL 쿼리 조건 강화: 페이지 및 크기가 0 이하일 때 LIMIT, OFFSET 구문이 실행되지 않도록 조건 추가
37. 댓글 수 랭킹 기능 구현: 배치 작업에서 댓글 수를 기준으로 랭킹을 계산하는 기능 추가
38. PostMapper.xml의 getBatch 쿼리 수정: LEFT JOIN으로 게시물별 댓글 수를 조회하도록 개선
39. RankProcessor 댓글 수 랭킹 로직 추가: 댓글 수 기준 상위 10개 게시물을 "C" 플래그로 랭킹
40. RankService 댓글 수 랭킹 그룹화 추가: "C" 플래그 기준 랭킹을 commentRanks로 분류
41. 메인 페이지 레이아웃 조정: 랭킹 표시 UI를 4개 컬럼으로 변경하여 댓글 수 랭킹 섹션 추가
42. 스프링 배치 랭킹 처리 개선: 단일 게시물 대신 모든 게시물을 일괄 처리하는 방식으로 변경
43. RankProcessor 로직 개선: 각 랭킹 유형별(조회수/좋아요/싫어요/댓글수)로 정렬 후 상위 10개를 선별
44. 배치 인터페이스 수정: Reader, Processor, Writer의 제네릭 타입을 리스트 형식으로 변경
45. 댓글 수 랭킹 디버깅: 댓글 수 정보 로깅 추가 및 null 체크 로직 강화
46. SQL 매퍼 정렬 조건 수정: 카멜케이스와 스네이크케이스 값 모두 처리하도록 조건식 개선
47. tb_rank 테이블 컬럼 추가: comment_count 컬럼 추가 및 SQL 매퍼 수정
48. 페이지네이션 기능 개선: 10개 페이지 그룹 표시 및 그룹 이동 기능 추가
49. 페이지 직접 이동 기능 추가: 페이지네이션 하단에 입력 필드를 배치하여 특정 페이지로 직접 이동 가능
50. 페이지 이동 UI 개선: 페이지 직접 이동 필드를 페이지네이션 바 오른쪽으로 이동하고 레이아웃 최적화
51. 페이지네이션 레이아웃 최종 개선: 페이지네이션 바를 중앙 정렬하고 페이지 입력 필드를 마지막 페이지 버튼 옆에 통합 배치
52. 페이지 이동 컴포넌트 높이 조정: 페이지 입력 필드와 이동 버튼의 높이를 페이지네이션 버튼과 동일하게 맞춤(38px)
53. 게시글 상세 헤더 레이아웃 개선: 긴 제목에도 버튼 배치가 깨지지 않도록 Flexbox 속성 조정
54. 애플리케이션 시간대 설정: 한국 시간(KST)으로 시간대 설정 추가 및 JVM 기본 시간대 변경

## STEP5: 스프링 배치로 순위 저장하기

- 스프링 배치 개발
  - [x] RankDto 클래스 구현
  - [x] RankDao 인터페이스 및 매퍼 구현
  - [x] BatchConfig 설정 클래스 구현
  - [x] RankingJob 및 RankingCalculationStep 구현
  - [x] PostReader 구현 (게시물 데이터 읽기)
  - [x] RankProcessor 구현 (랭킹 계산 처리)
  - [x] RankWriter 구현 (랭킹 데이터 저장)
  - [x] RankingScheduler 구현 (정각마다 배치 작업 실행)
  - [x] RankService 및 RankController 수정 (저장된 랭킹 데이터 조회)
  - [x] init.sql에 랭킹 테이블 flag 타입 수정 (VARCHAR(1)로 변경)

## 2023-09-13
- RankProcessor, RankReader, RankWriter, BatchConfig에 대한 단위 테스트 코드 작성
  - RankProcessorTest: 정상 데이터 처리, 첫 번째 청크 처리, 상태 초기화, 필터링 및 정렬, 빈 리스트 처리 검증
  - RankReaderTest: 정상 데이터 읽기, reset 메소드, 빈 리스트 반환, null 반환, 예외 처리 검증
  - RankWriterTest: 정상 데이터 처리, 빈 Chunk 처리, 빈 RankDto 목록 처리, RankDao 호출, 예외 처리 검증
  - BatchConfigTest: rankingCalculationStep 메소드, calculateRankingJob 메소드 검증
  - RankingBatchTest: 랭킹 배치 프로세스 전체 테스트 (Reader -> Processor -> Writer 순서로 프로세스 통합 검증)

## 2025-03-24
- 스프링 배치 통합 테스트 환경 구성
  - RankingBatchIntegrationTest 클래스 구현: 랭킹 배치 작업을 실제 실행하는 통합 테스트 작성
  - H2 데이터베이스 스키마 파일 추가: Spring Batch 메타데이터 테이블 스키마 정의
  - H2 2.2.224 버전 호환성 문제 해결:
    - IDENTITY 구문 수정: "BIGINT NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY"에서 "BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY"로 변경
    - BATCH_JOB_EXECUTION_PARAMS 테이블 컬럼 구조 변경: Spring Batch 5.1.0에 맞게 TYPE_CD, KEY_NAME 등을 PARAMETER_NAME, PARAMETER_TYPE, PARAMETER_VALUE로 변경
    - BATCH_STEP_EXECUTION 테이블에 CREATE_TIME 컬럼 추가
  - 테이블 초기화 스크립트 추가: schema-drop-h2.sql 파일로 기존 테이블을 삭제한 후 재생성하도록 구성
  - application-test.properties 생성: 테스트용 H2 데이터베이스 설정 추가
  - 테스트 환경 설정 개선:
    - @ActiveProfiles("test") 추가로 테스트 프로파일 활성화
    - Spring Batch 테이블을 매번 새로 생성하도록 generateUniqueName(true) 설정 추가
    - JobRepository 격리 수준 및 테이블 접두사 설정
  - NULL 오류 해결:
    - DataIntegrityViolationException 발생 문제 해결: START_TIME, CREATE_TIME, LAST_UPDATED 컬럼에 DEFAULT CURRENT_TIMESTAMP 값 추가
    - BATCH_JOB_EXECUTION 테이블 컬럼 기본값 추가: CREATE_TIME, START_TIME, LAST_UPDATED 컬럼에 DEFAULT 제약조건 추가
    - BATCH_STEP_EXECUTION 테이블의 START_TIME 컬럼에서 NOT NULL 제약조건 제거: Spring Batch가 null 값을 삽입하는 문제 해결


