package com.fornet.auto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

// 랭킹 상세 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RankDetailDto {

    // 조회수 랭킹 목록
    private List<RankDto> viewRanking;
    
    // 좋아요 랭킹 목록
    private List<RankDto> likeRanking;
    
    // 싫어요 랭킹 목록
    private List<RankDto> unlikeRanking;
    
    // 댓글 수 랭킹 목록
    private List<RankDto> commentRanking;
} 