import { SignUpCredentials } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import {useForm} from "react-hook-form";
import { User } from "../models/user";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import styleUtils from "../styles/utils.module.css";
import { useState } from "react";
import { ConflictError } from "../errors/http_errors";

// SignUpModalProps 인터페이스 정의
interface SignUpModalProps {
    onDismiss: () => void; // 모달이 닫힐 때 호출되는 함수
    onSignUpSuccessful: (user: User) => void; // 회원가입이 성공했을 때 호출되는 함수, 새로 가입한 사용자를 매개변수로 받음
}

// SignUpModal 컴포넌트 정의
const SignUpModal = ({ onDismiss, onSignUpSuccessful }: SignUpModalProps) => {
    const [errorText, setErrorText] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpCredentials>();

    // 폼 제출 시 호출되는 함수
    async function onSubmit(credentials: SignUpCredentials) {
        try {
            const newUser = await NotesApi.signUp(credentials); // API를 호출하여 새로운 사용자 등록
            onSignUpSuccessful(newUser); // 회원가입 성공 이벤트 발생
        } catch (error) {
            if (error instanceof ConflictError) {
                setErrorText(error.message); // 중복 에러가 발생한 경우 에러 메시지 표시
            } else {
                alert(error); // 기타 에러가 발생한 경우 알림창으로 에러 표시
            }
            console.error(error); // 에러 로깅
        }
    }

    return (
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>회원 가입</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errorText && (
                    <Alert variant="danger">
                        {errorText}
                    </Alert>
                )}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextInputField
                        name="username"
                        label="사용자명"
                        type="text"
                        placeholder="사용자명"
                        register={register}
                        registerOptions={{ required: "필수 입력 사항입니다." }}
                        error={errors.username}
                    />
                    <TextInputField
                        name="email"
                        label="이메일"
                        type="email"
                        placeholder="이메일"
                        register={register}
                        registerOptions={{ required: "필수 입력 사항입니다." }}
                        error={errors.email}
                    />
                    <TextInputField
                        name="password"
                        label="비밀번호"
                        type="password"
                        placeholder="비밀번호"
                        register={register}
                        registerOptions={{ required: "필수 입력 사항입니다." }}
                        error={errors.password}
                    />
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={styleUtils.width100}
                    >
                        회원 가입
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default SignUpModal;
