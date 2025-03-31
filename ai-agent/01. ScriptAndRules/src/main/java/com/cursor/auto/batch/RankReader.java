package com.fornet.auto.batch;

import com.fornet.auto.dao.PostDao;
import com.fornet.auto.dto.PostDto;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.item.ItemReader;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class RankReader implements ItemReader<List<PostDto>> {

    private final PostDao postDao;
    private boolean dataRead = false;

    @Override
    public synchronized List<PostDto> read() throws Exception {
        if (!dataRead) {
            List<PostDto> posts = postDao.getBatch();
            dataRead = true;
            return posts;
        }
        return null; // 첫 번째 호출 이후에는 null 반환하여 읽기 종료
    }
    
    public void reset() {
        dataRead = false;
    }
}
