import { Form } from "react-bootstrap";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFieldProps {
  name: string; // 필드의 이름
  register: UseFormRegister<any>; // react-hook-form의 register 함수
  registerOptions?: RegisterOptions; // react-hook-form의 register 옵션
  error?: FieldError; // 필드의 에러
  [x: string]: any; // 기타 추가 속성
}

const TextInputField = ({ name, label, register, registerOptions, error, ...props }: TextInputFieldProps) => {
  return (
    <Form.Group className="mb-3" controlId={name + "-input"}>
      <Form.Control
        {...props}
        {...register(name, registerOptions)} // 필드를 react-hook-form에 등록하고, 필드의 값을 추적
        isInvalid={!!error} // 필드에 에러가 있을 경우에만 isInvalid prop을 true로 설정하여 오류 스타일을 적용
      />
      <Form.Control.Feedback type="invalid">{error?.message}</Form.Control.Feedback >   {/*에러 메시지 표시*/}
    </Form.Group>
  );
};

export default TextInputField;