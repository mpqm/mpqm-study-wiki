import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieModel } from "../../network/Model";
import * as OttApi from "../../network/OttApi";
import "./contentItem.scss";

interface ContentItemProps { url: string; } // 영화의 ID

const ContentItem = ({ url }: ContentItemProps) => {
    // 마우스 호버 상태를 관리하는 상태 변수
    const [isHovered, setIsHovered] = useState(false);

    // API에서 받아온 영화 정보를 저장하는 상태 변수
    const [movie, setMovie] = useState<MovieModel | null>(null);

    useEffect(() => {
        // API를 호출하여 영화 정보를 가져오는 비동기 함수
        async function getMovies() {
            try {
                const movie = await OttApi.getMovie(url);
                setMovie(movie)
            } catch (error) { console.error(error); }
        }
        getMovies();
    }, [url])

    return (
        <div
            className="contentItem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={movie?.img} alt="" />
            {isHovered && movie && (
                <>
                    <video src={movie?.trailer} autoPlay={true} loop />
                    <div className="contentItemMore">
                        <span className="title">{movie?.title}</span>
                        <div className="icons">
                            {/* "Play" 아이콘을 클릭하면 `/player` 경로로 이동하며, 영화 비디오 정보를 state로 전달 */}
                            <Link to={`/player`} state={movie?.video}> <PlayArrowIcon className="icon" /></Link>
                            <AddIcon className="icon" />
                            <ThumbUpIcon className="icon" />
                            <ThumbDownIcon className="icon" />
                        </div>
                        <div className="sub">
                            <span className="genre">{movie?.genre}</span>
                            <span className="year">{movie?.year}</span>
                            <span className="limit">+{movie?.limit}</span>
                        </div>
                        <span className="desc">{movie?.desc}</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default ContentItem;