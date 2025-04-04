package com.fornet.auto.dao;

import com.fornet.auto.dto.CodeDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

// 코드 데이터 액세스 객체
@Mapper
public interface CodeDao {

    // 모든 코드 조회
    List<CodeDto> getCodes();

} 