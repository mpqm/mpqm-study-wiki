package com.example.post;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreatePostRes {
    Long idx;
    String title;
    String content;
    String imageUrl;
    List<String> images;
}
