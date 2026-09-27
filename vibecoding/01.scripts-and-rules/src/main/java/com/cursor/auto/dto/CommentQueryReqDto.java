package com.fornet.auto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


// 댓글 조회 요청 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentQueryReqDto {

    // 페이지 번호
    private int page;

    // 페이지 크기
    private int size;

    // 게시물 인덱스
    private Long postIdx;

    // 정렬 기준
    private String sortBy;
    
    // 오프셋 값 계산 (집계용)
    public int getOffset() {
        return (page - 1) * size;
    }

} 