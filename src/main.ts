import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import {AxiosInstance} from 'axios';
declare module 'vue/types/vue' {
    interface Vue {
        $axios: AxiosInstance;
    }
}

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
