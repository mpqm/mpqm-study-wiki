package com.cursor.auto.batch;

import com.fornet.auto.dao.PostDao;
import com.fornet.auto.dto.PostDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RankReaderTest {

    @Mock
    private PostDao postDao;

    @InjectMocks
    private RankReader rankReader;

    private List<PostDto> testPosts;

    @BeforeEach
    void setUp() {
        // 테스트용 게시물 데이터 준비
        testPosts = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            testPosts.add(PostDto.builder()
                    .idx((long) i)
                    .title("테스트 " + i)
                    .build());
        }
    }

    @Test
    @DisplayName("정상적인 데이터 읽기 검증")
    void readNormalDataTest() throws Exception {
        // given
        when(postDao.getBatch()).thenReturn(testPosts);

        // when
        List<PostDto> firstRead = rankReader.read();
        List<PostDto> secondRead = rankReader.read();

        // then
        assertNotNull(firstRead);
        assertEquals(testPosts.size(), firstRead.size());
        assertNull(secondRead); // 두 번째 호출은 null 반환

        // getBatch는 한 번만 호출되어야 함
        verify(postDao, times(1)).getBatch();
    }

    @Test
    @DisplayName("reset() 메소드 검증")
    void resetTest() throws Exception {
        // given
        when(postDao.getBatch()).thenReturn(testPosts);

        // when
        List<PostDto> firstRead = rankReader.read();
        List<PostDto> secondRead = rankReader.read();
        
        // then
        assertNotNull(firstRead);
        assertNull(secondRead); // 두 번째 호출은 null 반환
        
        // reset 호출
        rankReader.reset();
        
        // reset 후 다시 read() 호출
        List<PostDto> thirdRead = rankReader.read();
        
        // then
        assertNotNull(thirdRead);
        assertEquals(testPosts.size(), thirdRead.size());
        
        // getBatch는 총 두 번 호출되어야 함
        verify(postDao, times(2)).getBatch();
    }

    @Test
    @DisplayName("빈 리스트 반환 검증")
    void readEmptyListTest() throws Exception {
        // given
        when(postDao.getBatch()).thenReturn(new ArrayList<>());

        // when
        List<PostDto> result = rankReader.read();

        // then
        assertNotNull(result);
        assertTrue(result.isEmpty());
    }

    @Test
    @DisplayName("null 반환 검증")
    void readNullTest() throws Exception {
        // given
        when(postDao.getBatch()).thenReturn(null);

        // when
        List<PostDto> result = rankReader.read();

        // then
        assertNull(result);
    }

    @Test
    @DisplayName("예외 처리 검증")
    void readExceptionTest() throws Exception {
        // given
        when(postDao.getBatch()).thenThrow(new RuntimeException("데이터베이스 오류"));

        // then
        assertThrows(RuntimeException.class, () -> rankReader.read());
    }
} 