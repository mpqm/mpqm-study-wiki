package com.fornet.auto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

// 게시물 상세 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostDetailDto {

    // 게시물 정보
    private PostDto post;

    // 댓글 목록
    private List<CommentDto> comments;

    // 게시물 이미지 목록
    private List<PostImageDto> postImages;
} 