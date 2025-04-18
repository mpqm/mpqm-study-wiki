# STEP1 ClassDiagram 이동 및 참고
- /meta/class 폴더의 클래스 다이어그램 코드를 폴더에 이동
- Base로 시작하는 클래스를 제외하고는 클래스의 구조는 절대 유지
- Dao, Dto, Service, Controller, common(BaseRes, CryptoUtil, FileUploadUtil)로 이동
- import 경로 수정 및 Lombok 어노테이션 추가
- 클래스다이어그램에서 추출한 클래스에서 선언된 메서드와 기능만 개발할 예정
- src/main/resources/mapper에 MyBatis 쿼리 xml 파일생성
- 파일을 만들고 DTO를 참고해 테이블 생성 쿼리를 도출해 /meta/docs/init.sql로 작성

# STEP2 백엔드 요구사항에 따른 개발
- 코드 조회
    - GET /code
    - 코드 목록 조회
- 게시물 목록 페이지로 연결 
    - GET /
    - goPostListPage
- 게시물 상세 페이지로 연결
    - GET /post-detail/{idx}
    - goPostDetailPage
- 게시물 작성/수정 페이지로 이동
    - GET /post-edit/{idx}
    - goPostEditPage
- 게시물 생성
    - POST /post
    - @RequestPart PostDto dto
    - @RequestPart MultiPartFile[] files
    - 사용자는 게시물을 작성하며, 작성 시 작성자 이름, 비밀번호, 제목, 내용, 카테고리, 사진들을 입력
    - 입력값은 PostDto에 담겨 게시물 생성
    - 컨트롤러로 이미지를 받아와 resources/upload 폴더에 저장
    - 게시물 생성 완료 응답 반환 BaseRes 사용
- 게시물 수정
    - PUT /post
    - @RequestPart PostDto dto
    - @RequestPart MultiPartFile[] files
    - 사용자는 게시물을 수정할 수 있으며, 비밀번호를 비교해 일치하면 수정 가능
    - 사용자는 게시물을 수정하며, 작성 시 작성자 이름, 비밀번호, 제목, 내용, 카테고리, 사진들을 입력
    - 입력값은 PostDto에 담겨 게시물 수정정
    - 컨트롤러로 이미지를 받아와 resources/upload 폴더에 저장
    - 게시물 수정 성공 응답 반환 BaseRes 사용
- 게시물 상세 조회
    - GET /post/{idx}
    - @PathVariable Long idx
    - 게시물 상세 조회 시 게시물 idx 값을 이용
    - 카테고리, 제목, 내용, 작성자, 사진, 조회수, 좋아요 수, 댓글 목록 조회
    - 게시물 조회 시 조회수 증가
    - 게시물 상세 조회 시 해당 게시글 ID를 가진 전체 댓글 목록이 PostDetailDto에 담김
    - 페이징 처리를 통해 댓글 목록 분할 조회 가능 기본값 10
- 게시물 삭제
    - DELETE /post
    - @ResponseBody PostDto dto
    - 게시물 삭제 시 비밀번호 입력 후 일치하면 삭제 가능
    - 게시물 삭제 완료, 실패 응답
- 게시물 페이지네이션 조회
    - GET /post-list
    - @ResponseBody PostQueryDto dto
    - 페이징 처리를 통해 게시물 목록을 분할하여 조회 가능
    - 게시물 목록 조회 가능
    - 카테고리, 제목, 내용, 작성자, 날짜 범위,  등 다양한 조건으로 게시물 검색 가능
- 게시물 검색
    - GET /post-search
    - @ResponseBody PostQueryDto dto
    - 카테고리 별 / 제목, 작성자 / 시간 범위 / 최신순, 댓글 많은 순, 오래된 순, 좋아요 수, 싫어요수, 조회수의 조건으로 게시물 검색 가능
    - 페이징 처리를 통해 게시물 목록을 분할하여 조회 가능
- 게시물 좋아요 증가
    - GET /post-like/{idx}
    - @PathVariable Long idx
    - 좋아요 요청 시 해당 게시물의 좋아요 수 증가, 감소는 없음
- 게시물 싫어요 증가
    - GET /post-unlike/{idx}
    - @PathVariable Long idx
    - 싫어요 요청 시 해당 게시물의 싫어요 수 증가, 감소는 없음
- 댓글 생성
    - POST /comment
    - @ResponseBody CommentDto dto
    - 댓글 생성 시 작성자 이름, 비밀번호, 내용 입력
    - 댓글 생성 완료, 실패 응답
- 댓글 수정
    - PUT /comment
    - @ResponseBody CommentDto dto
    - 댓글 수정 시 작성자 이름, 비밀번호, 내용 입력
    - 비밀번호 비교 후 일치하면 수정 가능
    - 댓글 수정 완료, 실패 응답
