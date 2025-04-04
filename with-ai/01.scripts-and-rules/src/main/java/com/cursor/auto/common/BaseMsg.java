package com.fornet.auto.common;

import lombok.Getter;

// 기본 메시지
@Getter

public enum BaseMsg {
    SUCCESS(200, true, "성공했습니다."),
    VALIDATION_ERROR(400, false, "유효성 검사 오류가 발생했습니다."),
    ERROR(500, false, "오류가 발생했습니다."),
    NOT_FOUND(404, false, "요청한 리소스를 찾을 수 없습니다."),
    UNAUTHORIZED(401, false, "인증되지 않은 요청입니다."),

    POST_CREATED(1000, true, "게시물이 생성되었습니다."),
    POST_NOT_CREATED(1001, false, "게시물 생성에 실패했습니다."),
    POST_UPDATED(1002, true, "게시물이 수정되었습니다."),
    POST_NOT_UPDATED(1003, false, "게시물 수정에 실패했습니다."),
    POST_DELETED(1004, true, "게시물이 삭제되었습니다."),
    POST_NOT_DELETED(1005, false, "게시물 삭제에 실패했습니다."),
    POST_SEARCHED(1006, true, "게시물 조회에 성공했습니다."),
    POSTS_SEARCHED(1007, true, "게시물 목록 조회에 성공했습니다."),
    POST_NOT_FOUND(1008, false, "게시물을 찾을 수 없습니다."),
    POSTS_NOT_FOUND(1009, false, "게시물 목록을 찾을 수 없습니다."),
    POST_IMAGE_NOT_CREATED(1010, false, "게시물 이미지 저장에 실패했습니다."),
    POST_IMAGE_NOT_FOUND(1011, false, "게시물 이미지를 찾을 수 없습니다."),
    POST_IMAGE_NOT_DELETED(1012, false, "게시물 이미지 삭제에 실패했습니다."),
    POST_VIEW_INCREASED(1013, true, "게시물 조회수가 증가되었습니다."),
    POST_VIEW_NOT_INCREASED(1014, false, "게시물 조회수 증가에 실패했습니다."),
    LIKE_INCREASED(1015, true, "좋아요가 증가되었습니다."),
    LIKE_NOT_INCREASED(1016, false, "좋아요 증가에 실패했습니다."),
    UNLIKE_INCREASED(1017, true, "싫어요가 증가되었습니다."),
    UNLIKE_NOT_INCREASED(1018, false, "싫어요 증가에 실패했습니다."),
    COMMENT_CREATED(1019, true, "댓글이 생성되었습니다."),
    COMMENT_NOT_CREATED(1020, false, "댓글 생성에 실패했습니다."),
    COMMENT_UPDATED(1021, true, "댓글이 수정되었습니다."),
    COMMENT_NOT_UPDATED(1022, false, "댓글 수정에 실패했습니다."),
    COMMENT_DELETED(1023, true, "댓글이 삭제되었습니다."),
    COMMENT_NOT_DELETED(1024, false, "댓글 삭제에 실패했습니다."),
    COMMENT_SEARCHED(1025, true, "댓글 조회에 성공했습니다."),
    COMMENT_NOT_FOUND(1026, false, "댓글을 찾을 수 없습니다."),
    COMMENTS_SEARCHED(1027, true, "댓글 목록 조회에 성공했습니다."),
    COMMENTS_NOT_FOUND(1028, false, "댓글 목록을 찾을 수 없습니다."),
    PASSWORD_MISMATCH(1029, false, "비밀번호가 일치하지 않습니다."),
    PW_HASH_FAIL(1030, false, "해시 생성에 실패했습니다."),
    RANK_SEARCHED(1031, true, "랭킹 조회에 성공했습니다.");
    private final Integer code;
    private final Boolean isSuccess;
    private final String message;

    BaseMsg(Integer code, Boolean isSuccess, String message) {
        this.code = code;
        this.isSuccess = isSuccess;
        this.message = message;
    }

    public static BaseMsg findByCode(Integer code) {
        for (BaseMsg message : values()) { if (message.getCode().equals(code)) { return message; }}
        return null;
    }

} 