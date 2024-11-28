import { Button, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/notes_api";

interface NavBarLoggedInViewProps {
  user: User; // 현재 로그인한 사용자 객체
  onLogoutSuccessful: () => void; // 로그아웃 완료 콜백 함수
}

const NavBarLoggedInView = ({ user, onLogoutSuccessful }: NavBarLoggedInViewProps) => {
  // 로그아웃 버튼 클릭 시 호출되는 함수
  async function logout() {
    try {
      await NotesApi.logout(); // 로그아웃 API 호출
      onLogoutSuccessful(); // 로그아웃 완료 콜백 함수 호출
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <>
      <Navbar.Text className="me-2">signed in as: {user.username}</Navbar.Text> {/*로그인한 사용자명 표시*/}
      <Button onClick={logout}>Logout</Button> {/*로그아웃 버튼*/}
    </>
  );
};

export default NavBarLoggedInView;
