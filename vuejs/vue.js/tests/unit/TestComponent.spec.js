import { shallowMount } from "@vue/test-utils"
import TestComponent from "@/components/vue13_test/TestComponent.vue" 


describe('TestComponent.vue', () => {
    it('renders props.msg when passed', () => {
      // 변수
      const msg = 'new message'
      // vue 컴포넌트 파일 불러오기
      const wrapper = shallowMount(TestComponent, { props: { msg } })
      // 확인
      expect(wrapper.text()).toMatch(msg)
    })
  })