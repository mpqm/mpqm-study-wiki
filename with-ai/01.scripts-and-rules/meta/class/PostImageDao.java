
import java.io.*;
import java.util.*;

/**
 * 
 */
public interface PostImageDao {

    /**
     * @param postImageDto 
     * @return
     */
    public Long insertPostImage(PostImageDto postImageDto);

    /**
     * @param postIdx 
     * @return
     */
    public int deletePostImageByPostIdx(Long postIdx);

    /**
     * @param postIdx 
     * @return
     */
    public List<PostImageDto> getPostImagesByPostIdx(Long postIdx);

}