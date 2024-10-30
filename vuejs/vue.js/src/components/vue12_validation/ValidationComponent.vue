    <template>
        <Form @submit="check" :validation-schema="schema">
            이메일 : <Field name="email" placeholder="이메일을 입력해주세요"></Field><br>
            <ErrorMessage name="email"></ErrorMessage><br>
                
            비밀번호 : <Field name="password" placeholder="비밀번호를 입력해주세요"></Field><br>
            <ErrorMessage name="password"></ErrorMessage><br>
            <button>가입하기</button>
        </Form>
    </template>

    <script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup'

    const schema = yup.object().shape(
        {
            email: yup
                .string()
                .email('이메일 양식대로 작성해주세요')
                .required((data) => `${data.path}는 필수입니다.`),
            password: yup
                .string()
                .min(8, (data) => `${data.path}는 최소 ${data.min}자를 입력해주세요`)
                .required((data) => `${data.path}는 필수입니다.`)
        }
    )

    const check = (values) => {
        console.log(values);
    }

    </script>