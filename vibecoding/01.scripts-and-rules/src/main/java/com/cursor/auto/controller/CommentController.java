package com.fornet.auto.controller;

import com.fornet.auto.common.BaseMsg;
import com.fornet.auto.common.BaseRes;
import com.fornet.auto.dto.CommentDto;
import com.fornet.auto.dto.CommentQueryReqDto;
import com.fornet.auto.dto.PaginationResDto;
import com.fornet.auto.service.CommentService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// 댓글 컨트롤러
@Slf4j
@RestController
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    // 댓글 등록
    @PostMapping("/comment")
    public ResponseEntity<BaseRes<Void>> insertComment(@RequestBody CommentDto commentDto) {
        commentService.insertComment(commentDto);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.COMMENT_CREATED));
    }

    // 댓글 수정
    @PutMapping("/comment/{idx}")
    public ResponseEntity<BaseRes<Void>> updateComment(
            @PathVariable Long idx,
            @RequestBody CommentDto commentDto) {
        commentService.updateComment(idx, commentDto);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.COMMENT_UPDATED));
    }

    // 댓글 삭제
    @DeleteMapping("/comment/{idx}/{password}")
    public ResponseEntity<BaseRes<Void>> deleteComment(
            @PathVariable Long idx,
            @PathVariable String password) {
        commentService.deleteComment(idx, password);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.COMMENT_DELETED));
    }

    // 댓글 목록 조회
    @GetMapping("/comment-list")
    public ResponseEntity<BaseRes<PaginationResDto<CommentDto>>> getComments(CommentQueryReqDto commentQueryReqDto) {
        PaginationResDto<CommentDto> comments = commentService.getComments(commentQueryReqDto);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.COMMENTS_SEARCHED, comments));
    }
} 