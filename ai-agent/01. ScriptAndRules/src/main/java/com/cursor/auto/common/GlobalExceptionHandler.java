package com.fornet.auto.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Objects;

// 전역 예외 처리 핸들러
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    // BaseExc 예외 처리 @param e BaseExc 예외 @return 예외 정보를 포함한 응답
    @ExceptionHandler(BaseExc.class)
    public ResponseEntity<BaseRes<String>> handleBaseException(BaseExc e) {
        return ResponseEntity.badRequest().body(new BaseRes<>(Objects.requireNonNull(BaseMsg.findByCode(e.getCode()))));
    }

    // 일반 예외 처리 @param e 일반 예외 @return 예외 정보를 포함한 응답
    @ExceptionHandler(Exception.class)
    public ResponseEntity<BaseRes<Object>> handleException(Exception e) {
        BaseRes<Object> response = new BaseRes<>(BaseMsg.ERROR);
        return ResponseEntity.status(response.getCode()).body(response);
    }
} 