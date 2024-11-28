package com.example.post;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReadPostRes {
    Long idx;
    String title;
    String content;
    String imageUrl;
}
