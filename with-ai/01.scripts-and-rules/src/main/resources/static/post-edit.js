$(document).ready(function() {
    // URL에서 게시글 인덱스 추출
    const postIdx = getPostIdxFromURL();
    const isEdit = postIdx !== null;
    
    // 편집 모드에 따라 페이지 타이틀 설정
    $('#pageTitle').text(isEdit ? '게시글 수정' : '게시글 작성');
    
    // 편집 모드인 경우 게시글 정보 로드
    if (isEdit) {
        loadPostDetail(postIdx);
    }
    
    // 이미지 선택 시 미리보기 처리
    $('#images').on('change', function(e) {
        handleImagePreview(e.target.files);
        
        // 파일 이름 표시
        const fileCount = e.target.files.length;
        $(this).next('.custom-file-label').text(fileCount > 1 ? `${fileCount}개의 파일 선택됨` : e.target.files[0].name);
    });
    
    // 취소 버튼 클릭 이벤트
    $('#cancelBtn').on('click', function() {
        if (isEdit) {
            location.href = `/post-detail/${postIdx}`;
        } else {
            location.href = '/';
        }
    });
    
    // 폼 제출 이벤트
    $('#postForm').on('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitPost(isEdit);
        }
    });
    
    // 비밀번호 입력 시 오류 메시지 제거
    $('#password').on('input', function() {
        removePasswordError();
    });
});

// URL에서 게시글 인덱스 추출
function getPostIdxFromURL() {
    const pathSegments = window.location.pathname.split('/');
    if (pathSegments.length >= 3 && pathSegments[1] === 'post-edit') {
        return pathSegments[2];
    }
    return null;
}

