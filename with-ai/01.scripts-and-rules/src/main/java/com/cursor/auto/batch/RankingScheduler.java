package com.fornet.auto.batch;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.concurrent.atomic.AtomicBoolean;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class RankingScheduler {
    
    private final JobLauncher jobLauncher;
    private final Job calculateRankingJob;
    private final RankProcessor rankProcessor;
    private final RankReader rankReader;
    private final AtomicBoolean isRunning = new AtomicBoolean(false);

    // 매 10분마다 실행으로 변경 (동시성 문제 완화)
    @Scheduled(cron = "0 0/1 * * * *") 
    // @Scheduled(cron = "0 * * * * *") // 원래: 매 1분마다 실행
    // @Scheduled(cron = "0 0 * * * *") // 매 정각마다 실행 (0시, 1시, 2시 ... 23시)
    public void runRankingJob() {
        // 이미 실행 중이면 건너뜀
        if (isRunning.compareAndSet(false, true)) {
            try {
                // 상태 초기화
                rankReader.reset();
                rankProcessor.resetState();
                
                JobParameters jobParameters = new JobParametersBuilder()
                    .addLong("time", System.currentTimeMillis())
                    .toJobParameters();
                    
                log.info("랭킹 배치 작업 시작...");
                jobLauncher.run(calculateRankingJob, jobParameters);
                log.info("랭킹 배치 작업 완료");
            } catch (JobExecutionAlreadyRunningException | JobRestartException | 
                     JobInstanceAlreadyCompleteException | JobParametersInvalidException e) {
                log.error("랭킹 배치 작업 실행 중 오류 발생", e);
            } finally {
                // 작업 완료 후 플래그 초기화
                isRunning.set(false);
            }
        } else {
            log.info("이전 랭킹 작업이 아직 실행 중입니다. 이번 작업은 건너뜁니다.");
        }
    }
} 