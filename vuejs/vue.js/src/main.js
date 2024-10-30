    import { createApp } from 'vue'
    import App from './App.vue'
    import router from './router/index.js'
    import {createPinia} from "pinia"
    import jQuery from "jquery";
    import LoadScript from 'vue-plugin-load-script';
    import piniaPersistedstate from "pinia-plugin-persistedstate";
    
    const app = createApp(App)
    // router, pinia 에러 핸들링 x
    app.config.errorHandler = (err, vm, info) => {
        console.log(err);
        console.log(vm);
        console.log(info);
    };
    const pinia = createPinia();
    pinia.use(piniaPersistedstate)
    window.$ = window.jQuery = jQuery;
    app.use(LoadScript)
    app.use(pinia)
    app.use(router)
    app.mount('#app')