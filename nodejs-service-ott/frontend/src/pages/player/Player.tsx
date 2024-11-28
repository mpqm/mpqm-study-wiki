import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from "react-router-dom";
import "./player.scss";

const Player = () => {
  // useLocation 훅을 사용하여 현재 경로(location)의 정보를 가져옴
  const location = useLocation();
  
  // 이전 페이지에서 전달된 비디오 URL을 가져옴
  const video = location.state;
  
  return (
    <div className="player">
      {/* Home으로 돌아갈 수 있는 링크를 제공 */}
      <Link to="/"> <div className="back"> <ArrowBackIcon /> Home </div> </Link>
      {/* 비디오를 재생 video 태그 */}
      <video className="video" autoPlay controls src={video} />
    </div>
  )
}

export default Player