package com.example.util;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CloudFileUpload  {
    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;
    private final AmazonS3 amazonS3;

    public String upload(MultipartFile file) throws IOException {
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());
        metadata.setContentType(file.getContentType());
        String saveFileName = UUID.randomUUID()+ "_" + file.getOriginalFilename();
        amazonS3.putObject(bucketName, saveFileName, file.getInputStream(), metadata);
        return "https://"+bucketName+".s3.ap-northeast-2.amazonaws.com/"+saveFileName;
    }

    public List<String> multipleUpload(MultipartFile[] files) throws IOException{
        List<String> fileNames = new ArrayList<>();
        for (MultipartFile file : files) {
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(file.getSize());
            metadata.setContentType(file.getContentType());
            String saveFileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            amazonS3.putObject(bucketName, saveFileName, file.getInputStream(), metadata);
            fileNames.add("https://" + bucketName + ".s3.ap-northeast-2.amazonaws.com/" + saveFileName);
        }
        return fileNames;
    }
}
