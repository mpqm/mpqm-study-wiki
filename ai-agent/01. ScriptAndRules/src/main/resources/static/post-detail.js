$(document).ready(function() {
    // 현재 게시글 인덱스 가져오기
    const postIdx = getPostIdxFromURL();
    let currentPost = null;
    
    // 게시글 정보 로드
    loadPostDetail(postIdx);
    
    // URL에서 메시지 파라미터 확인
    checkUrlParameters();
    
    // 목록 버튼 클릭 이벤트
    $('#listBtn').on('click', function() {
        location.href = '/';
    });
    
    // 수정 버튼 클릭 이벤트
    $('#editBtn').on('click', function() {
        // 비밀번호 확인 없이 바로 수정 페이지로 이동
        const postIdx = getPostIdxFromURL();
        location.href = `/post-edit/${postIdx}`;
    });
    
    // 삭제 버튼 클릭 이벤트
    $('#deleteBtn').on('click', function() {
        $('#deleteModal').modal('show');
    });
    
    // 게시글 삭제 확인 이벤트
    $('#confirmDeleteBtn').on('click', function() {
        const postIdx = getPostIdxFromURL();
        const password = $('#deletePassword').val().trim();
        
        if (!password) {
            showAlert('error', '비밀번호를 입력해주세요.');
            return;
        }
        
        // 게시글 삭제 API 호출
        $.ajax({
            url: `/post/${postIdx}/${password}`,
            type: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                if (response.isSuccess) {
                    // 모달 닫기
                    $('#deleteModal').modal('hide');
                    
                    showAlert('success', '게시글이 삭제되었습니다.');
                    
                    // 잠시 후 메인 페이지로 리다이렉션

                    location.href = '/?message=post_deleted&type=success';
                } else {
                    showAlert('error', '게시글 삭제에 실패했습니다. 비밀번호를 확인해주세요.');
                }
            },
            error: function(xhr) {
                showAlert('error', '서버 오류가 발생했습니다.');
                console.error(xhr);
            }
        });
    });
    
    // 좋아요 버튼 클릭 이벤트
    $('#likeBtn').on('click', function() {
        const postIdx = getPostIdxFromURL();
        addLike(postIdx);
    });
    
    // 싫어요 버튼 클릭 이벤트
    $('#unlikeBtn').on('click', function() {
        const postIdx = getPostIdxFromURL();
        addUnlike(postIdx);
    });
    
    // 댓글 목록 토글 버튼 클릭 이벤트
    $('#toggleCommentsBtn').on('click', function() {
        const $commentsSection = $('#commentsSection');
        const $button = $(this);
        
        if ($commentsSection.is(':visible')) {
            $commentsSection.hide();
            $button.text('댓글 목록 보기').removeClass('btn-outline-secondary').addClass('btn-outline-primary');
        } else {
            $commentsSection.show();
            $button.text('댓글 목록 접기').removeClass('btn-outline-primary').addClass('btn-outline-secondary');
            
            // 첫 페이지 댓글 로드
            loadComments(postIdx, 1);
        }
    });
    
    // 댓글 작성 폼 제출 이벤트
    $('#commentForm').on('submit', function(e) {
        e.preventDefault();
        const author = $('#commentAuthor').val().trim();
        const password = $('#commentPassword').val();
        const content = $('#commentContent').val().trim();
        
        if (!author) {
            showAlert('error', '작성자 이름을 입력해주세요.');
            return;
        }
        
        if (!password) {
            showAlert('error', '비밀번호를 입력해주세요.');
            return;
        }
        
        if (!content) {
            showAlert('error', '댓글 내용을 입력해주세요.');
            return;
        }
        
        addComment(postIdx, author, password, content);
    });
    
    // 댓글 삭제 확인 버튼 클릭 이벤트
    $('#confirmDeleteCommentBtn').on('click', function() {
        const commentIdx = $('#deleteCommentIdx').val();
        const password = $('#deleteCommentPassword').val().trim();
        
        if (!password) {
            showAlert('error', '비밀번호를 입력해주세요.');
            return;
        }
        
        deleteComment(commentIdx, password);
    });
});

// URL에서 게시글 인덱스 추출
function getPostIdxFromURL() {
    const pathSegments = window.location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
}

// 전역 변수 - 댓글 페이지네이션
let currentCommentPage = 1;
const commentPageSize = 5; // 페이지당 댓글 수
let totalComments = 0;
let allComments = [];

