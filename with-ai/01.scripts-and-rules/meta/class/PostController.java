
import java.io.*;
import java.util.*;

/**
 * 
 */
public class PostController {

    /**
     * Default constructor
     */
    public PostController() {
    }

    /**
     * 
     */
    private FileUploadUtil fileUploadUtil;

    /**
     * 
     */
    private PostService postService;

    /**
     * 
     */
    private CodeDao codeDao;

    /**
     * 
     */
    public PostController() {
        // TODO implement here
    }

    /**
     * @param postDto 
     * @param files 
     * @return
     */
    public ResponseEntity<BaseRes<void>> inserPost(PostDto postDto, MultiPartFile[] files) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @param postDto 
     * @param files 
     * @return
     */
    public ResponseEntity<BaseRes<void>> updatePost(Long idx, PostDto postDto, MultiPartFile[] files) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @param password 
     * @return
     */
    public ResponseEntity<BaseRes<void>> deletePost(Long idx, String password) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @return
     */
    public ResponseEntity<BaseRes<PostDetailDto>> getPost(Long idx) {
        // TODO implement here
        return null;
    }

    /**
     * @param postQueryDto 
     * @return
     */
    public ResponseEntity<BaseRes<PaginationResDto>> getPosts(PostQueryReqDto postQueryDto) {
        // TODO implement here
        return null;
    }

    /**
     * @param postQueryDto 
     * @return
     */
    public ResponseEntity<BaseRes<PaginationResDto>> searchPosts(PostQueryReqDto postQueryDto) {
        // TODO implement here
        return null;
    }

    /**
     * @param model 
     * @return
     */
    public String goPostListPage(Model model) {
        // TODO implement here
        return "";
    }

    /**
     * @param model 
     * @return
     */
    public String goPostEditPage(Model model) {
        // TODO implement here
        return "";
    }

    /**
     * @param model 
     * @return
     */
    public String goPostDetailPage(Model model) {
        // TODO implement here
        return "";
    }

    /**
     * @param idx 
     * @return
     */
    public ResponseEntity<BaseRes<void>> increaseLikeCount(Long idx) {
        // TODO implement here
        return null;
    }

    /**
     * @param idx 
     * @return
     */
    public ResponseEntity<BaseRes<void>> increaseUnlikeCount(Long idx) {
        // TODO implement here
        return null;
    }

}