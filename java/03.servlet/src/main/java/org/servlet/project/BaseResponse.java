package org.servlet.project;

public class BaseResponse<T> {
    private Boolean success;
    private Integer code;
    private String message;
    private T result;
    public BaseResponse(T result) {
        this.success = BaseResponseMessage.REQUEST_SUCCESS.getSuccess();
        this.code = BaseResponseMessage.REQUEST_SUCCESS.getCode();
        this.message = BaseResponseMessage.REQUEST_SUCCESS.getMessage();
        this.result = result;
    }
    public BaseResponse(BaseResponseMessage baseResponseMessage) {
        this.success = baseResponseMessage.getSuccess();
        this.code = baseResponseMessage.getCode();
        this.message = baseResponseMessage.getMessage();
    }
    public Boolean getSuccess() { return success; }
    public void setSuccess(Boolean success) { this.success = success; }
    public T getResult() { return result; }
    public void setResult(T result) { this.result = result; }
    public Integer getCode() { return code; }
    public void setCode(Integer code) { this.code = code; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
