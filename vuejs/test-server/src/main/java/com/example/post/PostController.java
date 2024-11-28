package com.example.post;

import com.example.util.CloudFileUpload;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/post")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;
    private final CloudFileUpload cloudFileUpload;

    @PostMapping(value = "/upload-image")
    public ResponseEntity<List<String>> uploadImage(
        @RequestPart(name = "files") MultipartFile[] files) throws IOException {
        List<String> fileNames = cloudFileUpload.multipleUpload(files);
        System.out.println(fileNames);
        return ResponseEntity.ok(fileNames);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<CreatePostRes> create (
        @RequestPart(name = "file") MultipartFile file,
        @RequestPart(name = "dto") CreatePostReq dto) throws IOException {
        String fileName = cloudFileUpload.upload(file);
        CreatePostRes response = postService.create(dto, fileName);
        return ResponseEntity.ok(response);
    }


    @GetMapping(value = "/search-all")
    public ResponseEntity<List<ReadPostRes>> searchDetail (){
        List<ReadPostRes> response = postService.searchAll();
        return ResponseEntity.ok(response);
    }
    @GetMapping(value = "/search-detail")
    public ResponseEntity<List<ReadPostRes>> searchDetail (@RequestParam String keyword){
        List<ReadPostRes> response = postService.searchDetail(keyword);
        return ResponseEntity.ok(response);
    }
}
