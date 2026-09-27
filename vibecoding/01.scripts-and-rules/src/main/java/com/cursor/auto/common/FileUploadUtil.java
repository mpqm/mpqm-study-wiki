package com.fornet.auto.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

// 파일 업로드 유틸리티 클래스
@Component
public class FileUploadUtil {

    @Value("${file.upload-dir:src/main/resources/upload}")
    private String uploadDir;

    // 단일 파일 업로드 @param file 업로드할 파일 @return 업로드된 파일명 @throws IOException 파일 처리 오류
    public String uploadFile(MultipartFile file) throws IOException {
        if (file == null || file.isEmpty()) return null;
        
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path uploadPath = Paths.get(uploadDir);
        
        if (!Files.exists(uploadPath)) Files.createDirectories(uploadPath);

        Files.copy(file.getInputStream(), uploadPath.resolve(fileName));
        return fileName;
    }

    // 다중 파일 업로드 @param files 업로드할 파일 배열 @return 업로드된 파일명 목록 @throws IOException 파일 처리 오류
    public List<String> uploadFiles(MultipartFile[] files) throws IOException {
        List<String> fileNames = new ArrayList<>();
        
        if (files == null) return fileNames;
        
        for (MultipartFile file : files) {
            if (!file.isEmpty()) {
                String fileName = uploadFile(file);
                if (fileName != null)  fileNames.add(fileName);
            }
        }
        
        return fileNames;
    }
} 