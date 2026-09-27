package com.fornet.auto.service;

import com.fornet.auto.common.BaseExc;
import com.fornet.auto.common.BaseMsg;
import com.fornet.auto.common.CryptoUtil;
import com.fornet.auto.dao.CommentDao;
import com.fornet.auto.dao.PostDao;
import com.fornet.auto.dao.PostImageDao;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// 게시물 서비스
@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {

    private final PostDao postDao;
    private final PostImageDao postImageDao;
    private final CommentDao commentDao;

    // 게시물 등록 @param postDto 게시물 정보 fileNames 파일명 목록 @return 생성된 게시물 인덱스
    @Transactional
    public void insertPost(PostDto postDto, List<String> fileNames) throws BaseExc {

        // 비밀번호 암호화
        postDto.setPassword(CryptoUtil.hashPassword(postDto.getPassword()));
        
        // 게시물 저장
        Long postIdx = postDao.insertPost(postDto);
        if (postIdx <= 0) throw new BaseExc(BaseMsg.POST_NOT_CREATED);

        
        // 이미지 파일 정보 저장
        for (String fileName : fileNames) {
            PostImageDto postImage = PostImageDto.builder()
                .postIdx(postDto.getIdx())
                .filePath("/upload/" + fileName)
                .build();
            Long insertPostImageCnt = postImageDao.insertPostImage(postImage);
            if(insertPostImageCnt <= 0) throw new BaseExc(BaseMsg.POST_IMAGE_NOT_CREATED);
        }

    }

    // 게시물 수정 @param postDto 게시물 정보 fileNames 파일명 목록
    @Transactional
    public void updatePost(Long idx, PostDto postDto, List<String> fileNames) {

        // 게시물 조회
        PostDto existPost = postDao.getPost(idx);
        if (existPost == null) throw new BaseExc(BaseMsg.POST_NOT_FOUND);
        
        // 비밀번호 확인
        if (!CryptoUtil.matchPassword(postDto.getPassword(), existPost.getPassword())) {
            throw new BaseExc(BaseMsg.PASSWORD_MISMATCH);
        }

        // 게시물 수정 (비밀번호는 기존 값 유지)
        int updatePostCnt = postDao.updatePost(postDto);
        if (updatePostCnt <= 0) throw new BaseExc(BaseMsg.POST_NOT_UPDATED);
        
        // 기존 이미지 삭제 후 새 이미지 등록
        int deletePostImageCnt = postImageDao.deletePostImageByPostIdx(postDto.getIdx());
        if(deletePostImageCnt <= 0) throw new BaseExc(BaseMsg.POST_IMAGE_NOT_DELETED);

        // 이미지 파일 정보 저장
        for (String fileName : fileNames) {
            PostImageDto postImage = PostImageDto.builder()
                .postIdx(postDto.getIdx())
                .filePath("/upload/" + fileName)
                .build();
            Long insertPostImageCnt = postImageDao.insertPostImage(postImage);
            if(insertPostImageCnt <= 0) throw new BaseExc(BaseMsg.POST_IMAGE_NOT_CREATED);
        }

    }

    // 게시물 삭제 @param 게시물 정보 (idx, password 필수)
    @Transactional
    public void deletePost(Long idx, String password) {
        // 게시물 조회
        PostDto post = postDao.getPost(idx);
        if (post == null) throw new BaseExc(BaseMsg.POST_NOT_FOUND);

        // 비밀번호 확인
        if (!CryptoUtil.matchPassword(password, post.getPassword())) {
            throw new BaseExc(BaseMsg.PASSWORD_MISMATCH);
        }

        // 게시물 이미지 삭제
        postImageDao.deletePostImageByPostIdx(idx);

        // 게시물 댓글 삭제
        int deleteCommentCnt = commentDao.deleteCommentsByPostIdx(idx);
        if(deleteCommentCnt <= 0) throw new BaseExc(BaseMsg.COMMENT_NOT_DELETED);

        // 게시물 삭제
        int deletePostCnt = postDao.deletePost(idx);
        if (deletePostCnt <= 0) throw new BaseExc(BaseMsg.POST_NOT_DELETED);

    }

    // 게시물 상세 조회 @param idx 게시물 인덱스 @return 게시물 상세 정보
    @Transactional
    public PostDetailDto getPost(Long idx) throws BaseExc {

        // 조회수 증가
        int viewCountIncreased = postDao.increaseViewCount(idx);
        if (viewCountIncreased <= 0) throw new BaseExc(BaseMsg.POST_VIEW_NOT_INCREASED);
        
        // 게시물 조회
        PostDto post = postDao.getPost(idx);
        if (post == null) throw new BaseExc(BaseMsg.POST_NOT_FOUND);

        // 게시물 이미지 조회
        List<PostImageDto> postImages = postImageDao.getPostImagesByPostIdx(idx);

        return PostDetailDto.builder()
                .post(post)
                .postImages(postImages)
                .build();
    }

    // 게시물 목록 조회 @param postQueryReqDto 게시물 조회 조건 @return 게시물 목록
    public PaginationResDto<PostDto> getPosts(PostQueryReqDto postQueryReqDto) {
        
        // 게시물 목록 조회
        List<PostDto> posts = postDao.getPosts(postQueryReqDto);
        
        // 전체 게시물 수 조회
        Long totalElements = postDao.countPosts(postQueryReqDto);
        
        // 페이지네이션 정보 생성
        int totalPages = (int) Math.ceil((double) totalElements / postQueryReqDto.getSize());
        
        // 페이지네이션 응답 생성
        return PaginationResDto.<PostDto>builder()
                .data(posts)
                .totalElements(totalElements)
                .totalPages(totalPages)
                .currentPage(postQueryReqDto.getPage())
                .pageSize(postQueryReqDto.getSize())
                .build();
    }

    // 게시물 좋아요 수 증가 @param idx 게시물 인덱스
    @Transactional
    public void increaseLikeCount(Long idx) {

        // 좋아요 수 증가
        int increaseLikeCountCnt = postDao.increaseLikeCount(idx);
        if (increaseLikeCountCnt <= 0) throw new BaseExc(BaseMsg.LIKE_NOT_INCREASED);

    }

    // 게시물 싫어요 수 증가 @param idx 게시물 인덱스
    @Transactional
    public void increaseUnlikeCount(Long idx) {

        // 싫어요 수 증가
        int increaseUnlikeCountCnt = postDao.increaseUnlikeCount(idx);
        if (increaseUnlikeCountCnt <= 0) throw new BaseExc(BaseMsg.UNLIKE_NOT_INCREASED);

    }

}