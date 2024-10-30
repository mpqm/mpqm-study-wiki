package org.servlet.project;

public enum BaseResponseMessage {
    // 요청 성공 1000
    REQUEST_SUCCESS(true, 1000, "요청이 정상적으로 처리되었습니다");
    // ...
    private Boolean success;
    private Integer code;
    private String message;
    BaseResponseMessage(Boolean success, Integer code, String message) {
        this.success = success;
        this.code = code;
        this.message = message;
    }
    public Boolean getSuccess() { return success; }
    public Integer getCode() { return code; }
    public String getMessage() { return message; }
}
