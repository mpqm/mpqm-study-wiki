import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TextInputField from "../../components/form/TextInputField";
import { ConflictError } from "../../network/HttpErrors";
import { UserModel } from "../../network/Model";
import * as OttApi from "../../network/OttApi";
import { RegisterCredentials } from "../../network/OttApi";
import "./register.scss";


interface RegisterProps { onSignUpSuccessful: (user: UserModel) => void; }

const Register = ({ onSignUpSuccessful }: RegisterProps) => {
    const [errorText, setErrorText] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterCredentials>();
    const navi = useNavigate()

    async function onSubmit(credentials: RegisterCredentials) {
        try {
            const newUser = await OttApi.register(credentials); // OttApi.register 함수를 사용해 회원가입 시도
            // 회원가입이 성공적으로 이루어졌을 때, onSignUpSuccessful 콜백 함수를 호출하여 사용자 정보를 전달
            onSignUpSuccessful(newUser);
            // 회원가입이 완료되면 로그인 페이지로 이동
            navi("/login")
        } catch (error) {
            if (error instanceof ConflictError) { setErrorText(error.message); }
            else { alert(error); }
            console.error(error);
        }
    }

    return (
        <div className="login">
            {errorText && <Alert variant="danger">{errorText}</Alert>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>회원가입</h1>
                {/* TextInputField 컴포넌트를 사용하여 사용자명, 이메일, 비밀번호 입력 필드를 추가*/}
                <TextInputField
                    className="textInput"
                    name="username"
                    label="사용자명"
                    type="text"
                    placeholder="사용자명"
                    register={register}
                    registerOptions={{ required: "필수 입력 사항입니다." }}
                    error={errors.username}
                />

                <TextInputField
                    className="textInput"
                    name="email"
                    label="이메일"
                    type="email"
                    placeholder="이메일"
                    register={register}
                    registerOptions={{ required: "필수 입력 사항입니다." }}
                    error={errors.email}
                />

                <TextInputField
                    className="textInput"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="비밀번호"
                    register={register}
                    registerOptions={{ required: "필수 입력 사항입니다." }}
                    error={errors.password}
                />
                {/* 회원가입 버튼*/}
                <Button type="submit">회원가입</Button>
                {/* 로그인 페이지로 이동할 수 있는 링크*/}
                <Link className="link" to="/login">OLD? 로그인</Link>
            </Form>
        </div>
    );
}

export default Register