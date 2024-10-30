<template>
    <div>
    X : <input type="text" v-model.number="x" /><br/>
    Y : <input type="text" v-model.number="y" /><br/>
    <button @click="calcAdd">덧셈</button><br>
    <div>결과: {{ result }}</div>
    </div>
</template>

<script setup>
    // setup 컴포넌트 옵션
    // data, methods, computed 옵션이 사라지고 초기화 하는 작업은 setup()에서 다 처리
    // setup 이 실행될 때, 컴포넌트 인스턴스가 아직 생성되지않아 setup 옵션 내에 this 가 존재않음
    // 즉,  props 를 제외하고, 컴포넌트 내 다른 속성에 접근할 수 없음;
    import { ref, computed, defineProps, defineEmits } from 'vue';
    // data()에서 변수 만들던 방법
    // data() { return { x:10, y:10 } }
    // ref: 반응성을 가진 변수 생성, 기본 타입
    const x = ref(10);
    const y = ref(20);
    const result = ref(0)
    const calcAdd = () => { result.value = x.value + y.value; }
    // computed
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2); // eslint-disable-line no-unused-vars
    // 메소드
    const increment = () => { count.value++;} // eslint-disable-line no-unused-vars
    // 라이프 사이클
    // onCreated()는 제공하지 않는다.
    // eslint-disable-next-line no-undef
    onMounted(() => { console.log('Component mounted'); }); // eslint-disable-line no-unused-vars
    // props
    const props = defineProps(['test'])
    console.log(props.test)
    // emits
    defineEmits(['test1', 'test2'])
</script>