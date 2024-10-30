import { createPinia, setActivePinia } from "pinia";
import { mount } from "@vue/test-utils";
import LoginComponent from "@/components/vue13_test/LoginComponent.vue";
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

describe("LoginComponent.vue", () => {
  beforeEach(() => {
    // Pinia를 활성화합니다.
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  test("이메일 입력값 검증 테스트", async () => {
    const pinia = createPinia();
    setActivePinia(pinia);
    const wrapper = mount(LoginComponent, {
      global: {
        plugins: [pinia],
        components: {
          Form,
          Field,
          ErrorMessage
        }
      }
    });
    const loginButton = wrapper.get("#login-btn");
    expect(loginButton.exists()).toBe(true);
    await loginButton.trigger("click");
    const emailErrorMessage = wrapper.find("span");
    expect(emailErrorMessage.exists()).toBe(false);
  });
});
