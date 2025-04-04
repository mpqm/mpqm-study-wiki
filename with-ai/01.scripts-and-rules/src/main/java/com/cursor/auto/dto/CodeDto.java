package com.fornet.auto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// 코드 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CodeDto {

    // 코드 인덱스
    private Long idx;

    // 코드 값
    private String groupName;

    // 코드 이름
    private String codeName;

} 