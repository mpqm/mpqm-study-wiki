package com.fornet.auto.dao;

import com.fornet.auto.dto.PostDto;
import com.fornet.auto.dto.PostQueryReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

// 게시물 데이터 액세스 객체
@Mapper
public interface PostDao {

    // 게시물 등록 @param postDto 게시물 정보 @return 등록된 게시물 인덱스
    Long insertPost(PostDto postDto);

    // 게시물 수정 @param postDto 게시물 정보 @return 수정된 행 수
    int updatePost(PostDto postDto);

    // 게시물 삭제 @param idx 게시물 인덱스 @return 삭제된 행 수
    int deletePost(Long idx);

    // 게시물 조회 @param idx 게시물 인덱스 @return 게시물 정보
    PostDto getPost(Long idx);

    // 게시물 목록 조회 @param postQueryReqDto 게시물 조회 조건 @return 게시물 목록
    List<PostDto> getPosts(PostQueryReqDto postQueryReqDto);
    
    // 게시물 개수 조회 @param postQueryReqDto 게시물 조회 조건 @return 게시물 개수
    Long countPosts(PostQueryReqDto postQueryReqDto);

    // 게시물 좋아요 수 증가 @param idx 게시물 인덱스 @return 수정된 행 수
    int increaseLikeCount(Long idx);

    // 게시물 싫어요 수 증가 @param idx 게시물 인덱스 @return 수정된 행 수
    int increaseUnlikeCount(Long idx);

    // 게시물 조회수 증가 @param idx 게시물 인덱스 @return 수정된 행 수
    int increaseViewCount(Long idx);
    
    // 모든 게시물 조회 @return 모든 게시물 목록
    List<PostDto> getBatch();

} 