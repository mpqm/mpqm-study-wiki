package com.fornet.auto.dao;

import com.fornet.auto.dto.PostImageDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 게시물 이미지 데이터 액세스 객체
 */
@Mapper
public interface PostImageDao {

    // 게시물 이미지 등록 @param postImageDto 게시물 이미지 정보 @return 등록된 행 수
    Long insertPostImage(PostImageDto postImageDto);
    
    // 게시물 이미지 삭제 (게시물 인덱스 기준) @param postIdx 게시물 인덱스 @return 삭제된 행 수
    int deletePostImageByPostIdx(Long postIdx);

    // 게시물 이미지 목록 조회 @param postIdx 게시물 인덱스 @return 게시물 이미지 목록
    List<PostImageDto> getPostImagesByPostIdx(Long postIdx);

} 