const lodash = require("lodash");

const PAGE_LIST_SIZE = 10; // 페이지 목록 크기

// 페이지네이션 객체를 생성하는 모듈
module.exports = ({ totalCount, page, perPage = 10 }) => {
    const PER_PAGE = perPage; // 페이지당 아이템 수
    const totalPage = Math.ceil(totalCount / PER_PAGE); // 총 페이지 수 계산
    let quotient = parseInt(page / PAGE_LIST_SIZE); // 현재 페이지 번호에서 몇 번째 페이지 그룹에 속하는지 계산
    if (page % PAGE_LIST_SIZE === 0) { quotient -= 1; } // 페이지가 그룹의 마지막인 경우 보정
    const startPage = quotient * PAGE_LIST_SIZE + 1; // 현재 페이지 그룹의 첫 페이지 번호
    const endPage = startPage + PAGE_LIST_SIZE - 1 < totalPage ? startPage + PAGE_LIST_SIZE - 1 : totalPage; // 현재 페이지 그룹의 마지막 페이지 번호
    const isFirstPage = page === 1; // 첫 번째 페이지 여부 확인
    const isLastPage = page === totalPage; // 마지막 페이지 여부 확인
    const hasPrev = page > 1; // 이전 페이지 여부 확인
    const hasNext = page < totalPage; // 다음 페이지 여부 확인

    // 페이지네이션 객체 생성
    const paginator = {
        pageList: lodash.range(startPage, endPage + 1), // 현재 페이지 그룹의 페이지 번호 목록
        page, // 현재 페이지 번호
        prevPage: page - 1, // 이전 페이지 번호
        nextPage: page + 1, // 다음 페이지 번호
        startPage, // 현재 페이지 그룹의 시작 페이지 번호
        lastPage: totalPage, // 총 페이지 수
        hasPrev, // 이전 페이지 여부
        hasNext, // 다음 페이지 여부
        isFirstPage, // 첫 번째 페이지 여부
        isLastPage // 마지막 페이지 여부
    };
    return paginator; // 생성한 페이지네이션 객체 반환
};