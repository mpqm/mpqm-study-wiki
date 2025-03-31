CREATE DATABASE auto;
use auto;

-- 코드 테이블 생성
CREATE TABLE tb_code (
    idx BIGINT AUTO_INCREMENT PRIMARY KEY,
    group_name VARCHAR(100) NOT NULL ,
    code_name VARCHAR(100) NOT NULL UNIQUE
);

-- 게시물 테이블 생성
CREATE TABLE tb_post (
    idx BIGINT AUTO_INCREMENT PRIMARY KEY,
    code_name VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    password VARCHAR(500) NOT NULL,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    view_count BIGINT DEFAULT 0,
    like_count BIGINT DEFAULT 0,
    unlike_count BIGINT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (code_name) REFERENCES tb_code(code_name)
);

-- 게시물 이미지 테이블 생성
CREATE TABLE tb_post_image (
    idx BIGINT AUTO_INCREMENT PRIMARY KEY,
    post_idx BIGINT NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_idx) REFERENCES tb_post(idx) ON DELETE CASCADE
);

-- 댓글 테이블 생성
CREATE TABLE tb_comment (
    idx BIGINT AUTO_INCREMENT PRIMARY KEY,
    post_idx BIGINT NOT NULL,
    author VARCHAR(100) NOT NULL,
    password VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (post_idx) REFERENCES tb_post(idx) ON DELETE CASCADE
);

-- 랭킹 테이블 생성
CREATE TABLE tb_rank (
    idx BIGINT AUTO_INCREMENT PRIMARY KEY,
    ranking INT NOT NULL,
    flag VARCHAR(1) NOT NULL, -- 조회(V), 좋아요(L), 싫어요(U)
    title VARCHAR(200) NOT NULL,
    post_idx BIGINT NOT NULL,
    view_count INT DEFAULT 0,
    like_count INT DEFAULT 0,
    unlike_count INT DEFAULT 0,
    comment_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_idx) REFERENCES tb_post(idx) ON DELETE CASCADE
);

-- 기본 카테고리 데이터 입력
INSERT INTO tb_code (group_name, code_name) VALUES
('POST_CATEGORY', '공지사항'),
('POST_CATEGORY', '질문과 답변'),
('POST_CATEGORY', '자유게시판'),
('POST_CATEGORY', '갤러리');