package com.fornet.auto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// 게시물 조회 요청 데이터 객체
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostQueryReqDto {

    // 제목
    private String title;

    // 작성자
    private String author;

    // 내용
    private String content;

    // 코드 이름 (카테고리)
    private String codeName;

    // 시작 날짜
    private LocalDateTime startDate;

    // 종료 날짜
    private LocalDateTime endDate;

    // 페이지 번호
    private int page;

    // 페이지 크기
    private int size;

    // 정렬 기준
    private String sortBy;

    // 정렬 방향
    private String sortDirection;

    // 검색 키워드
    private String keyword;

    // 검색 타입
    private String searchType;

    // 오프셋 값을 계산해서 반환하는 메서드
    public int getOffset() {
        return (page - 1) * size;
    }

}