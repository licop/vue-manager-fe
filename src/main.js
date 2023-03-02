import { createApp, onBeforeMount } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import config from './config'
import request from './utils/request'
import storage from './utils/storage'
import api from './api'
import store from './store'

const app = createApp(App)

// 通过指令控制按钮的显示
app.directive('has', {
  beforeMount: (el, binding) => {
    let actionList = storage.getItem('actionList')

    let value = binding.value
    let hasPermission = actionList.includes(value)
    if(!hasPermission) {
      el.style = 'display:none'
      // 宏任务
      setTimeout(() => {
        el.parentNode.removeChild(el)
      })
    }
  }
})

// 一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。
app.config.globalProperties.$request = request
app.config.globalProperties.$api = api
app.config.globalProperties.$storage = storage

// 注册全局图标
for (let [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(store).use(ElementPlus, { size: "small" }).mount('#app')
