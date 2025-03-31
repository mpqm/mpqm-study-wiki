package com.fornet.auto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// 댓글 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {

    // 댓글 인덱스
    private Long idx;

    // 게시물 인덱스
    private Long postIdx;

    // 작성자
    private String author;

    // 비밀번호
    private String password;

    // 내용
    private String content;

    // 생성 일시
    private LocalDateTime createdAt;

    // 수정 일시
    private LocalDateTime updatedAt;

    // 게시글 제목 (집계용)
    private String postTitle;

    // 댓글 수 (집계용)
    private Integer commentCount;
} 