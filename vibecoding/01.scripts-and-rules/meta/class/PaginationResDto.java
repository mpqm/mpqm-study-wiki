
import java.io.*;
import java.util.*;

/**
 * 
 */
public class PaginationResDto {

    /**
     * Default constructor
     */
    public PaginationResDto() {
    }

    /**
     * 
     */
    private int totalPages;

    /**
     * 
     */
    private int currentPage;

    /**
     * 
     */
    private int pageSize;

    /**
     * 
     */
    private Long totalElements;

    /**
     * 
     */
    private List<T> data;

    /**
     * @return
     */
    public int getTotalPages() {
        // TODO implement here
        return 0;
    }

    /**
     * @param totalPages
     */
    public void setTotalPages(int totalPages) {
        // TODO implement here
    }

    /**
     * @return
     */
    public int getCurrentPage() {
        // TODO implement here
        return 0;
    }

    /**
     * @param currentPage
     */
    public void setCurrentPage(int currentPage) {
        // TODO implement here
    }

    /**
     * @return
     */
    public int getPageSize() {
        // TODO implement here
        return 0;
    }

    /**
     * @param pageSize
     */
    public void setPageSize(int pageSize) {
        // TODO implement here
    }

    /**
     * @return
     */
    public Long getTotalElements() {
        // TODO implement here
        return null;
    }

    /**
     * @param totalElements
     */
    public void setTotalElements(Long totalElements) {
        // TODO implement here
    }

    /**
     * @return
     */
    public List<T> getData() {
        // TODO implement here
        return null;
    }

    /**
     * @param data
     */
    public void setData(List<T> data) {
        // TODO implement here
    }

}