package com.example.post;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postIdx;
    private String title;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String content;
    private String imageUrl;
    @OneToMany(mappedBy = "post")
    private List<PostImage> postImageList = new ArrayList<>();
}
