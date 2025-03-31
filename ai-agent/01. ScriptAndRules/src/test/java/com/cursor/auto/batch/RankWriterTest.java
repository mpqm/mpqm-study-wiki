package com.cursor.auto.batch;

import com.fornet.auto.dao.RankDao;
import com.fornet.auto.dto.RankDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.batch.item.Chunk;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RankWriterTest {

    @Mock
    private RankDao rankDao;

    @Mock
    private RankProcessor rankProcessor;

    @InjectMocks
    private RankWriter rankWriter;

    private List<RankDto> testRanks;

    @BeforeEach
    void setUp() {
        // 테스트용 랭킹 데이터 준비
        testRanks = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            testRanks.add(RankDto.builder()
                    .ranking(i)
                    .flag("V") // 조회수 랭킹
                    .title("테스트 " + i)
                    .postIdx((long) i)
                    .viewCount(100 - i)
                    .likeCount(i)
                    .unlikeCount(i)
                    .commentCount(i)
                    .build());
        }
        
        for (int i = 1; i <= 10; i++) {
            testRanks.add(RankDto.builder()
                    .ranking(i)
                    .flag("L") // 좋아요 랭킹
                    .title("테스트 " + i)
                    .postIdx((long) i)
                    .viewCount(100 - i)
                    .likeCount(i)
                    .unlikeCount(i)
                    .commentCount(i)
                    .build());
        }
    }

    @Test
    @DisplayName("정상적인 데이터 처리 검증")
    void writeNormalDataTest() throws Exception {
        // given
        when(rankDao.deleteRanks()).thenReturn(10); // 10개 삭제된 것으로 가정
        when(rankDao.insertRank(any(RankDto.class))).thenReturn(1L); // 삽입 시 1L 반환
        
        // Chunk 생성
        Chunk<List<RankDto>> chunk = new Chunk<>(Collections.singletonList(testRanks));
        
        // when
        rankWriter.write(chunk);
        
        // then
        // deleteRanks는 한 번만 호출되어야 함
        verify(rankDao, times(1)).deleteRanks();
        
        // insertRank는 testRanks.size()만큼 호출되어야 함
        verify(rankDao, times(testRanks.size())).insertRank(any(RankDto.class));
        
        // rankProcessor.resetState()가 호출되어야 함
        verify(rankProcessor, times(1)).resetState();
    }
    
    @Test
    @DisplayName("빈 Chunk 처리 검증")
    void writeEmptyChunkTest() throws Exception {
        // given
        Chunk<List<RankDto>> emptyChunk = new Chunk<>(Collections.emptyList());
        
        // when
        rankWriter.write(emptyChunk);
        
        // then
        // 아무 메소드도 호출되지 않아야 함
        verify(rankDao, never()).deleteRanks();
        verify(rankDao, never()).insertRank(any(RankDto.class));
        verify(rankProcessor, never()).resetState();
    }
    
    @Test
    @DisplayName("빈 RankDto 목록 처리 검증")
    void writeEmptyRankDtoListTest() throws Exception {
        // given
        Chunk<List<RankDto>> chunkWithEmptyList = new Chunk<>(Collections.singletonList(new ArrayList<>()));
        
        // when
        rankWriter.write(chunkWithEmptyList);
        
        // then
        // 아무 메소드도 호출되지 않아야 함
        verify(rankDao, never()).deleteRanks();
        verify(rankDao, never()).insertRank(any(RankDto.class));
        verify(rankProcessor, never()).resetState();
    }
    
    @Test
    @DisplayName("RankDao 호출 검증")
    void rankDaoCallTest() throws Exception {
        // given
        when(rankDao.deleteRanks()).thenReturn(5); // 5개 삭제된 것으로 가정
        when(rankDao.insertRank(any(RankDto.class))).thenReturn(1L, 2L, 3L); // 순차적으로 반환값 설정
        
        // 작은 테스트 데이터
        List<RankDto> smallTestRanks = testRanks.subList(0, 3);
        Chunk<List<RankDto>> chunk = new Chunk<>(Collections.singletonList(smallTestRanks));
        
        // when
        rankWriter.write(chunk);
        
        // then
        // deleteRanks는 정확히 한 번 호출되어야 함
        verify(rankDao, times(1)).deleteRanks();
        
        // insertRank는 smallTestRanks.size()만큼 호출되어야 함
        verify(rankDao, times(smallTestRanks.size())).insertRank(any(RankDto.class));
    }
    
    @Test
    @DisplayName("예외 처리 검증 - deleteRanks 예외")
    void deleteRanksExceptionTest() throws Exception {
        // given
        when(rankDao.deleteRanks()).thenThrow(new RuntimeException("deleteRanks 오류"));
        
        Chunk<List<RankDto>> chunk = new Chunk<>(Collections.singletonList(testRanks));
        
        // then
        assertThrows(RuntimeException.class, () -> rankWriter.write(chunk));
        verify(rankDao, never()).insertRank(any(RankDto.class));
        verify(rankProcessor, never()).resetState();
    }
    
    @Test
    @DisplayName("예외 처리 검증 - insertRank 예외")
    void insertRankExceptionTest() throws Exception {
        // given
        when(rankDao.deleteRanks()).thenReturn(10);
        when(rankDao.insertRank(any(RankDto.class))).thenThrow(new RuntimeException("insertRank 오류"));
        
        Chunk<List<RankDto>> chunk = new Chunk<>(Collections.singletonList(testRanks));
        
        // then
        assertThrows(RuntimeException.class, () -> rankWriter.write(chunk));
        // deleteRanks는 호출되었지만 resetState는 호출되지 않아야 함
        verify(rankDao, times(1)).deleteRanks();
        verify(rankProcessor, never()).resetState();
    }
} 