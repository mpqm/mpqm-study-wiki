package com.cursor.auto.batch;

import com.fornet.auto.dto.PostDto;
import com.fornet.auto.dto.RankDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class RankProcessorTest {

    @InjectMocks
    private RankProcessor rankProcessor;

    private List<PostDto> testPosts;

    @BeforeEach
    void setUp() {
        // 테스트용 게시물 데이터 준비
        testPosts = new ArrayList<>();
        
        // 조회수 테스트용 게시물
        for (int i = 1; i <= 15; i++) {
            testPosts.add(PostDto.builder()
                    .idx((long) i)
                    .title("조회수 테스트 " + i)
                    .viewCount((long) (100 - i)) // 내림차순 정렬 확인을 위해 역순으로 설정
                    .likeCount((long) i)
                    .unlikeCount((long) i)
                    .commentCount((long) i)
                    .build());
        }
        
        // null 값 테스트용 게시물
        testPosts.add(PostDto.builder()
                .idx(101L)
                .title("Null 값 테스트")
                .viewCount(null)
                .likeCount(null)
                .unlikeCount(null)
                .commentCount(null)
                .build());
                
        // 0 값 테스트용 게시물    
        testPosts.add(PostDto.builder()
                .idx(102L)
                .title("0 값 테스트")
                .viewCount(0L)
                .likeCount(0L)
                .unlikeCount(0L)
                .commentCount(0L)
                .build());
    }

    @Test
    @DisplayName("정상적인 데이터 처리 검증")
    void processNormalDataTest() throws Exception {
        // when
        List<RankDto> result = rankProcessor.process(testPosts);
        
        // then
        assertNotNull(result);
        assertFalse(result.isEmpty());
        
        // 각 타입별 랭킹이 10개씩 있는지 확인
        long viewRankCount = result.stream().filter(r -> "V".equals(r.getFlag())).count();
        long likeRankCount = result.stream().filter(r -> "L".equals(r.getFlag())).count();
        long unlikeRankCount = result.stream().filter(r -> "U".equals(r.getFlag())).count();
        long commentRankCount = result.stream().filter(r -> "C".equals(r.getFlag())).count();
        
        assertEquals(10, viewRankCount);
        assertEquals(10, likeRankCount);
        assertEquals(10, unlikeRankCount);
        assertEquals(10, commentRankCount);
        
        // 조회수 랭킹 확인 (내림차순 정렬)
        List<RankDto> viewRanks = result.stream()
                .filter(r -> "V".equals(r.getFlag()))
                .toList();
        
        for (int i = 0; i < viewRanks.size() - 1; i++) {
            assertTrue(viewRanks.get(i).getViewCount() >= viewRanks.get(i + 1).getViewCount());
        }
        
        // 첫 번째 조회수 랭킹이 예상대로 설정되었는지 확인
        RankDto firstViewRank = viewRanks.get(0);
        assertEquals(1, firstViewRank.getRanking());
        assertEquals("V", firstViewRank.getFlag());
        assertEquals(1L, firstViewRank.getPostIdx());
        assertEquals(99, firstViewRank.getViewCount()); // 100 - 1
    }
    
    @Test
    @DisplayName("첫 번째 청크 처리 검증")
    void processFirstChunkTest() throws Exception {
        // when - 첫 번째 청크 처리
        List<RankDto> firstResult = rankProcessor.process(testPosts);
        
        // then - 첫 번째 청크는 처리되어야 함
        assertNotNull(firstResult);
        assertFalse(firstResult.isEmpty());
        
        // when - 두 번째 청크 처리
        List<RankDto> secondResult = rankProcessor.process(testPosts);
        
        // then - 두 번째 청크는 빈 리스트여야 함
        assertNotNull(secondResult);
        assertTrue(secondResult.isEmpty());
    }
    
    @Test
    @DisplayName("상태 초기화 검증")
    void resetStateTest() throws Exception {
        // when - 첫 번째 청크 처리
        List<RankDto> firstResult = rankProcessor.process(testPosts);
        
        // then - 첫 번째 청크는 처리되어야 함
        assertNotNull(firstResult);
        assertFalse(firstResult.isEmpty());
        
        // 두 번째 청크는 빈 리스트여야 함
        List<RankDto> secondResult = rankProcessor.process(testPosts);
        assertTrue(secondResult.isEmpty());
        
        // 상태 초기화
        rankProcessor.resetState();
        
        // 상태 초기화 후 다시 첫 번째 청크처럼 처리되어야 함
        List<RankDto> resetResult = rankProcessor.process(testPosts);
        assertNotNull(resetResult);
        assertFalse(resetResult.isEmpty());
    }
    
    @Test
    @DisplayName("필터링 및 정렬 검증")
    void filteringAndSortingTest() throws Exception {
        // null 값과 0 값이 있는 데이터로 테스트
        List<PostDto> specialTestPosts = new ArrayList<>();
        
        // null 값만 있는 게시물
        specialTestPosts.add(PostDto.builder()
                .idx(201L)
                .title("모두 null")
                .viewCount(null)
                .likeCount(null)
                .unlikeCount(null)
                .commentCount(null)
                .build());
        
        // 일부 null 값이 있는 게시물
        specialTestPosts.add(PostDto.builder()
                .idx(202L)
                .title("일부 null")
                .viewCount(50L)
                .likeCount(null)
                .unlikeCount(30L)
                .commentCount(null)
                .build());
        
        // 정상 값이 있는 게시물
        specialTestPosts.add(PostDto.builder()
                .idx(203L)
                .title("정상 값")
                .viewCount(100L)
                .likeCount(80L)
                .unlikeCount(60L)
                .commentCount(40L)
                .build());
                
        // when
        List<RankDto> result = rankProcessor.process(specialTestPosts);
        
        // then
        assertNotNull(result);
        
        // 조회수 랭킹 확인 (null 필터링 확인)
        List<RankDto> viewRanks = result.stream()
                .filter(r -> "V".equals(r.getFlag()))
                .toList();
        
        // null 값이 아닌 게시물만 조회수 랭킹에 포함되어야 함
        assertEquals(2, viewRanks.size());
        
        // 첫 번째 조회수 랭킹이 예상대로 높은 값을 가진 게시물인지 확인
        assertEquals(203L, viewRanks.get(0).getPostIdx());
        assertEquals(100, viewRanks.get(0).getViewCount());
    }
    
    @Test
    @DisplayName("빈 리스트 처리 검증")
    void processEmptyListTest() throws Exception {
        // when
        List<RankDto> result = rankProcessor.process(new ArrayList<>());
        
        // then
        assertNotNull(result);
        assertTrue(result.isEmpty());
    }
} 