// 게시글 상세 정보 로드
function loadPostDetail(postIdx) {
    $.ajax({
        url: `/post/${postIdx}`,
        type: 'GET',
        success: function(response) {
            if (response.isSuccess) {
                renderPostDetail(response.data);
                checkPostOwnership();
            } else {
                showAlert('error', '게시글을 불러오는 데 실패했습니다.');
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
        }
    });
}

// 게시글 상세 정보 렌더링
function renderPostDetail(postDetail) {
    if (!postDetail) {
        showAlert('error', '게시글 데이터를 불러오는 데 실패했습니다.');
        return;
    }
    
    // post 객체가 기존 구조인 경우 또는 PostDetailDto.post인 경우 모두 처리
    const post = postDetail.post || postDetail;
    
    if (!post) {
        showAlert('error', '게시글 정보가 없습니다.');
        return;
    }
    
    // 게시글 기본 정보
    $('#postTitle').text(post.title || '');
    $('#postAuthor').text(post.author || '');
    $('#postCategory').text(post.codeName || '-');
    $('#postDate').text(formatDate(post.createdAt || new Date()));
    $('#postContent').html(formatContent(post.content));
    $('#viewCount').text(post.viewCount || 0);
    $('#likeCount').text(post.likeCount || 0);
    $('#unlikeCount').text(post.unlikeCount || 0);
    
    // 좋아요/싫어요 상태 설정
    if (post.memberLiked) {
        $('#likeBtn').addClass('active');
    }
    
    if (post.memberUnliked) {
        $('#unlikeBtn').addClass('active');
    }
    
    // 이미지 렌더링
    const $imageContainer = $('#postImages');
    $imageContainer.empty();
    
    if (postDetail.postImages && postDetail.postImages.length > 0) {
        postDetail.postImages.forEach(function(image) {
            if (!image) return;
            
            // 이미지 파일 경로 처리
            const imagePath = image.filePath || '';
            if (!imagePath) return;
            
            const $img = $('<img>')
                .addClass('post-image')
                .attr('src', imagePath)
                .attr('alt', '첨부 이미지')
                .attr('title', '첨부 이미지');
            
            $img.on('click', function() {
                window.open($(this).attr('src'), '_blank');
            });
            
            $imageContainer.append($img);
        });
        $imageContainer.show();
    } else {
        $imageContainer.hide();
    }
    
    // 댓글 저장 및 렌더링
    if (postDetail.comments) {
        // 모든 댓글 저장
        allComments = postDetail.comments;
        totalComments = allComments.length;
        
        // 첫 페이지 댓글 렌더링
        currentCommentPage = 1;
        renderCommentPage(currentCommentPage);
    } else {
        $('#commentList').html('<p class="text-muted">등록된 댓글이 없습니다.</p>');
        $('#commentPagination').empty();
    }
    
    // 현재 게시글 저장
    currentPost = post;
}

// 댓글 페이지 렌더링
function renderCommentPage(page) {
    // 페이지 번호가 유효한지 확인
    if (page < 1) page = 1;
    
    const totalPages = Math.ceil(totalComments / commentPageSize);
    if (page > totalPages && totalPages > 0) page = totalPages;
    
    // 현재 페이지 업데이트
    currentCommentPage = page;
    
    // 페이지에 해당하는 댓글 추출
    const startIndex = (page - 1) * commentPageSize;
    const endIndex = Math.min(startIndex + commentPageSize, totalComments);
    const commentsForPage = allComments.slice(startIndex, endIndex);
    
    // 댓글 렌더링
    renderComments(commentsForPage);
    
    // 페이지네이션 렌더링
    renderCommentPagination(totalComments, page, commentPageSize);
}

// 댓글 렌더링 함수
function renderComments(comments) {
    const $commentList = $('#commentList');
    $commentList.empty();
    
    // 댓글이 없는 경우
    if (!comments || comments.length === 0) {
        $commentList.html('<p class="text-muted">등록된 댓글이 없습니다.</p>');
        return;
    }
    
    // 댓글 목록 렌더링
    comments.forEach(function(comment) {
        const $commentItem = $('<div>')
            .addClass('comment-item')
            .attr('id', 'comment-' + comment.idx);
        
        // 상단 영역: 작성자와 액션 버튼
        const $commentTop = $('<div>').addClass('comment-top d-flex justify-content-between align-items-center mb-2');
        
        // 작성자 영역
        const $authorArea = $('<div>').addClass('comment-author-area');
        $authorArea.append(
            $('<span>').addClass('comment-author font-weight-bold').text(comment.author || '익명')
        );
        
        // 버튼 영역
        const $commentActions = $('<div>').addClass('comment-actions');
        
        // 댓글 수정 버튼
        const $editBtn = $('<button>')
            .addClass('btn btn-sm btn-outline-primary edit-comment-btn mr-2')
            .text('수정')
            .on('click', function() {
                $commentContent.hide();
                $commentEditForm.removeClass('d-none');
            });
        
        // 댓글 삭제 버튼
        const $deleteBtn = $('<button>')
            .addClass('btn btn-sm btn-outline-danger delete-comment-btn')
            .text('삭제')
            .on('click', function() {
                $('#deleteCommentIdx').val(comment.idx);
                $('#deleteCommentModal').modal('show');
            });
        
        $commentActions.append($editBtn, $deleteBtn);
        
        // 상단 영역에 작성자와 버튼 추가
        $commentTop.append($authorArea, $commentActions);
        
        // 하단 영역: 내용과 생성일
        const $commentBottom = $('<div>').addClass('comment-bottom');
        
        // 내용 영역
        const $commentContent = $('<div>')
            .addClass('comment-content mb-1')
            .html(formatContent(comment.content || ''));
        
        // 날짜 영역
        const $dateArea = $('<div>').addClass('comment-date-area text-right');
        $dateArea.append(
            $('<small>').addClass('comment-date text-muted').text(formatDate(comment.createdAt || new Date()))
        );
        
        // 하단 영역에 내용과 날짜 추가
        $commentBottom.append($commentContent, $dateArea);
        
        // 댓글 수정 폼 추가
        const $commentEditForm = $('<div>')
            .addClass('comment-edit-form d-none')
            .append(
                $('<textarea>')
                    .addClass('form-control mb-2 edit-comment-content')
                    .val(comment.content || ''),
                $('<div>')
                    .addClass('d-flex justify-content-between')
                    .append(
                        $('<input>')
                            .attr('type', 'password')
                            .addClass('form-control mr-2 edit-comment-password')
                            .attr('placeholder', '비밀번호')
                            .css('width', '150px'),
                        $('<div>')
                            .append(
                                $('<button>')
                                    .addClass('btn btn-outline-primary btn-sm comment-update-btn')
                                    .text('저장')
                                    .on('click', function() {
                                        const content = $(this).closest('.comment-edit-form').find('.edit-comment-content').val().trim();
                                        const password = $(this).closest('.comment-edit-form').find('.edit-comment-password').val().trim();
                                        
                                        if (!content) {
                                            showAlert('error', '댓글 내용을 입력해주세요.');
                                            return;
                                        }
                                        
                                        if (!password) {
                                            showAlert('error', '비밀번호를 입력해주세요.');
                                            return;
                                        }   
                                        
                                        updateComment(comment.idx, content, password);
                                    }),
                                $('<button>')
                                    .addClass('btn btn-outline-secondary btn-sm comment-cancel-btn ml-2')
                                    .text('취소')
                                    .on('click', function() {
                                        $commentContent.show();
                                        $commentEditForm.addClass('d-none');
                                    })
                            )
                    )
            );
        
        // 댓글 아이템에 상단, 하단 영역과 수정 폼 추가
        $commentItem.append($commentTop, $commentBottom, $commentEditForm);
        $commentList.append($commentItem);
    });
}

// 댓글 페이지네이션 렌더링
function renderCommentPagination(pagination) {
    const $pagination = $('#commentPagination');
    $pagination.empty();
    
    const totalPages = pagination.totalPages || 1;
    const currentPage = pagination.currentPage || 1;
    
    if (totalPages <= 1) {
        return; // 페이지가 1개 이하면 페이지네이션 표시 안함
    }
    
    let html = '<ul class="pagination justify-content-center">';
    
    // 이전 버튼
    html += `
        <li class="page-item ${currentPage <= 1 ? 'disabled' : ''}">
            <a class="page-link" href="javascript:void(0);" onclick="${currentPage > 1 ? 'loadComments(' + getPostIdxFromURL() + ', ' + (currentPage - 1) + ')' : ''}" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    `;
    
    // 페이지 번호
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="javascript:void(0);" onclick="loadComments(${getPostIdxFromURL()}, ${i})">${i}</a>
            </li>
        `;
    }
    
    // 다음 버튼
    html += `
        <li class="page-item ${currentPage >= totalPages ? 'disabled' : ''}">
            <a class="page-link" href="javascript:void(0);" onclick="${currentPage < totalPages ? 'loadComments(' + getPostIdxFromURL() + ', ' + (currentPage + 1) + ')' : ''}" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    `;
    
    html += '</ul>';
    $pagination.html(html);
}

// 댓글 목록 로드 함수
function loadComments(postIdx, page) {
    $.ajax({
        url: '/comment-list',
        type: 'GET',
        data: {
            postIdx: postIdx,
            page: page || 1,
            size: 5, // 페이지당 댓글 수
            sortBy: 'createdAt',
            sortDirection: 'DESC'
        },
        success: function(response) {
            if (response.isSuccess) {
                console.log('댓글 응답:', response);
                
                // 댓글 데이터
                const comments = response.data.data || [];
                renderComments(comments);
                
                // 페이지네이션 데이터
                const paginationData = {
                    totalPages: response.data.totalPages || 1,
                    currentPage: response.data.currentPage || 1,
                    totalElements: response.data.totalElements || 0,
                    pageSize: response.data.pageSize || 5
                };
                
                renderCommentPagination(paginationData);
            } else {
                showAlert('error', '댓글을 불러오는 데 실패했습니다.');
                $('#commentList').html('<p class="text-muted">댓글 정보를 불러올 수 없습니다.</p>');
                $('#commentPagination').empty();
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
            $('#commentList').html('<p class="text-muted">서버 오류로 댓글을 불러올 수 없습니다.</p>');
            $('#commentPagination').empty();
        }
    });
}

// 댓글 추가
function addComment(postIdx, author, password, content) {
    $.ajax({
        url: '/comment',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            postIdx: postIdx,
            author: author,
            password: password,
            content: content
        }),
        success: function(response) {
            if (response.isSuccess) {
                // 댓글 입력창 초기화
                $('#commentAuthor').val('');
                $('#commentPassword').val('');
                $('#commentContent').val('');
                
                // 댓글 폼 접기
                $('#commentFormCollapse').collapse('hide');
                
                // 댓글 목록 다시 로드
                loadComments(postIdx, 1);
                
                // 댓글 섹션이 닫혀있다면 열기
                if (!$('#commentsSection').is(':visible')) {
                    $('#toggleCommentsBtn').click();
                }
                
                showAlert('success', '댓글이 등록되었습니다.');
            } else {
                showAlert('error', '댓글 등록에 실패했습니다.');
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
        }
    });
}

// 댓글 삭제
function deleteComment(commentIdx, password) {
    const postIdx = getPostIdxFromURL();
    $.ajax({
        url: `/comment/${commentIdx}/${password}`,
        type: 'DELETE',
        contentType: 'application/json',
        success: function(response) {
            if (response.isSuccess) {
                // 모달 닫기
                $('#deleteCommentModal').modal('hide');
                // 비밀번호 필드 초기화
                $('#deleteCommentPassword').val('');
                
                // 댓글 목록 다시 로드
                loadComments(postIdx, 1);
                
                showAlert('success', '댓글이 삭제되었습니다.');
            } else {
                showAlert('error', '댓글 삭제에 실패했습니다. 비밀번호를 확인해주세요.');
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
        }
    });
}

// 게시글 삭제
function deletePost(postIdx) {
    $.ajax({
        url: `/post/${postIdx}`,
        type: 'DELETE',
        success: function(response) {
            if (response.result === 'SUCCESS') {
                // 모달 닫기
                $('#deleteModal').modal('hide');
                
                showAlert('success', '게시글이 삭제되었습니다.');
                
                // 버튼 상태 변경 및 내용 비활성화
                $('#editBtn, #deleteBtn').hide();
                $('#postContent').html('<p class="text-muted">삭제된 게시글입니다.</p>');
                $('#postImages').hide();
                $('#toggleCommentsBtn').hide();
                $('#commentFormCollapse').collapse('hide');
                
                // 제목 변경
                $('#postTitle').text('[삭제됨] ' + $('#postTitle').text());
            } else {
                showAlert('error', '게시글 삭제에 실패했습니다.');
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
        }
    });
}

// 좋아요 추가
function addLike(postIdx) {
    $.ajax({
        url: `/post-like/${postIdx}`,
        type: 'GET',
        success: function(response) {
            if (response.isSuccess) {
                // 좋아요 버튼 활성화
                $('#likeBtn').addClass('active');
                
                // 좋아요 수 업데이트
                $('#likeCount').text(parseInt($('#likeCount').text()) + 1);
                
                // 싫어요 상태인 경우 싫어요 취소
                if ($('#unlikeBtn').hasClass('active')) {
                    $('#unlikeBtn').removeClass('active');
                }
            } else {
                showAlert('error', '좋아요 등록에 실패했습니다.');
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
        }
    });
}

// 싫어요 추가
function addUnlike(postIdx) {
    $.ajax({
        url: `/post-unlike/${postIdx}`,
        type: 'GET',
        success: function(response) {
            if (response.isSuccess) {
                // 싫어요 버튼 활성화
                $('#unlikeBtn').addClass('active');
                
                // 싫어요 수 업데이트
                $('#unlikeCount').text(parseInt($('#unlikeCount').text()) + 1);
                
                // 좋아요 상태인 경우 좋아요 취소
                if ($('#likeBtn').hasClass('active')) {
                    $('#likeBtn').removeClass('active');
                }
            } else {
                showAlert('error', '싫어요 등록에 실패했습니다.');
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
        }
    });
}

// 게시글 소유권 확인
function checkPostOwnership() {
    // 임시 구현: 실제 구현 시에는 세션에서 현재 로그인한 회원의 인덱스를 가져와야 함
    // 현재는 모든 게시글에 대해 수정/삭제 버튼 표시
    $('#editBtn, #deleteBtn').show();
    return true;
}

// 댓글 소유권 확인
function isCommentOwner(commentMemberIdx) {
    // 클라이언트 측에서는 현재 로그인한 회원의 인덱스를 세션에서 가져와 비교해야 함
    // 여기서는 서버에서 이미 필터링된 결과를 사용한다고 가정
    // 실제 구현시에는 세션에서 현재 로그인한 회원의 인덱스를 가져와야 함
    return true; // 예시로 항상 true 반환
}

// 콘텐츠 포맷팅 (줄바꿈 처리)
function formatContent(content) {
    if (!content) {
        return '';
    }
    return content.replace(/\n/g, '<br>');
}

// 날짜 포맷팅
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// 알림 표시 함수 (인라인으로 변경)
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

// 카테고리 이름 가져오기
function getCategoryName(codeIdx) {
    if (!codeIdx) return '-';
    
    // 카테고리 매핑
    const categoryMap = {
        1: '일반',
        2: '질문',
        3: '공지',
        4: '이벤트'
    };
    
    return categoryMap[codeIdx] || '-';
}

// 디테일 이전 페이지 이동
function gotoPrevPage() {
    window.history.back();
}

// 댓글 수정
function updateComment(commentIdx, content, password) {
    const postIdx = getPostIdxFromURL();
    $.ajax({
        url: `/comment/${commentIdx}`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({
            idx: commentIdx,
            content: content,
            password: password
        }),
        success: function(response) {
            if (response.isSuccess) {
                // 댓글 목록 다시 로드
                loadComments(postIdx, 1);
                
                showAlert('success', '댓글이 수정되었습니다.');
            } else {
                showAlert('error', '댓글 수정에 실패했습니다. 비밀번호를 확인해주세요.');
            }
        },
        error: function(xhr) {
            showAlert('error', '서버 오류가 발생했습니다.');
            console.error(xhr);
        }
    });
}

// URL 파라미터 확인 함수
function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    const type = urlParams.get('type') || 'success';
    
    if (message) {
        let messageText = '';
        
        switch (message) {
            case 'post_created':
                messageText = '게시글이 등록되었습니다.';
                break;
            case 'post_updated':
                messageText = '게시글이 수정되었습니다.';
                break;
            case 'post_deleted':
                messageText = '게시글이 삭제되었습니다.';
                break;
            default:
                messageText = message.replace(/_/g, ' ');
        }
        
        showAlert(type, messageText);
        
        // URL에서 메시지 파라미터 제거
        const url = new URL(window.location);
        url.searchParams.delete('message');
        url.searchParams.delete('type');
        window.history.replaceState({}, '', url);
    }
} 