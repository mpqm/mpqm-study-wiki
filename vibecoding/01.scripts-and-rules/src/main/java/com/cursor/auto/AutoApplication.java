package com.fornet.auto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.TimeZone;

@SpringBootApplication
@EnableScheduling
public class AutoApplication {

	public static void main(String[] args) {
		// 애플리케이션 시작 시 JVM의 기본 시간대를 한국 시간(KST)으로 설정
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
		SpringApplication.run(AutoApplication.class, args);
	}

}
