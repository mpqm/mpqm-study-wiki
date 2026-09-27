package com.fornet.auto.controller;

import com.fornet.auto.common.BaseExc;
import com.fornet.auto.common.BaseMsg;
import com.fornet.auto.common.BaseRes;
import com.fornet.auto.common.FileUploadUtil;
import com.fornet.auto.dao.CodeDao;
import com.fornet.auto.dto.PostDetailDto;
import com.fornet.auto.dto.PostDto;
import com.fornet.auto.dto.PostQueryReqDto;
import com.fornet.auto.dto.PaginationResDto;
import com.fornet.auto.service.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

// 게시물 컨트롤러
@Slf4j
@Controller
@RequiredArgsConstructor
public class PostController {

    private final FileUploadUtil fileUploadUtil;
    private final PostService postService;
    private final CodeDao codeDao;

    // 게시물 목록 페이지로 이동
    @GetMapping("/")
    public String goPostListPage(Model model) {
        model.addAttribute("codes", codeDao.getCodes());
        return "post-list";
    }

    // 게시물 상세 페이지로 이동
    @GetMapping("/post-detail/{idx}")
    public String goPostDetailPage(@PathVariable Long idx, Model model) {
        model.addAttribute("postIdx", idx);
        return "post-detail";
    }

    // 게시물 작성 페이지로 이동
    @GetMapping("/post-edit")
    public String goPostCreatePage(Model model) {
        model.addAttribute("codes", codeDao.getCodes());
        return "post-edit";
    }

    // 게시물 작성/수정 페이지로 이동
    @GetMapping("/post-edit/{idx}")
    public String goPostEditPage(@PathVariable Long idx, Model model) {
        model.addAttribute("postIdx", idx);
        model.addAttribute("codes", codeDao.getCodes());
        return "post-edit";
    }

    // 게시물 등록
    @PostMapping("/post")
    @ResponseBody
    public ResponseEntity<BaseRes<PostDto>> insertPost(
            @RequestPart("postDto") PostDto postDto,
            @RequestPart(value = "files", required = false) MultipartFile[] files) throws IOException {
        List<String> fileNames = fileUploadUtil.uploadFiles(files);
        postService.insertPost(postDto, fileNames);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.POST_CREATED));
    }

    // 게시물 수정
    @PostMapping("/post/{idx}")
    public ResponseEntity<BaseRes<Void>> updatePost(
            @PathVariable Long idx,
            @RequestPart("postDto") PostDto postDto,
            @RequestPart(value = "files", required = false) MultipartFile[] files) throws IOException {
        List<String> fileNames = fileUploadUtil.uploadFiles(files);
        postService.updatePost(idx, postDto, fileNames);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.POST_UPDATED));
    }

    // 게시물 삭제
    @DeleteMapping("/post/{idx}/{password}")
    public ResponseEntity<BaseRes<Void>> deletePost(
            @PathVariable Long idx,
            @PathVariable String password) {
        postService.deletePost(idx, password);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.POST_DELETED));
    }

    // 게시물 상세 조회
    @GetMapping("/post/{idx}")
    public ResponseEntity<BaseRes<PostDetailDto>> getPost(@PathVariable Long idx) throws BaseExc {
        PostDetailDto postDetail = postService.getPost(idx);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.POST_SEARCHED, postDetail));
    }

    // 게시물 목록 조회
    @GetMapping("/post-list")
    public ResponseEntity<BaseRes<PaginationResDto<PostDto>>> getPosts(PostQueryReqDto postQueryReqDto) {
        PaginationResDto<PostDto> posts = postService.getPosts(postQueryReqDto);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.POSTS_SEARCHED, posts));
    }

    // 게시물 목록 검색 조회
    @GetMapping("/post-search")
    public ResponseEntity<BaseRes<PaginationResDto<PostDto>>> searchPosts(PostQueryReqDto postQueryReqDto) {
        PaginationResDto<PostDto> posts = postService.getPosts(postQueryReqDto);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.POSTS_SEARCHED, posts));
    }

    // 게시물 좋아요 증가
    @GetMapping("/post-like/{idx}")
    public ResponseEntity<BaseRes<Void>> increaseLikeCount(@PathVariable Long idx) {
        postService.increaseLikeCount(idx);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.LIKE_INCREASED));
    }

    // 게시물 싫어요 증가
    @GetMapping("/post-unlike/{idx}")
    public ResponseEntity<BaseRes<Void>> increaseUnlikeCount(@PathVariable Long idx) {
        postService.increaseUnlikeCount(idx);
        return ResponseEntity.ok(new BaseRes<>(BaseMsg.UNLIKE_INCREASED));
    }

} 