package com.cursor.auto.batch;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.support.SimpleJobLauncher;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.repository.support.JobRepositoryFactoryBean;
import org.springframework.batch.test.JobLauncherTestUtils;
import org.springframework.batch.test.context.SpringBatchTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.jdbc.support.JdbcTransactionManager;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.transaction.PlatformTransactionManager;

import com.fornet.auto.AutoApplication;
import com.fornet.auto.dao.PostDao;
import com.fornet.auto.dao.RankDao;
import com.fornet.auto.dto.PostDto;
import com.fornet.auto.dto.RankDto;

@SpringBatchTest
@SpringBootTest
@ActiveProfiles("test")
@ContextConfiguration(classes = {
    AutoApplication.class,
    RankingBatchIntegrationTest.BatchTestConfig.class
})
class RankingBatchIntegrationTest {

    @Autowired
    private JobLauncherTestUtils jobLauncherTestUtils;

    @Autowired
    private Job calculateRankingJob;

    @MockBean
    private PostDao postDao;

    @MockBean
    private RankDao rankDao;

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
        
        // jobLauncherTestUtils에 Job 설정
        jobLauncherTestUtils.setJob(calculateRankingJob);
    }

    @Test
    @DisplayName("랭킹 배치 작업 통합 테스트")
    void batchJobIntegrationTest() throws Exception {
        // 배치 작업 실행
        JobParameters jobParameters = new JobParametersBuilder()
                .addLong("time", System.currentTimeMillis())
                .toJobParameters();
        
        JobExecution jobExecution = jobLauncherTestUtils.launchJob(jobParameters);
        
        // 배치 작업 성공 확인
        assertEquals("COMPLETED", jobExecution.getExitStatus().getExitCode());
        
        // deleteRanks가 한 번 호출되었는지 확인
        verify(rankDao, times(1)).deleteRanks();
        
        // insertRank가 40번 호출되었는지 확인 (각 카테고리 10개씩, 총 4개 카테고리)
        verify(rankDao, times(40)).insertRank(any(RankDto.class));
    }

    @TestConfiguration
    static class BatchTestConfig {
        @Bean
        public DataSource dataSource() {
            return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .generateUniqueName(true)
                .addScript("classpath:org/springframework/batch/core/schema-drop-h2.sql")
                .addScript("classpath:org/springframework/batch/core/schema-h2.sql")
                .build();
        }

        @Bean
        public PlatformTransactionManager batchTransactionManager() {
            return new JdbcTransactionManager(dataSource());
        }

        @Bean
        public JobRepository jobRepository() throws Exception {
            JobRepositoryFactoryBean factory = new JobRepositoryFactoryBean();
            factory.setDataSource(dataSource());
            factory.setTransactionManager(batchTransactionManager());
            factory.setIsolationLevelForCreate("ISOLATION_READ_COMMITTED");
            factory.setTablePrefix("BATCH_");
            factory.afterPropertiesSet();
            return factory.getObject();
        }

        @Bean
        public JobLauncher jobLauncher() throws Exception {
            SimpleJobLauncher jobLauncher = new SimpleJobLauncher();
            jobLauncher.setJobRepository(jobRepository());
            jobLauncher.afterPropertiesSet();
            return jobLauncher;
        }

        @Bean
        public JobLauncherTestUtils jobLauncherTestUtils() throws Exception {
            JobLauncherTestUtils utils = new JobLauncherTestUtils();
            utils.setJobLauncher(jobLauncher());
            utils.setJobRepository(jobRepository());
            return utils;
        }
    }
}