package com.fornet.auto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// 게시물 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {

    // 게시물 인덱스
    private Long idx;

    // 코드 이름 (카테고리명)
    private String codeName;

    // 작성자
    private String author;

    // 비밀번호
    private String password;

    // 제목 
    private String title;

    // 내용 
    private String content;

    // 조회수
    private Long viewCount;

    // 좋아요 수
    private Long likeCount;

    // 싫어요 수
    private Long unlikeCount;

    // 생성일시
    private LocalDateTime createdAt;

    // 수정일시
    private LocalDateTime updatedAt;

    // 댓글 수 (집계용)
    private Long commentCount;

} 