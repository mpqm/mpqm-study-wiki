package com.fornet.auto.config;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

import com.fornet.auto.dto.PostDto;
import com.fornet.auto.dto.RankDto;

import java.util.List;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class BatchConfig {

    private final JobRepository jobRepository;
    private final PlatformTransactionManager transactionManager;
    private final ItemReader<List<PostDto>> postReader;
    private final ItemProcessor<List<PostDto>, List<RankDto>> rankProcessor;
    private final ItemWriter<List<RankDto>> rankWriter;

    // 랭킹 계산 Step 생성
    @Bean
    public Step rankingCalculationStep() {
        return new StepBuilder("rankingCalculationStep", jobRepository)
                .<List<PostDto>, List<RankDto>>chunk(100, transactionManager)
                .reader(postReader)
                .processor(rankProcessor)
                .writer(rankWriter)
                .build();
    }

    // 랭킹 계산 Job 생성
    @Bean
    public Job calculateRankingJob(Step rankingCalculationStep) {
        return new JobBuilder("calculateRankingJob", jobRepository)
                .incrementer(new RunIdIncrementer())
                .start(rankingCalculationStep)
                .build();
    }
}
