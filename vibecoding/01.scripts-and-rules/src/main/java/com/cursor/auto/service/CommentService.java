package com.fornet.auto.service;

import com.fornet.auto.common.BaseExc;
import com.fornet.auto.common.BaseMsg;
import com.fornet.auto.common.CryptoUtil;
import com.fornet.auto.dao.CommentDao;
import com.fornet.auto.dto.CommentDto;
import com.fornet.auto.dto.CommentQueryReqDto;
import com.fornet.auto.dto.PaginationResDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// 댓글 서비스
@Slf4j
@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentDao commentDao;

    // 댓글 등록 @param commentDto 댓글 정보
    @Transactional
    public void insertComment(CommentDto commentDto) {
        // 비밀번호 암호화
        commentDto.setPassword(CryptoUtil.hashPassword(commentDto.getPassword()));
        
        // 댓글 저장
        Long commentIdx = commentDao.insertComment(commentDto);
        if (commentIdx <= 0) throw new BaseExc(BaseMsg.COMMENT_NOT_CREATED);

    }

    // 댓글 수정 @param commentDto 댓글 정보
    @Transactional
    public void updateComment(Long idx, CommentDto commentDto) {

        // 댓글 인덱스로 직접 조회
        CommentDto existComment = commentDao.getComment(idx);
        if (existComment == null) throw new BaseExc(BaseMsg.COMMENT_NOT_FOUND);

        // 비밀번호 확인
        if (!CryptoUtil.matchPassword(commentDto.getPassword(), existComment.getPassword())) {
            throw new BaseExc(BaseMsg.PASSWORD_MISMATCH);
        }

        // idx 값 설정
        commentDto.setIdx(idx);
        
        // 댓글 수정(비밀번호는 기존 값 유지)
        int updateCommentCnt = commentDao.updateComment(commentDto);
        if (updateCommentCnt <= 0) throw new BaseExc(BaseMsg.COMMENT_NOT_UPDATED);
    }

    // 댓글 삭제 @param commentDto 댓글 정보
    @Transactional
    public void deleteComment(Long idx, String password) {

        // 댓글 인덱스로 직접 조회
        CommentDto comment = commentDao.getComment(idx);
        
        if (comment == null) {
            throw new BaseExc(BaseMsg.COMMENT_NOT_FOUND);
        }
        
        // 비밀번호 확인
        if (!CryptoUtil.matchPassword(password, comment.getPassword())) {
            throw new BaseExc(BaseMsg.PASSWORD_MISMATCH);
        }
        
        // 댓글 삭제
        int deletedCnt = commentDao.deleteComment(idx);
        if (deletedCnt <= 0) throw new BaseExc(BaseMsg.COMMENT_NOT_DELETED);

    }

    // 댓글 목록 조회 @param commentQueryReqDto 댓글 조회 조건 @return 댓글 목록
    public PaginationResDto<CommentDto> getComments(CommentQueryReqDto commentQueryReqDto) {

        // 댓글 목록 조회
        List<CommentDto> comments = commentDao.getComments(commentQueryReqDto);
        
        // 전체 댓글 수 조회
        Long totalElements = commentDao.countComments(commentQueryReqDto);
        
        // 페이지네이션 정보 생성
        int totalPages = (int) Math.ceil((double) totalElements / commentQueryReqDto.getSize());
        
        // 페이지네이션 응답 생성
        return PaginationResDto.<CommentDto>builder()
                .data(comments)
                .totalElements(totalElements)
                .totalPages(totalPages)
                .currentPage(commentQueryReqDto.getPage())
                .pageSize(commentQueryReqDto.getSize())
                .build();
    }

} 