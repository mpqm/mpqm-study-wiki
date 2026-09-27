package com.fornet.auto.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

// 웹 설정 클래스
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${file.upload-dir:src/main/resources/upload}")
    private String uploadDir;

    // 정적 리소스 핸들러 설정 @param registry 리소스 핸들러 레지스트리
    @Override
    public void addResourceHandlers(@NonNull ResourceHandlerRegistry registry) {
        Path uploadPath = Paths.get(uploadDir);
        String uploadAbsolutePath = uploadPath.toFile().getAbsolutePath();

        registry.addResourceHandler("/upload/**")
                .addResourceLocations("file:" + uploadAbsolutePath + "/");
    }

} 