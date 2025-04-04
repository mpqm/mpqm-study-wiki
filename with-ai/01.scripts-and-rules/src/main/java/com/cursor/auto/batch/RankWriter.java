package com.fornet.auto.batch;

import java.util.List;
import java.util.concurrent.locks.ReentrantLock;

import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.fornet.auto.dao.RankDao;
import com.fornet.auto.dto.RankDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class RankWriter implements ItemWriter<List<RankDto>> {

    private final RankDao rankDao;
    private final RankProcessor rankProcessor;
    private static final ReentrantLock lock = new ReentrantLock();

    @Override
    @Transactional(isolation = Isolation.SERIALIZABLE)
    public void write(Chunk<? extends List<RankDto>> chunk) throws Exception {
        if (chunk.isEmpty()) {
            return; // 비어있으면 처리하지 않음
        }
        
        // 동시 실행 방지를 위한 락 획득
        if (lock.tryLock()) {
            try {
                // 리스트가 하나만 있을 것이므로 첫 번째 항목만 가져옴
                List<RankDto> rankDtos = chunk.getItems().get(0);
                
                if (rankDtos.isEmpty()) {
                    return; // 랭킹 데이터가 없으면 처리하지 않음
                }
                
                // 기존 랭킹 데이터 모두 삭제
                int deleteCount = rankDao.deleteRanks();
                log.info("기존 랭킹 데이터 삭제: {} 건", deleteCount);
                
                // 새로운 랭킹 데이터 삽입
                int insertCount = 0;
                for (RankDto rankDto : rankDtos) {
                    Long insertedId = rankDao.insertRank(rankDto);
                    if (insertedId > 0) {
                        insertCount++;
                        log.info("랭킹 데이터 삽입: {} - {} 위, 게시물 ID: {}, 타입: {}",
                                insertedId, rankDto.getRanking(), rankDto.getPostIdx(), rankDto.getFlag());
                    }
                }
                
                log.info("총 {} 개의 랭킹 데이터 삽입 완료", insertCount);
                
                // 처리 완료 후 상태 초기화
                rankProcessor.resetState();
            } finally {
                // 항상 락 해제
                lock.unlock();
            }
        } else {
            log.info("이미 다른 랭킹 작업이 실행 중입니다. 이 작업은 건너뜁니다.");
        }
    }
}