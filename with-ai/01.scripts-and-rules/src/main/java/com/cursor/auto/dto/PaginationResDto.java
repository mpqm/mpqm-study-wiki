package com.fornet.auto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

// 페이지네이션 응답 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaginationResDto<T> {

    // 전체 페이지 수
    private int totalPages;

    // 현재 페이지 번호
    private int currentPage;

    // 페이지 크기
    private int pageSize;

    // 전체 데이터 수
    private Long totalElements;

    // 페이지 데이터 목록
    private List<T> data;
    
} 