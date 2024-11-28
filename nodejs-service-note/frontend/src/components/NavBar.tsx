import { Container, Navbar, Nav } from "react-bootstrap";
import { User } from "../models/user";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedOutView";
import { Link } from "react-router-dom";

interface NavBarProps {
  loggedInUser: User | null; // 현재 로그인한 사용자 객체
  onSignUpClicked: () => void; // 회원 가입 클릭 콜백 함수
  onLoginClicked: () => void; // 로그인 클릭 콜백 함수
  onLogoutSuccessful: () => void; // 로그아웃 완료 콜백 함수
}

const NavBar = ({ loggedInUser, onSignUpClicked, onLoginClicked, onLogoutSuccessful }: NavBarProps) => {
  return (
    <Navbar bg="primary" variant="dark" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Note</Navbar.Brand> {/*로고 링크*/}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} to="/privacy">
              Privacy
            </Nav.Link> {/*개인 정보 페이지 링크*/}
          </Nav>
          <Nav className="ms-auto">
            {loggedInUser ? (
              <NavBarLoggedInView
                user={loggedInUser}
                onLogoutSuccessful={onLogoutSuccessful} // 로그인된 상태에서 표시되는 네비게이션 바 뷰
              />
            ) : (
              <NavBarLoggedOutView
                onLoginClicked={onLoginClicked}
                onSignUpClicked={onSignUpClicked} // 로그아웃된 상태에서 표시되는 네비게이션 바 뷰
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
