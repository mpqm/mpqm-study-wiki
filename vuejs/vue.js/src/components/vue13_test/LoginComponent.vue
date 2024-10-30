<template>
    <div class="login-form-wrapper">
        <Form @submit="login" :validation-schema="schema">
        이메일 : <Field id="email-input" v-model="member.email" name="email" placeholder="이메일을 입력해주세요"></Field><br>
        <ErrorMessage id="email-error" name="email"></ErrorMessage><br>
            
        비밀번호 : <Field id="password-input" v-model="member.password" name="password" placeholder="비밀번호를 입력해주세요"></Field><br>
        <ErrorMessage name="password"></ErrorMessage><br>
        <button type="submit" id="login-btn">로그인</button>
    </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { useMemberStore } from '@/store/useMemberStore';
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const memberStore = useMemberStore();
const member = ref({ email: null, password: null });
const login = () => {
    console.log(member.value)
    const result = memberStore.login(member.value);
    console.log(result);
};

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
</script>