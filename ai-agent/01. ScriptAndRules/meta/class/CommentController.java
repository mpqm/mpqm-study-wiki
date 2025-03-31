
import java.io.*;
import java.util.*;

/**
 * 
 */
public class CommentController {

    /**
     * Default constructor
     */
    public CommentController() {
    }

    /**
     * 
     */
    private CommentService commentService;

    /**
     * Default constructor
     */
    public CommentController() {
        // TODO implement here
    }

    /**
     * @param commentDto 
     * @return
     */
    public ResponseEntity<BaseRes<void>> insertComment(CommentDto commentDto) {
        // TODO implement here
        return null;
    }

    /**
     * @param commentDto 
     * @return
     */
    public ResponseEntity<BaseRes<void>> updateComment(CommentDto commentDto) {
        // TODO implement here
        return null;
    }

    /**
     * @param commentDto 
     * @return
     */
    public ResponseEntity<BaseRes<void>> deleteComment(CommentDto commentDto) {
        // TODO implement here
        return null;
    }

    /**
     * @param commentQuerReqyDto 
     * @return
     */
    public ResponseEntity<BaseRes<PaginationResDto<CommentDto>>> getComments(CommentQueryReqDto commentQuerReqyDto) {
        // TODO implement here
        return null;
    }

}