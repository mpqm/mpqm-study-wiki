package com.example.post;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final PostImageRepository postImageRepository;
    public CreatePostRes create(CreatePostReq dto, String fileName){
        Post post = Post.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .imageUrl(fileName)
                .build();
        postRepository.save(post);
        PostImage postImage = PostImage.builder()
                .imageUrl(fileName)
                .post(post)
                .build();
        postImageRepository.save(postImage);
        return CreatePostRes.builder()
                .idx(post.getPostIdx())
                .content(post.getContent())
                .imageUrl(post.getImageUrl())
                .title(post.getTitle())
                .build();
    }


    public List<ReadPostRes> searchAll(){
        List<Post> postList = postRepository.findAll();
        List<ReadPostRes> readPostResList = new ArrayList<>();
        for(Post post : postList){
            ReadPostRes readPostRes = ReadPostRes.builder()
                    .idx(post.getPostIdx())
                    .title(post.getTitle())
                    .content(post.getContent())
                    .imageUrl(post.getImageUrl())
                    .build();
            readPostResList.add(readPostRes);
        }
        return readPostResList;
    }

    public List<ReadPostRes> searchDetail(String keyword){
        Optional<List<Post>> result = postRepository.findByKeyword(keyword);
        if(result.isPresent()){
            List<Post> postList = result.get();
            List<ReadPostRes> readPostResList = new ArrayList<>();
            for(Post post : postList){
                ReadPostRes readPostRes = ReadPostRes.builder()
                        .idx(post.getPostIdx())
                        .title(post.getTitle())
                        .build();
                readPostResList.add(readPostRes);
            }
            return readPostResList;
        }
        return null;

    }
}
