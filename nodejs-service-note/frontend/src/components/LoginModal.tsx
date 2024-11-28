import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { LoginCredentials } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import { Form, Modal, Button, Alert } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import styleUtils from "../styles/utils.module.css";
import { useState } from "react";
import { UnauthorizedError } from "../errors/http_errors";

interface LoginModalProps {
  onDismiss: () => void; // 모달 닫기 콜백 함수
  onLoginSuccessful: (user: User) => void; // 로그인 성공 콜백 함수
}

const LoginModal = ({ onDismiss, onLoginSuccessful }: LoginModalProps) => {
  const [errorText, setErrorText] = useState<string | null>(null); // 에러 메시지 상태 관리
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>(); // react-hook-form을 사용하여 폼 관련 기능 초기화

  // 폼 제출 시 호출되는 콜백 함수
  async function onSubmit(credentials: LoginCredentials) {
    try {
      const user = await NotesApi.login(credentials); // 로그인 API를 호출하여 사용자 정보를 받아옴
      onLoginSuccessful(user); // 로그인 성공 콜백 함수 호출하여 사용자 정보 전달
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        setErrorText(error.message); // 인증되지 않은 오류인 경우 에러 메시지를 설정하여 표시
      } else {
        alert(error); // 다른 오류인 경우 알림으로 표시
      }
      console.error(error);
    }
  }

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorText && <Alert variant="danger">{errorText}</Alert>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* 유저명 입력 필드 */}
          <TextInputField
            name="username"
            label="Username"
            type="text"
            placeholder="Username"
            register={register}
            registerOptions={{ required: "Required" }}
            error={errors.username}
          />
          {/* 비밀번호 입력 필드 */}
          <TextInputField
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            register={register}
            registerOptions={{ required: "Required" }}
            error={errors.password}
          />
          {/* 로그인 버튼 */}
          <Button type="submit" disabled={isSubmitting} className={styleUtils.width100}>
            Log In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
