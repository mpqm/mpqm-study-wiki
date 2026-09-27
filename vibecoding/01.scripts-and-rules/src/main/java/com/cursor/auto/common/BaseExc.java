package com.fornet.auto.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

// 기본 예외 클래스
@Getter
@Setter
@RequiredArgsConstructor
public class BaseExc extends RuntimeException {

    private Integer code;
    private Boolean isSuccess;
    private String message;
    private Object data;

    // BaseMsg 기반 생성자, @param baseMsg 기본 메시지 열거형
    public BaseExc(BaseMsg baseMsg) {
        super(baseMsg.getMessage());
        this.code = baseMsg.getCode();
        this.isSuccess = baseMsg.getIsSuccess();
        this.message = baseMsg.getMessage();
    }

    // BaseMsg + 데이터 기반 생성자 @param baseMsg 기본 메시지 열거형, object 추가 데이터
    public BaseExc(BaseMsg baseMsg, Object object) {
        super(baseMsg.getMessage());
        this.code = baseMsg.getCode();
        this.isSuccess = baseMsg.getIsSuccess();
        this.message = baseMsg.getMessage();
        this.data = object;
    }
} 