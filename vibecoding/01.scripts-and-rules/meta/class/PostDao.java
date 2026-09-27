
import java.io.*;
import java.util.*;

/**
 * 
 */
public interface PostDao {

    /**
     * @param postDto 
     * @return
     */
    public Long insertPost(PostDto postDto);

    /**
     * @param postDto 
     * @return
     */
    public int updatePost(PostDto postDto);

    /**
     * @param idx 
     * @return
     */
    public int deletePost(Long idx);

    /**
     * @param idx 
     * @return
     */
    public PostDto getPost(Long idx);

    /**
     * @param postQueryReqDto 
     * @return
     */
    public List<PostDto> getPosts(PostQueryReqDto postQueryReqDto);

    /**
     * @param idx 
     * @return
     */
    public int increaseLikeCount(Long idx);

    /**
     * @param idx 
     * @return
     */
    public int increaseUnlikeCount(Long idx);

    /**
     * @param idx 
     * @return
     */
    public int increaseViewCount(Long idx);

    /**
     * @param postQueryReqDto 
     * @return
     */
    public Long countPosts(PostQueryReqDto postQueryReqDto);

    /**
     * @return
     */
    public List<PostDto> getBatch();

}