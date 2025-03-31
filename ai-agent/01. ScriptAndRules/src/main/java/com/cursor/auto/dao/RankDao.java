package com.fornet.auto.dao;

import com.fornet.auto.dto.RankDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 랭킹 데이터 액세스 객체
 */
@Mapper
public interface RankDao {

    // 랭킹 데이터 삽입
    Long insertRank(RankDto rankDto);

    // 모든 랭킹 데이터 삭제
    int deleteRanks();

    // 모든 랭킹 데이터 조회
    List<RankDto> getRanks();

}