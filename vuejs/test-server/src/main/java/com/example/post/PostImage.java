package com.example.post;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postImageIdx;
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "postIdx")
    private Post post;
}
