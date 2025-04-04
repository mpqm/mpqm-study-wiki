package com.cursor.auto.config;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.transaction.PlatformTransactionManager;

import com.fornet.auto.dto.PostDto;
import com.fornet.auto.dto.RankDto;

@ExtendWith(MockitoExtension.class)
class BatchConfigTest {

    @Mock
    private JobRepository jobRepository;

    @Mock
    private PlatformTransactionManager transactionManager;

    @Mock
    private ItemReader<List<PostDto>> postReader;

    @Mock
    private ItemProcessor<List<PostDto>, List<RankDto>> rankProcessor;

    @Mock
    private ItemWriter<List<RankDto>> rankWriter;

    @InjectMocks
    private BatchConfig batchConfig;

    @Test
    @DisplayName("rankingCalculationStep() 메소드 검증")
    void rankingCalculationStepTest() {
        // 실제 Step 생성
        Step step = batchConfig.rankingCalculationStep();
        
        // Step이 생성되었는지 검증
        assertNotNull(step);
    }

    @Test
    @DisplayName("calculateRankingJob() 메소드 검증")
    void calculateRankingJobTest() {
        // Mock Step
        Step mockStep = batchConfig.rankingCalculationStep();
        
        // 실제 Job 생성
        Job job = batchConfig.calculateRankingJob(mockStep);
        
        // Job이 생성되었는지 검증
        assertNotNull(job);
    }
} 