package com.fornet.auto.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

// API 응답 공통 클래스 @param <T> 응답 데이터 타입
@Getter
@Setter
@RequiredArgsConstructor
public class BaseRes<T> {

    private Integer code;
    private Boolean isSuccess;
    private String message;
    private T data;

    // BaseMsg 기반 생성자 @param baseMsg 기본 메시지 열거형
    public BaseRes(BaseMsg baseMsg) {
        this.code = baseMsg.getCode();
        this.isSuccess = baseMsg.getIsSuccess();
        this.message = baseMsg.getMessage();
    }

    // BaseMsg + 데이터 기반 생성자 @param baseMsg 기본 메시지 열거형, data 응답 데이터
    public BaseRes(BaseMsg baseMsg, T data) {
        this.code = baseMsg.getCode();
        this.isSuccess = baseMsg.getIsSuccess();
        this.message = baseMsg.getMessage();
        this.data = data;
    }

} 