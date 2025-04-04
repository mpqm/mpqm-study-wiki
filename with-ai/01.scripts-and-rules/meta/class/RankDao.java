
import java.io.*;
import java.util.*;

/**
 * 
 */
public interface RankDao {

    /**
     * @param rankDto 
     * @return
     */
    public Long insertRank(RankDto rankDto);

    /**
     * @return
     */
    public int deleteRanks();

    /**
     * @return
     */
    public List<RankDto> getRanks();

}