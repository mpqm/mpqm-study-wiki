package com.fornet.auto.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.fornet.auto.dao.RankDao;
import com.fornet.auto.dto.RankDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

// 랭킹 서비스
@Slf4j
@Service
@RequiredArgsConstructor
public class RankService {
    
    private final RankDao rankDao;
    
    // 모든 랭킹 데이터를 조회하여 타입별로 그룹화하여 반환
    public Map<String, List<RankDto>> getRanks() {
        // 모든 랭킹 데이터 조회
        List<RankDto> allRanks = rankDao.getRanks();
        
        // 타입별로 그룹화 (V: 조회수, L: 좋아요수, U: 싫어요수, C: 댓글수)
        Map<String, List<RankDto>> groupedRanks = new HashMap<>();
        
        // 조회수 랭킹
        List<RankDto> viewRanks = allRanks.stream()
                .filter(rank -> "V".equals(rank.getFlag()))
                .collect(Collectors.toList());
        groupedRanks.put("viewRanks", viewRanks);
        
        // 좋아요 랭킹
        List<RankDto> likeRanks = allRanks.stream()
                .filter(rank -> "L".equals(rank.getFlag()))
                .collect(Collectors.toList());
        groupedRanks.put("likeRanks", likeRanks);
        
        // 싫어요 랭킹
        List<RankDto> unlikeRanks = allRanks.stream()
                .filter(rank -> "U".equals(rank.getFlag()))
                .collect(Collectors.toList());
        groupedRanks.put("unlikeRanks", unlikeRanks);
        
        // 댓글 수 랭킹
        List<RankDto> commentRanks = allRanks.stream()
                .filter(rank -> "C".equals(rank.getFlag()))
                .collect(Collectors.toList());
        groupedRanks.put("commentRanks", commentRanks);
        
        return groupedRanks;
    }
} 