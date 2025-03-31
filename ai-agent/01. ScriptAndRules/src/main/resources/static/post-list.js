$(document).ready(function() {
    // URL 파라미터에서 알림 메시지 확인
    checkForNotifications();
    
    // 초기 데이터 로드
    loadPostList();
    
    // 모든 랭킹 한번에 로드
    loadAllRankings();

    // 검색 버튼 클릭 이벤트
    $('#searchBtn').on('click', function() {
        loadPostList(1); // 검색 시 첫 페이지로 이동
    });

    // 정렬 변경 이벤트
    $('#sortType').on('change', function() {
        loadPostList(1);
    });

    // 카테고리 필터 변경 이벤트
    $('#categoryFilter').on('change', function() {
        loadPostList(1);
    });

    // 검색어 엔터 이벤트
    $('#searchKeyword').on('keypress', function(e) {
        if (e.which === 13) {
            loadPostList(1);
            e.preventDefault();
        }
    });

    // 글쓰기 버튼 클릭 이벤트
    $('#writePostBtn').on('click', function() {
        location.href = '/post-edit';
    });
});

// URL 파라미터에서 알림 메시지 확인 및 표시
function checkForNotifications() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    const type = urlParams.get('type') || 'success';
    
    if (message) {
        let messageText = '';
        
        // 메시지 코드에 따른 텍스트 설정
        switch(message) {
            case 'post_created':
                messageText = '게시글이 성공적으로 등록되었습니다.';
                break;
            case 'post_deleted':
                messageText = '게시글이 성공적으로 삭제되었습니다.';
                break;
            case 'post_updated':
                messageText = '게시글이 성공적으로 수정되었습니다.';
                break;
            default:
                messageText = '작업이 성공적으로 완료되었습니다.';
        }
        
        // 알림 표시
        showAlert(type, messageText);
        
        // 브라우저 히스토리에서 파라미터 제거 (알림이 새로고침 시 다시 표시되지 않도록)
        const url = new URL(window.location);
        url.searchParams.delete('message');
        url.searchParams.delete('type');
        window.history.replaceState({}, '', url);
    }
}

