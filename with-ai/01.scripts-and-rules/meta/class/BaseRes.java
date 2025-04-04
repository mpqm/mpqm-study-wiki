
import java.io.*;
import java.util.*;

/**
 * 
 */
public class BaseRes {

    /**
     * Default constructor
     */
    public BaseRes() {
    }

    /**
     * 
     */
    private Integer code;

    /**
     * 
     */
    private void isSuccess;

    /**
     * 
     */
    private String message;

    /**
     * 
     */
    private T data;

    /**
     * Default constructor
     */
    public BaseRes() {
        // TODO implement here
    }

    /**
     * @param baseMsg
     */
    public BaseRes(BaseMsg baseMsg) {
        // TODO implement here
    }

    /**
     * @return
     */
    public Integer getCode() {
        // TODO implement here
        return null;
    }

    /**
     * @param code 
     * @return
     */
    public void setCode(Integer code) {
        // TODO implement here
        return null;
    }

    /**
     * @return
     */
    public void getIsSuccess() {
        // TODO implement here
        return null;
    }

    /**
     * @param isSuccess 
     * @return
     */
    public void setIsSuccess(boolean isSuccess) {
        // TODO implement here
        return null;
    }

    /**
     * @return
     */
    public String getMessage() {
        // TODO implement here
        return "";
    }

    /**
     * @param message 
     * @return
     */
    public void setMessage(String message) {
        // TODO implement here
        return null;
    }

    /**
     * @return
     */
    public void getData() {
        // TODO implement here
        return null;
    }

    /**
     * @param data 
     * @return
     */
    public void setData(T data) {
        // TODO implement here
        return null;
    }

    /**
     * @param baseMsg 
     * @param data
     */
    public BaseRes(BaseMsg baseMsg, void data) {
        // TODO implement here
    }

}