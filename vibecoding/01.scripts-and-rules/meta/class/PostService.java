
import java.io.*;
import java.util.*;

/**
 * 
 */
public class PostService {

    /**
     * Default constructor
     */
    public PostService() {
    }

    /**
     * 
     */
    private PostDao postDao;

    /**
     * 
     */
    private void codeDao;

    /**
     * 
     */
    private PostImageDao postImageDao;

    /**
     * 
     */
    private void cryptoUtil;

    /**
     * 
     */
    public PostService() {
        // TODO implement here
    }

    /**
     * @param postDto 
     * @param fileNames 
     * @return
     */
    public void insertPost(PostDto postDto, String[] fileNames) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @param postDto 
     * @param fileNames 
     * @return
     */
    public void updatePost(Long idx, PostDto postDto, String[] fileNames) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @param password 
     * @return
     */
    public void deletePost(Long idx, String password) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @return
     */
    public PostDetailDto getPost(Long idx) {
        // TODO implement here
        return null;
    }

    /**
     * @param postQuerReqyDto 
     * @return
     */
    public PaginationResDto getPosts(PostQueryReqDto postQuerReqyDto) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @return
     */
    public void increaseLikeCount(Long idx) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @return
     */
    public void increaseUnlikeCount(Long idx) {
        // TODO implement here
        return null;
    }

}