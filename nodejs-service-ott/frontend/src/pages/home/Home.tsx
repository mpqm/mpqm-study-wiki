import { useState } from "react";
import Content from "../../components/content/Content";
import Navbar from "../../components/navbar/Navbar";
import { UserModel } from "../../network/Model";
import "./home.scss";
interface HomeProps {
  type: string; // 영화인지 시리즈인지
  loggedInUser: UserModel | null // 로그인한 UserModel타입의 유저객체
  onLogoutSuccessful: () => void // 로그아웃 콜백함수
}
const Home = ({ type, loggedInUser, onLogoutSuccessful }: HomeProps) => {
  // 현재 선택된 장르를 상태로 관리, 기본값 문자열
  const [genre, setGenre] = useState(String)
  return (
    <div className='home'>
      {/* Navbar 컴포넌트를 렌더링*/}
      <Navbar
        type={type} // 영화인지 시리즈인지를 Navbar 컴포넌트에 전달
        loggedInUser={loggedInUser} // 로그인한 사용자 정보를 Navbar 컴포넌트에 전달
        setGenre={(genre) => setGenre(genre)} // 장르를 선택했을 때 해당 값을 상태에 업데이트하는 함수를 Navbar 컴포넌트에 전달
        onLogoutSuccessful={onLogoutSuccessful} // 로그아웃 성공 시 호출되는 콜백 함수를 Navbar 컴포넌트에 전달
      />
      {/* Content 컴포넌트를 렌더링 */}
      <Content type={type} genre={genre} />
    </div>
  )
}

export default Home