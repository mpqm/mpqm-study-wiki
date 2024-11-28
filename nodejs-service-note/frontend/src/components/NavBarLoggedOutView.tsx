import { Button } from "react-bootstrap";

interface NavBarLoggedOutViewProps {
  onSignUpClicked: () => void; // 회원 가입 클릭 콜백 함수
  onLoginClicked: () => void; // 로그인 클릭 콜백 함수
}

const NavBarLoggedOutView = ({ onSignUpClicked, onLoginClicked }: NavBarLoggedOutViewProps) => {
  return (
    <>
      <Button onClick={onSignUpClicked}>Sign Up</Button> {/*회원 가입 버튼*/}
      <Button onClick={onLoginClicked}>Log In</Button> {/*로그인 버튼*/}
    </>
  );
};

export default NavBarLoggedOutView;
