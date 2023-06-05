
import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import {createRouter, createWebHashHistory} from "vue-router";
import routes from '@/router';


const router =createRouter({
    history:createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount('#app');
