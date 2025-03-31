
import java.io.*;
import java.util.*;

/**
 * 
 */
public interface CommentDao {

    /**
     * @param commentDto 
     * @return
     */
    public Long insertComment(CommentDto commentDto);

    /**
     * @param commentDto 
     * @return
     */
    public int updateComment(CommentDto commentDto);

    /**
     * @param commentDto 
     * @return
     */
    public int deleteComment(CommentDto commentDto);

    /**
     * @param commentQueryReqDto 
     * @return
     */
    public List<CommentDto> getComments(CommentQueryReqDto commentQueryReqDto);

    /**
     * @param commentQueryReqDto 
     * @return
     */
    public Long countComments(CommentQueryReqDto commentQueryReqDto);

    /**
     * @param idx 
     * @return
     */
    public CommentDto getComment(Long idx);

    /**
     * @param postIdx 
     * @return
     */
    public int deleteCommentByPostIdx(Long postIdx);

    /**
     * @return
     */
    public List<CommentDto> getCommentsCountRank();

}