// 게시글 상세 정보 로드 (수정 모드)
function loadPostDetail(postIdx) {
    $.ajax({
        url: `/post/${postIdx}`,
        type: 'GET',
        success: function(response) {
            console.log('게시글 상세 응답:', response);
            if (response.isSuccess) {
                fillPostForm(response.data);
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

// 폼에 게시글 정보 채우기 (수정 모드)
function fillPostForm(postData) {
    // 응답 구조에 따라 post 또는 post.post 사용
    const post = postData.post || postData;
    
    $('#postIdx').val(post.idx);
    
    // 카테고리 값 설정 - 없으면 첫 번째 옵션 선택
    const categoryValue = post.codeIdx || post.categoryIdx;
    if (categoryValue) {
        $('#category').val(categoryValue);
    } else {
        // 기본값으로 첫 번째 옵션 선택
        const firstOption = $('#category option:first').val();
        if (firstOption) {
            $('#category').val(firstOption);
        }
        console.log('카테고리 값이 없어 기본값으로 설정:', $('#category').val());
    }
    
    $('#title').val(post.title);
    $('#content').val(post.content);
    $('#author').val(post.author || post.memberName);
    
    // 비밀번호는 보안 상의 이유로 서버에서 전송되지 않으므로 채우지 않음
    // 사용자에게 다시 입력하도록 안내
    $('#password').attr('placeholder', '수정을 위해 비밀번호를 다시 입력해주세요');
    
    // 수정 모드를 명확히 표시
    $('#pageTitle').text('게시글 수정');
    
    // 이미지 렌더링 (postData.postImages가 있는 경우)
    if (postData.postImages && postData.postImages.length > 0) {
        renderExistingImages(postData.postImages);
    }
}

// 기존 이미지 렌더링 (수정 모드)
function renderExistingImages(images) {
    const $container = $('#existingImages');
    $container.empty();
    
    if (images && images.length > 0) {
        images.forEach(function(image) {
            const $item = $('<div>')
                .addClass('existing-image-item')
                .attr('data-idx', image.idx);
            
            // 이미지 파일 경로 처리
            const imagePath = image.filePath || (image.storedFileName ? `/upload/${image.storedFileName}` : null);
            if (!imagePath) return;
            
            const $img = $('<img>')
                .attr('src', imagePath)
                .attr('alt', image.originalFileName || '첨부 이미지');
            
            const $removeBtn = $('<div>')
                .addClass('existing-image-remove')
                .html('&times;')
                .on('click', function() {
                    $(this).closest('.existing-image-item').remove();
                });
            
            $item.append($img, $removeBtn);
            $container.append($item);
        });
    }
}

// 이미지 미리보기 처리
function handleImagePreview(files) {
    const $container = $('#imagePreviewContainer');
    $container.empty();
    
    // 모든 이미지 처리
    const fileCount = files.length;
    
    for (let i = 0; i < fileCount; i++) {
        const file = files[i];
        
        if (!file.type.startsWith('image/')) {
            continue;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const $item = $('<div>').addClass('image-preview-item');
            const $img = $('<img>').attr('src', e.target.result);
            const $removeBtn = $('<div>')
                .addClass('image-preview-remove')
                .html('&times;')
                .on('click', function() {
                    $(this).closest('.image-preview-item').remove();
                    // 실제 파일 삭제 처리는 복잡하므로 여기서는 생략
                });
            
            $item.append($img, $removeBtn);
            $container.append($item);
        };
        
        reader.readAsDataURL(file);
    }
}

// 폼 유효성 검사
function validateForm() {
    const title = $('#title').val().trim();
    const content = $('#content').val().trim();
    const categoryIdx = $('#category').val();
    const author = $('#author').val().trim();
    const password = $('#password').val();
    
    if (!categoryIdx) {
        showAlert('error', '카테고리를 선택해주세요.');
        $('#category').focus();
        return false;
    }
    
    if (!author) {
        showAlert('error', '작성자 이름을 입력해주세요.');
        $('#author').focus();
        return false;
    }
    
    if (!password) {
        showAlert('error', '비밀번호를 입력해주세요.');
        $('#password').focus();
        return false;
    }
    
    if (!title) {
        showAlert('error', '제목을 입력해주세요.');
        $('#title').focus();
        return false;
    }
    
    if (!content) {
        showAlert('error', '내용을 입력해주세요.');
        $('#content').focus();
        return false;
    }
    
    return true;
}

// 게시글 제출 (등록/수정)
function submitPost(isEdit) {
    // 카테고리 유효성 다시 검사
    const categorySelect = $('#category');
    const categoryValue = categorySelect.val();
    if (!categoryValue) {
        showAlert('error', '카테고리를 선택해주세요.');
        categorySelect.focus();
        return;
    }
    
    // 선택된 카테고리 텍스트(이름) 가져오기
    const categoryName = categorySelect.find('option:selected').text();
    
    // 게시글 데이터 준비
    const postData = {
        title: $('#title').val().trim(),
        content: $('#content').val().trim(),
        author: $('#author').val().trim(),
        password: $('#password').val(),
        codeName: categoryName
    };
    
    // 수정 모드인 경우 게시글 인덱스 추가
    if (isEdit) {
        const postIdx = $('#postIdx').val();
        if (postIdx) {
            postData.idx = parseInt(postIdx);
        }
    }
    
    // FormData 생성
    const formData = new FormData();
    
    // 게시글 데이터를 JSON 문자열로 변환하여 추가
    formData.append('postDto', new Blob([JSON.stringify(postData)], {
        type: 'application/json'
    }));
    
    // 이미지 파일 추가
    const imageFiles = document.getElementById('images').files;
    if (imageFiles && imageFiles.length > 0) {
        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('files', imageFiles[i]);
        }
    }
    
    // 기존 이미지 인덱스 추가 (수정 모드에서만)
    if (isEdit) {
        const remainingImageIndices = getDeletedImageIndices();
        if (remainingImageIndices.length > 0) {
            formData.append('remainingImageIndices', remainingImageIndices.join(','));
        }
    }
    
    // 디버깅 로그
    console.log('게시글 데이터:', postData);
    console.log('첨부 파일 수:', imageFiles ? imageFiles.length : 0);
    console.log('기존 이미지 인덱스:', isEdit ? getDeletedImageIndices() : []);
    
    // AJAX 요청
    $.ajax({
        url: isEdit ? `/post/${postData.idx}` : '/post',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
            console.log('서버 응답:', response);
            if (response.isSuccess) {
                // 알림 표시하지 않고 바로 페이지 이동
                if (!isEdit) {
                    // 등록 성공 시 바로 상세 페이지로 이동
                    if (response.data && response.data.idx) {
                        location.href = `/post-detail/${response.data.idx}?message=post_created&type=success`;
                    } else {
                        // idx가 없는 경우 메인 페이지로 이동
                        location.href = '/?message=post_created&type=success';
                    }
                } else {
                    // 수정 성공 시 상세 페이지로 이동
                    location.href = `/post-detail/${postData.idx}?message=post_updated&type=success`;
                }
            } else {
                showAlert('error', isEdit ? '게시글 수정에 실패했습니다.: ' + response.message : '게시글 등록에 실패했습니다.: ' + response.message);
                console.error(response);
            }
        },
        error: function(xhr, status, error) {
            console.error('오류 상태:', status);
            console.error('오류 내용:', error);
            console.error('응답 텍스트:', xhr.responseText);
            
            try {
                const response = JSON.parse(xhr.responseText);
                
                // 비밀번호 불일치 오류 처리
                if (response.message && (
                    response.message.includes('비밀번호가 일치하지 않습니다') || 
                    response.message.includes('password') || 
                    response.message.includes('비밀번호')
                )) {
                    showPasswordError('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
                    $('#password').val('').focus();
                } else {
                    showAlert('error', '게시글 저장에 실패했습니다: ' + (response.message || '서버 오류가 발생했습니다.'));
                }
            } catch (e) {
                console.error('JSON 파싱 오류:', e);
                
                // 응답 텍스트에 비밀번호 관련 문자열이 포함되어 있는지 확인
                if (xhr.responseText && (
                    xhr.responseText.includes('비밀번호가 일치하지 않습니다') || 
                    xhr.responseText.includes('password') || 
                    xhr.responseText.includes('비밀번호')
                )) {
                    showPasswordError('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
                    $('#password').val('').focus();
                } else {
                    showAlert('error', '서버 오류가 발생했습니다. 상태 코드: ' + xhr.status);
                }
            }
        }
    });
}

// 삭제된 기존 이미지 인덱스 가져오기
function getDeletedImageIndices() {
    const originalImages = $('#existingImages').find('.existing-image-item');
    const remainingIndices = $.map(originalImages, function(item) {
        return $(item).data('idx');
    });
    
    // 삭제한 이미지가 없는 경우 빈 배열 반환
    return remainingIndices.length > 0 ? remainingIndices : [];
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

// 비밀번호 필드 오류 표시 함수
function showPasswordError(errorMessage) {
    // 기존 오류 메시지 제거
    $('#password-error').remove();
    
    // 비밀번호 필드 아래에 오류 메시지 추가
    const $errorElement = $('<div>')
        .attr('id', 'password-error')
        .addClass('text-danger mt-1')
        .text(errorMessage);
    
    $('#password').parent().append($errorElement);
    
    // 비밀번호 필드에 오류 스타일 추가
    $('#password').addClass('is-invalid');
    
    // 상단 알림창에도 메시지 표시
    showAlert('error', errorMessage);
    
    // 5초 후 오류 메시지 삭제
    setTimeout(function() {
        removePasswordError();
    }, 5000);
}

// 비밀번호 필드 오류 제거 함수
function removePasswordError() {
    $('#password-error').remove();
    $('#password').removeClass('is-invalid');
} 