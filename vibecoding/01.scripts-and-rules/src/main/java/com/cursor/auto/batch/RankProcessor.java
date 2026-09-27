package com.fornet.auto.batch;

import org.springframework.batch.item.ItemProcessor;
import org.springframework.stereotype.Component;

import com.fornet.auto.dto.PostDto;
import com.fornet.auto.dto.RankDto;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
@RequiredArgsConstructor
public class RankProcessor implements ItemProcessor<List<PostDto>, List<RankDto>> {
    
    private List<PostDto> posts = new ArrayList<>();
    private boolean isFirstChunk = true;
    private static final Logger log = LoggerFactory.getLogger(RankProcessor.class);
    
    @Override
    public List<RankDto> process(List<PostDto> items) throws Exception {
        if (isFirstChunk) {
            // 첫 번째 청크만 처리 (모든 게시물 데이터가 한 번에 로드됨)
            posts = new ArrayList<>(items);
            isFirstChunk = false;
            
            // 결과를 저장할 리스트
            List<RankDto> result = new ArrayList<>();
            
            // 1. 조회수 랭킹 처리
            List<PostDto> viewRanked = posts.stream()
                .filter(p -> p.getViewCount() != null && p.getViewCount() > 0)
                .sorted(Comparator.comparing(PostDto::getViewCount).reversed())
                .limit(10)
                .collect(Collectors.toList());
                
            for (int i = 0; i < viewRanked.size(); i++) {
                PostDto post = viewRanked.get(i);
                result.add(RankDto.builder()
                    .ranking(i + 1)
                    .flag("V") // 조회수 랭킹
                    .title(post.getTitle())
                    .postIdx(post.getIdx())
                    .viewCount(post.getViewCount() != null ? post.getViewCount().intValue() : 0)
                    .likeCount(post.getLikeCount() != null ? post.getLikeCount().intValue() : 0)
                    .unlikeCount(post.getUnlikeCount() != null ? post.getUnlikeCount().intValue() : 0)
                    .commentCount(post.getCommentCount() != null ? post.getCommentCount().intValue() : 0)
                    .build());
            }
            
            // 2. 좋아요 랭킹 처리
            List<PostDto> likeRanked = posts.stream()
                .filter(p -> p.getLikeCount() != null && p.getLikeCount() > 0)
                .sorted(Comparator.comparing(PostDto::getLikeCount).reversed())
                .limit(10)
                .collect(Collectors.toList());
                
            for (int i = 0; i < likeRanked.size(); i++) {
                PostDto post = likeRanked.get(i);
                result.add(RankDto.builder()
                    .ranking(i + 1)
                    .flag("L") // 좋아요 랭킹
                    .title(post.getTitle())
                    .postIdx(post.getIdx())
                    .viewCount(post.getViewCount() != null ? post.getViewCount().intValue() : 0)
                    .likeCount(post.getLikeCount() != null ? post.getLikeCount().intValue() : 0)
                    .unlikeCount(post.getUnlikeCount() != null ? post.getUnlikeCount().intValue() : 0)
                    .commentCount(post.getCommentCount() != null ? post.getCommentCount().intValue() : 0)
                    .build());
            }
            
            // 3. 싫어요 랭킹 처리
            List<PostDto> unlikeRanked = posts.stream()
                .filter(p -> p.getUnlikeCount() != null && p.getUnlikeCount() > 0)
                .sorted(Comparator.comparing(PostDto::getUnlikeCount).reversed())
                .limit(10)
                .collect(Collectors.toList());
                
            for (int i = 0; i < unlikeRanked.size(); i++) {
                PostDto post = unlikeRanked.get(i);
                result.add(RankDto.builder()
                    .ranking(i + 1)
                    .flag("U") // 싫어요 랭킹
                    .title(post.getTitle())
                    .postIdx(post.getIdx())
                    .viewCount(post.getViewCount() != null ? post.getViewCount().intValue() : 0)
                    .likeCount(post.getLikeCount() != null ? post.getLikeCount().intValue() : 0)
                    .unlikeCount(post.getUnlikeCount() != null ? post.getUnlikeCount().intValue() : 0)
                    .commentCount(post.getCommentCount() != null ? post.getCommentCount().intValue() : 0)
                    .build());
            }
            
            // 4. 댓글수 랭킹 처리
            log.info("댓글 랭킹 처리 시작 - 전체 게시물 수: {}", posts.size());
            
            // 댓글 수가 있는 게시물 현황 로깅
            posts.forEach(post -> {
                log.info("게시물 ID: {}, 제목: {}, 댓글 수: {}", 
                    post.getIdx(), 
                    post.getTitle(), 
                    post.getCommentCount());
            });
            
            List<PostDto> commentRanked = posts.stream()
                // .filter(p -> p.getCommentCount() != null && p.getCommentCount() > 0) // 원래 필터
                .filter(p -> p.getCommentCount() != null) // null이 아닌 모든 게시물 포함(0도 포함)
                .sorted(Comparator.comparing(PostDto::getCommentCount, Comparator.nullsLast(Comparator.reverseOrder())))
                .limit(10)
                .collect(Collectors.toList());
            
            log.info("댓글 랭킹 필터링 후 게시물 수: {}", commentRanked.size());
            
            for (int i = 0; i < commentRanked.size(); i++) {
                PostDto post = commentRanked.get(i);
                log.info("댓글 랭킹 {} 위: 게시물 ID: {}, 제목: {}, 댓글 수: {}", 
                    (i+1), post.getIdx(), post.getTitle(), post.getCommentCount());
                    
                result.add(RankDto.builder()
                    .ranking(i + 1)
                    .flag("C") // 댓글수 랭킹
                    .title(post.getTitle())
                    .postIdx(post.getIdx())
                    .viewCount(post.getViewCount() != null ? post.getViewCount().intValue() : 0)
                    .likeCount(post.getLikeCount() != null ? post.getLikeCount().intValue() : 0)
                    .unlikeCount(post.getUnlikeCount() != null ? post.getUnlikeCount().intValue() : 0)
                    .commentCount(post.getCommentCount() != null ? post.getCommentCount().intValue() : 0)
                    .build());
            }
            
            return result;
        } else {
            // 첫 번째 이후의 청크는 처리하지 않음
            return new ArrayList<>();
        }
    }
    
    // 배치 작업이 끝날 때마다 상태 초기화
    public void resetState() {
        posts.clear();
        isFirstChunk = true;
    }
} 