- 댓글 삭제
    - DELETE /comment
    - @ResponseBody CommentDto dto
    - 댓글 삭제 시 비밀번호 입력 후 일치하면 삭제 가능
    - 댓글 삭제 완료, 실패 응답
- 댓글 조회
    - GET /
    - 페이징 처리를 통해 댓글 목록을 분할하여 조회 가능
- 랭킹 조회
    - GET /rank
    - 각 조회수, 좋아요, 싫어요별 랭킹 목록을 가져옴
    - SpringBatch를 이용해 Reader는 게시물물 데이터 조회
    - processor는 조회수, 좋아요, 싫어요, 댓글수를 활용해해 랭킹 점수 계산 10등까지 목록화
    - writer는 기존 랭킹 목록 삭제 후 post의 idx값으로 랭킹 목록 저장
    - 매 정각 배치 작업 실행
    - 응답은 각 행에 있는 3개의 postidx 값을 조회해 idx, 제목, 조회수나 좋아요수, 싫어요수
    - Map형식으로 조회수(1등~10등), 좋아요수(1등~10등), 싫어요수(1등~10등) 형식으로 반환 

# STEP3 프론트엔드 요구사항에 따른 개발
- 게시물 생성(/post-edit)
    - goPostEditPage() 와 연결
    - 카테고리 선택, 이름, 비밀번호, 제목, 내용 입력 필드 제공
    - 이미지 첨부 기능 제공, 수정 시 기존 첨부 이미지 목록과 삭제 옵션 제공
    - 게시물 생성 성공 시 알림 팝업

- 게시물 수정(/post-edit/{idx})
    - goPostEditPage() 와 연결
    - 기존 게시물을 조회해 값을 미리 설정
    - 카테고리 선택, 이름, 비밀번호, 제목, 내용 입력 필드 제공
    - 이미지 첨부 기능 제공, 수정 시 기존 첨부 이미지 목록과 삭제 옵션 제공
    - 게시물 수정 성공 시 알림 팝업
    - 수정 시 기존 첨부 이미지 목록과 삭제 옵션 제공

- 게시물 목록 페이지(/,/post-list)
    - goPostListPage() 와 연결
    - 게시물 목록 표시 / 검색 및 정렬 / 페이지네이션 / 카테고리 필터링
    - 게시물 목록이 표 형태로 표시, 표의 행을 클릭하면 게시물 상세 페이지로 이동
    - 번호, 카테고리, 제목, 작성자, 조회수, 등록일 정보 표시
    - 페이지크기10으로 페이지네이션 수행
    - 검색 기능과 페이징 네비게이션 제공
    - 최신순, 오래된 순, 좋아요 많은 순, 싫어요 많은 순, 조회수로 필터링 가능
    - 카테고리로 필터링 가능
    - 제목, 작성자를 검색어로 입력
    - 글쓰기 버튼 제공
    - 하루마다 좋아요 수, 싫어요 수, 조회 수, 댓글 수수에 따른 랭킹 집계 표시
    - 랭킹행을 누르면 해당 글로 이동

- 게시물 상세 페이지(/post-detail)
    - goPostDetailPage() 와 연결
    - 게시물의 제목, 작성자, 등록일, 조회수, 내용 표시
    - 첨부된 이미지 표시
    - 댓글 보기 버튼을 누르면 댓글 작성 폼과 댓글 목록(수정,삭제) 표시 안누르면 숨김
    - 게시물 상세 조회 페이지의 삭제 버튼으로 게시물물 삭제
    - 수정/삭제 버튼 제공
    - 좋아요, 싫어요 버튼 제공
    - 댓글 기능
        - 게시물 상세 조회 시 댓글 목록 버튼 표시 클릭시 댓글 목록과 입력폼 표시
        - 댓글 최신순 정렬 및 페이지네이션
        - 댓글 생성 시 작성자 이름, 비밀번호, 내용 입력 필드 사용
        - 댓글 수정시 모달창으로 표시
        - 댓글 삭제 시 비밀번호 입력 모달창 표시
        - 댓글 생성, 수정, 삭제 완료, 실패 알림

# STEP5 스프링 배치로 순위 저장하기
- RANK 테이블에 랭킹을 저장, 항목별 랭킹 구분은 flag를 이용해 구분 조회(V), 좋아요(L), 싫어요(U), 댓글(C)
- 스프링 배치 사용
- reader는 게시물 데이터 조회
- processor는 조회수, 좋아요, 싫어요, 댓글수를 활용해해 랭킹 점수 계산 10등까지 목록화
- writer는 기존 랭킹 목록 삭제 후 post의 idx값으로 랭킹 목록 저장
- 매 정각 배치 작업 실행
- 응답은 각 행에 있는 3개의 postidx 값을 조회해 idx, 제목, 조회수나 좋아요수, 싫어요수, 댓글수
- 조회수(1등~10등), 좋아요수(1등~10등), 싫어요수(1등~10등), 댓글수(1등~10등) 반환 
