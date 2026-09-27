package com.cursor.auto.batch;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.batch.item.Chunk;

import com.fornet.auto.dao.PostDao;
import com.fornet.auto.dao.RankDao;
import com.fornet.auto.dto.PostDto;
import com.fornet.auto.dto.RankDto;

@ExtendWith(MockitoExtension.class)
class RankingBatchTest {

    @Mock
    private PostDao postDao;

    @Mock
    private RankDao rankDao;

    @InjectMocks
    private RankReader rankReader;

    @InjectMocks
    private RankProcessor rankProcessor;

    // 직접 생성하도록 변경
    private RankWriter rankWriter;

    private List<PostDto> testPosts;

    @BeforeEach
    void setUp() {
        // 테스트용 게시물 데이터 준비
        testPosts = new ArrayList<>();
        for (int i = 1; i <= 20; i++) {
            testPosts.add(PostDto.builder()
                    .idx((long) i)
                    .title("테스트 " + i)
                    .viewCount((long) (100 - i))
                    .likeCount((long) i)
                    .unlikeCount((long) (30 - i))
                    .commentCount((long) (i % 5 + 1))
                    .build());
        }

        // PostDao 모의 설정
        when(postDao.getBatch()).thenReturn(testPosts);
        
        // RankDao 모의 설정
        when(rankDao.deleteRanks()).thenReturn(10);
        when(rankDao.insertRank(any(RankDto.class))).thenReturn(1L);
        
        // RankWriter 직접 생성 및 의존성 주입
        rankWriter = new RankWriter(rankDao, rankProcessor);
    }

    @Test
    @DisplayName("랭킹 배치 프로세스 전체 테스트")
    void rankingBatchProcessTest() throws Exception {
        // 1. RankReader로 데이터 읽기
        List<PostDto> postDtos = rankReader.read();
        
        // 데이터가 올바르게 읽혔는지 확인
        assertNotNull(postDtos);
        assertEquals(testPosts.size(), postDtos.size());
        
        // 2. RankProcessor로 데이터 처리
        List<RankDto> rankDtos = rankProcessor.process(postDtos);
        
        // 데이터가 올바르게 처리되었는지 확인
        assertNotNull(rankDtos);
        assertFalse(rankDtos.isEmpty());
        
        // 각 타입별 랭킹이 10개씩 있는지 확인
        long viewRankCount = rankDtos.stream().filter(r -> "V".equals(r.getFlag())).count();
        long likeRankCount = rankDtos.stream().filter(r -> "L".equals(r.getFlag())).count();
        long unlikeRankCount = rankDtos.stream().filter(r -> "U".equals(r.getFlag())).count();
        long commentRankCount = rankDtos.stream().filter(r -> "C".equals(r.getFlag())).count();
        
        assertEquals(10, viewRankCount);
        assertEquals(10, likeRankCount);
        assertEquals(10, unlikeRankCount);
        assertEquals(10, commentRankCount);
        
        // 3. RankWriter로 데이터 쓰기
        Chunk<List<RankDto>> chunk = new Chunk<>(Collections.singletonList(rankDtos));
        rankWriter.write(chunk);
        
        // 데이터가 올바르게 저장되었는지 확인
        verify(rankDao, times(1)).deleteRanks();
        verify(rankDao, times(rankDtos.size())).insertRank(any(RankDto.class));
        
        // RankProcessor가 리셋되었는지 확인
        // 리셋 후 다시 처리하면 결과가 나와야 함
        List<RankDto> resetResult = rankProcessor.process(postDtos);
        assertNotNull(resetResult);
        assertFalse(resetResult.isEmpty());
    }
} 