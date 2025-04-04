package com.fornet.auto.dao;

import com.fornet.auto.dto.CommentDto;
import com.fornet.auto.dto.CommentQueryReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

// 댓글 데이터 액세스 객체
@Mapper
public interface    CommentDao {

    // 댓글 등록 @param commentDto 댓글 정보 @return 등록된 댓글 인덱스
    Long insertComment(CommentDto commentDto);

    // 댓글 수정 @param commentDto 댓글 정보 @return 수정된 행 수
    int updateComment(CommentDto commentDto);

    // 댓글 삭제 @param idx 댓글 인덱스 @return 삭제된 행 수
    int deleteComment(Long idx);

    // 댓글 목록 조회 @param commentQueryReqDto 댓글 조회 조건 @return 댓글 목록
    List<CommentDto> getComments(CommentQueryReqDto commentQueryReqDto);
    
    // 댓글 개수 조회 @param commentQueryReqDto 댓글 조회 조건 @return 댓글 개수
    Long countComments(CommentQueryReqDto commentQueryReqDto);
    
    // 댓글 단일 조회 @param idx 댓글 인덱스 @return 댓글 정보
    CommentDto getComment(Long idx);

    // 게시글에 속한 모든 댓글 삭제 @param postIdx 게시글 인덱스 @return 삭제된 행 수
    int deleteCommentsByPostIdx(Long postIdx);

} 