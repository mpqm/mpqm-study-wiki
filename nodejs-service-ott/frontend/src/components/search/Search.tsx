import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from "react";
import { Link } from "react-router-dom";
import { MovieModel } from "../../network/Model";
import * as OttApi from "../../network/OttApi";
import "./search.scss";

interface SearchProps {
    type: string; // 영화인지 시리즈인지
    genre: string; // 장르
}

const Search = ({ type, genre }: SearchProps) => {
    // 마우스 hover 여부를 감지하는 state
    const [isHovered, setIsHovered] = useState(false);
    // 검색된 영화 정보를 담을 state
    const [movie, setMovie] = useState<MovieModel | null>(null);
    // 검색어를 담을 state
    const [searchWord, setSearchWord] = useState('');

    // 영화 검색 비동기 함수
    async function getMovies() {
        try {
            // 검색어가 공백이거나 검색 타입이 "search"가 아니라면 검색 결과를 초기화하고 함수 종료
            if (searchWord.trim() === '' || type !== "search") {
                setMovie(null);
                return;
            }
            // API를 통해 검색어로 영화를 검색하고 결과를 movie state에 저장
            const movie = await OttApi.getMovieByTitle(searchWord);
            setMovie(movie[0]);

        } catch (error) {
            console.error(error);
        }
    }
    const handleSearch = () => {
        getMovies(); // 검색 버튼을 클릭하면 영화 검색 함수 실행
    };

    return (
        <div className="search">
            {/* 검색 바 */}
            <div className="searchBar">
                <input
                    type="text"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    placeholder="검색어를 입력하세요"
                />
                <button onClick={handleSearch}>검색</button>
            </div>
            {/* 검색된 영화 정보 표시 */}
            <div className="movieItem"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {/* 검색된 영화의 이미지 표시 */}
                <img src={movie?.img} alt="" />
                {/* 마우스가 영화 정보 위에 있는 경우에만 보이는 요소들 */}
                {isHovered && (
                    <>
                        {/* 검색된 영화의 트레일러 비디오 플레이어 */}
                        <video src={movie?.trailer} autoPlay={true} loop />
                        <div className="searchMore">
                            {/* 영화 관련 추가 기능 버튼 */}
                            <span className="title">{movie?.title}</span>
                            <div className="icons">
                                {/* 영화 플레이어로 이동하는 링크 */}
                                <Link to={`/player`} state={movie?.video}> <PlayArrowIcon className="icon" /></Link>
                                <AddIcon className="icon" />
                                <ThumbUpIcon className="icon" />
                                <ThumbDownIcon className="icon" />
                            </div>
                            {/* 영화의 장르, 출시년도, 연령 제한 정보 */}
                            <div className="sub">
                                <span className="genre">{movie?.genre}</span>
                                <span className="year">{movie?.year}</span>
                                <span className="limit">+{movie?.limit}</span>
                            </div>
                            {/* 영화 설명 */}
                            <span className="desc">{movie?.desc}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Search;