// 게시물 목록 로드 함수
function loadPostList(page) {
    page = page || 1;
    
    const searchType = $('#searchType').val();
    const searchKeyword = $('#searchKeyword').val();
    const sortType = $('#sortType').val();
    const categoryFilter = $('#categoryFilter');
    const categoryValue = categoryFilter.val();
    
    // 선택된 카테고리 이름 가져오기 (카테고리를 선택한 경우)
    let categoryName = null;
    if (categoryValue && categoryValue !== '0') {
        categoryName = categoryFilter.find('option:selected').text();
    }
    
    // sortBy와 sortDirection 값 설정
    let sortBy, sortDirection;
    switch(sortType) {
        case 'latest':
            sortBy = 'createdAt';
            sortDirection = 'DESC';
            break;
        case 'oldest':
            sortBy = 'createdAt';
            sortDirection = 'ASC';
            break;
        case 'viewCount':
            sortBy = 'view_count';
            sortDirection = 'DESC';
            break;
        case 'likeCount':
            sortBy = 'like_count';
            sortDirection = 'DESC';
            break;
        case 'unlikeCount':
            sortBy = 'unlike_count';
            sortDirection = 'DESC';
            break;
        case 'commentCount':
            sortBy = 'comment_count';
            sortDirection = 'DESC';
            break;
        default:
            sortBy = 'createdAt';
            sortDirection = 'DESC';
    }
    
    $.ajax({
        url: '/post-list',
        type: 'GET',
        data: {
            page: page,
            size: 10, // 페이지 크기 명시적으로 설정
            searchType: searchType,
            keyword: searchKeyword,
            sortBy: sortBy,
            sortDirection: sortDirection,
            codeName: categoryName
        },
        success: function(response) {
            if (response.isSuccess) {
                // 콘솔에 응답 구조 출력하여 확인
                console.log('서버 응답:', response);
                
                // 서버 응답 구조 처리
                if (response.data) {
                    // 게시글 데이터
                    const posts = response.data.data || [];
                    renderPostList(posts);
                    
                    // 페이지네이션 데이터
                    const paginationData = {
                        totalPages: response.data.totalPages || 1,
                        currentPage: response.data.currentPage || 1,
                        totalElements: response.data.totalElements || 0,
                        pageSize: response.data.pageSize || 10
                    };
                    
                    console.log('페이지네이션 데이터:', paginationData);
                    renderPagination(paginationData);
                } else {
                    // 응답 데이터가 없는 경우
                    renderPostList([]);
                    renderPagination({ totalPages: 1, currentPage: 1 });
                    showAlert('error', '게시물 데이터를 불러오는 데 실패했습니다.');
                }
            } else {
                showAlert('error', '게시물 목록을 불러오는 데 실패했습니다.');
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
        }
    });
}

// 게시물 목록 렌더링 함수
function renderPostList(posts) {
    const $tbody = $('#postListBody');
    $tbody.empty();
    
    // posts가 undefined 또는 null인 경우 처리
    if (!posts || posts.length === 0) {
        $tbody.append('<tr><td colspan="9" class="text-center">게시물이 없습니다.</td></tr>');
        return;
    }
    
    posts.forEach(function(post, index) {
        // 카테고리 이름 가져오기
        let categoryName = post.codeName || '-';
        
        const tr = `
            <tr class="clickable-row" onclick="location.href='/post-detail/${post.idx}'">
                <td>${post.idx}</td>
                <td>${categoryName}</td>
                <td>${post.memberName || post.author || '-'}</td>
                <td>${post.title}</td>
                <td>${post.viewCount || post.view_count || 0}</td>
                <td>${post.likeCount || 0}</td>
                <td>${post.unlikeCount || 0}</td>
                <td>${post.commentCount || 0}</td>
                <td>${formatDate(post.regDt || post.createdAt || post.created_at)}</td>
            </tr>
        `;
        $tbody.append(tr);
    });
}

// 페이지네이션 렌더링 함수
function renderPagination(pagination) {
    const $pagination = $('#pagination');
    $pagination.empty();
    
    // 콘솔에 페이지네이션 정보 출력
    console.log('렌더링할 페이지네이션 정보:', pagination);
    
    const totalPages = pagination.totalPages || 1;
    const currentPage = pagination.currentPage || 1;
    
    if (totalPages <= 1) {
        return;
    }
    
    // 페이지네이션 컨테이너를 justify-content-center로 변경하여 가운데 정렬
    let html = '<div class="d-flex justify-content-center align-items-center">';
    
    // 페이지네이션 바와 입력 필드를 포함할 ul 요소
    html += '<ul class="pagination mb-0">';
    
    // 처음 페이지로 이동 버튼
    html += `
        <li class="page-item ${currentPage <= 1 ? 'disabled' : ''}">
            <a class="page-link" href="javascript:void(0);" onclick="${currentPage > 1 ? 'loadPostList(1)' : ''}" aria-label="First">
                <span aria-hidden="true">&laquo;&laquo;</span>
            </a>
        </li>
    `;
    
    // 10페이지 이전으로 이동 버튼
    const prevGroupPage = Math.max(1, currentPage - 10);
    html += `
        <li class="page-item ${currentPage <= 10 ? 'disabled' : ''}">
            <a class="page-link" href="javascript:void(0);" onclick="${currentPage > 10 ? 'loadPostList(' + prevGroupPage + ')' : ''}" aria-label="Previous Group">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    `;
    
    // 페이지 번호 (최대 10개)
    const pageGroup = Math.floor((currentPage - 1) / 10);
    const startPage = pageGroup * 10 + 1;
    const endPage = Math.min(totalPages, startPage + 9);
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="javascript:void(0);" onclick="loadPostList(${i})">${i}</a>
            </li>
        `;
    }
    
    // 10페이지 다음으로 이동 버튼
    const nextGroupPage = Math.min(totalPages, startPage + 10);
    html += `
        <li class="page-item ${nextGroupPage > totalPages ? 'disabled' : ''}">
            <a class="page-link" href="javascript:void(0);" onclick="${nextGroupPage <= totalPages ? 'loadPostList(' + nextGroupPage + ')' : ''}" aria-label="Next Group">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    `;
    
    // 마지막 페이지로 이동 버튼
    html += `
        <li class="page-item ${currentPage >= totalPages ? 'disabled' : ''}">
            <a class="page-link" href="javascript:void(0);" onclick="${currentPage < totalPages ? 'loadPostList(' + totalPages + ')' : ''}" aria-label="Last">
                <span aria-hidden="true">&raquo;&raquo;</span>
            </a>
        </li>
    `;
    
    // 페이지 직접 이동 필드를 마지막 페이지 버튼 바로 옆에 추가
    html += `
        <li class="page-item">
            <div class="d-flex align-items-center">
                <input type="number" id="directPageInput" class="form-control form-control-sm" style="width: 60px; height: 38px; padding: 0.375rem 0.75rem;" min="1" max="${totalPages}" value="${currentPage}">
                <button type="button" class="btn btn-sm btn-primary ml-1" style="height: 38px; padding: 0.375rem 0.75rem;" onclick="goToDirectPage(${totalPages})">이동</button>
            </div>
        </li>
    `;
    
    html += '</ul>';
    
    // 컨테이너 닫기
    html += '</div>';
    
    $pagination.html(html);
    
    // 직접 입력 필드에서 엔터 키 이벤트 처리
    $('#directPageInput').on('keypress', function(e) {
        if (e.which === 13) {
            goToDirectPage(totalPages);
            e.preventDefault();
        }
    });
}

// 직접 페이지 입력 처리 함수 추가
function goToDirectPage(totalPages) {
    const pageNumber = parseInt($('#directPageInput').val());
    
    if (isNaN(pageNumber) || pageNumber < 1) {
        alert('유효한 페이지 번호를 입력해주세요.');
        return;
    }
    
    // 최대 페이지 수를 초과하는 경우 마지막 페이지로 이동
    const targetPage = Math.min(pageNumber, totalPages);
    loadPostList(targetPage);
}

// 모든 랭킹 데이터를 한 번에 로드하는 함수
function loadAllRankings() {
    $.ajax({
        url: '/rank',
        type: 'GET',
        success: function(response) {
            console.log('랭킹 응답:', response);
            if (response.isSuccess) {
                // 응답 데이터 구조에 따라 적절히 처리
                if (response.data) {
                    // 배치 처리된 랭킹 데이터 구조 (viewRanks, likeRanks, unlikeRanks, commentRanks)
                    if (response.data.viewRanks && response.data.viewRanks.length > 0) {
                        renderRankings(response.data.viewRanks, 'view');
                    } else {
                        $('#viewRankList').html('<p class="text-center">조회수 랭킹 정보가 없습니다.</p>');
                    }
                    
                    if (response.data.likeRanks && response.data.likeRanks.length > 0) {
                        renderRankings(response.data.likeRanks, 'like');
                    } else {
                        $('#likeRankList').html('<p class="text-center">좋아요 랭킹 정보가 없습니다.</p>');
                    }
                    
                    if (response.data.unlikeRanks && response.data.unlikeRanks.length > 0) {
                        renderRankings(response.data.unlikeRanks, 'unlike');
                    } else {
                        $('#unlikeRankList').html('<p class="text-center">싫어요 랭킹 정보가 없습니다.</p>');
                    }
                    
                    if (response.data.commentRanks && response.data.commentRanks.length > 0) {
                        renderRankings(response.data.commentRanks, 'comment');
                    } else {
                        $('#commentRankList').html('<p class="text-center">댓글 수 랭킹 정보가 없습니다.</p>');
                    }
                } else {
                    showAlert('error', '랭킹 정보를 불러오는 데 실패했습니다.');
                    $('#viewRankList, #likeRankList, #unlikeRankList, #commentRankList').html('<p class="text-center">랭킹 정보를 불러올 수 없습니다.</p>');
                }
            } else {
                showAlert('error', '랭킹 정보를 불러오는 데 실패했습니다.');
                $('#viewRankList, #likeRankList, #unlikeRankList, #commentRankList').html('<p class="text-center">랭킹 정보를 불러올 수 없습니다.</p>');
            }
        },
        error: function(xhr) {
            showAlert('error', '랭킹 정보를 불러오는 중 서버 오류가 발생했습니다.');
            $('#viewRankList, #likeRankList, #unlikeRankList, #commentRankList').html('<p class="text-center">서버 오류가 발생했습니다.</p>');
            console.error(xhr);
        }
    });
}

// 랭킹 타입에 따른 텍스트 반환 함수
function getRankTypeText(type) {
    switch(type) {
        case 'view': return '조회수';
        case 'like': return '좋아요';
        case 'unlike': return '싫어요';
        case 'comment': return '댓글 수';
        default: return '랭킹';
    }
}

// 랭킹 렌더링 함수 - TOP 5만 표시하도록 수정
function renderRankings(rankings, type) {
    const $container = $(`#${type}RankList`);
    $container.empty();
    
    if (!rankings || rankings.length === 0) {
        $container.append('<p class="text-center">랭킹 정보가 없습니다.</p>');
        return;
    }
    
    // 최대 5개만 표시
    const displayRankings = rankings.slice(0, 5);
    
    let typeText = getRankTypeText(type);
    let countProperty;
    
    // 타입에 따라 적절한 카운트 속성 이름 결정
    switch(type) {
        case 'view': countProperty = 'viewCount'; break;
        case 'like': countProperty = 'likeCount'; break;
        case 'unlike': countProperty = 'unlikeCount'; break;
        case 'comment': countProperty = 'commentCount'; break;
        default: countProperty = 'count';
    }
    
    displayRankings.forEach(function(rank, index) {
        const rankHtml = `
            <div class="rank-item clickable-rank" data-post-idx="${rank.postIdx}">
                <span class="rank-number">${rank.ranking}</span>
                <span class="rank-title">${rank.title}</span>
                <span class="rank-count">${rank[countProperty]}</span>
            </div>
        `;
        
        $container.append(rankHtml);
    });
    
    // 클릭 이벤트 추가
    $container.find('.clickable-rank').on('click', function() {
        const postIdx = $(this).data('post-idx');
        location.href = `/post-detail/${postIdx}`;
    });
}

// 날짜 포맷 함수
function formatDate(dateString) {
    if (!dateString) return '-';
    try {
        const date = new Date(dateString);
        // 유효한 날짜인지 확인 (Invalid Date 체크)
        if (isNaN(date.getTime())) return '-';
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    } catch (e) {
        console.error('날짜 포맷 오류:', e);
        return '-';
    }
}

// 알림 표시 함수
function showAlert(type, message) {
    const $notificationContainer = $('#notificationContainer');
    const $notificationContent = $('#notificationContent');
    const $notificationMessage = $('#notificationMessage');
    
    // 메시지 설정
    $notificationMessage.text(message);
    
    // 알림 종류에 따른 스타일 설정
    if (type === 'success') {
        $notificationContent.removeClass('alert-danger').addClass('alert-success');
    } else {
        $notificationContent.removeClass('alert-success').addClass('alert-danger');
    }
    
    // 알림 표시
    $notificationContainer.removeClass('d-none');
    
    // 5초 후 자동으로 알림 숨김
    setTimeout(function() {
        hideNotification();
    }, 5000);
}

// 알림 숨김 함수
function hideNotification() {
    $('#notificationContainer').addClass('d-none');
} 