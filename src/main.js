import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import config from './config'
import request from './util/request'
import storage from './util/storage'


const app = createApp(App)

// 一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage

app.use(router).use(ElementPlus).mount('#app')
