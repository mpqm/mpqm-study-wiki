import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TextInputField from "../../components/form/TextInputField";
import { UnauthorizedError } from "../../network/HttpErrors";
import { UserModel } from "../../network/Model";
import * as OttApi from "../../network/OttApi";
import { LoginCredentials } from "../../network/OttApi";
import "./login.scss";

interface LoginProps {
  onLoginUser: (user: UserModel) => void; // 사용자 정보를 전달하는 콜백 함수
  onLoginSuccessful: () => void // 로그인 성공 시 호출되는 콜백 함수
}

const Login = ({ onLoginUser, onLoginSuccessful }: LoginProps) => {
  // 에러 메시지를 표시하기 위한 상태 변수
  const [errorText, setErrorText] = useState<string | null>(null);
  // react-hook-form을 사용하여 폼 관련 기능 초기화
  const { register, handleSubmit, formState: { errors }, } = useForm<LoginCredentials>();

  // 폼을 제출했을 때 실행되는 함수
  async function onSubmit(credentials: LoginCredentials) {
    try {
      const user = await OttApi.login(credentials); // 로그인 API를 호출하여 사용자 정보를 받아옴
      onLoginUser(user) // 로그인 성공 시, 받아온 사용자 정보를 부모 컴포넌트로 전달하는 콜백 함수를 호출
      onLoginSuccessful()  // 로그인 성공 시, 로그인 성공 콜백 함수를 호출합니다.
    }
    catch (error) {
      if (error instanceof UnauthorizedError) { setErrorText(error.message); }
      else { alert(error); }
      console.error(error);
    }
  }

  return (
    <div className="login">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>로그인</h1>
        {errorText && <Alert variant="danger">{errorText}</Alert>}
        {/* TextInputField 컴포넌트를 사용하여 이메일, 비밀번호 입력 필드를 추가*/}
        <TextInputField
          className="textInput"
          name="email"
          type="email"
          placeholder="이메일"
          register={register}
          registerOptions={{ required: "필수 입력 사항입니다." }}
          error={errors.email}
        />

        <TextInputField
          className="textInput"
          name="password"
          type="password"
          placeholder="비밀번호"
          register={register}
          registerOptions={{ required: "필수 입력 사항입니다." }}
          error={errors.password}
        />
        {/* 로그인 버튼*/}
        <Button type="submit">로그인</Button>
        {/* 회원가입 페이지로 이동할 수 있는 링크 */}
        <Link className="link" to="/register">NEW? 회원가입</Link>
      </Form>
    </div>
  );
}

export default Login