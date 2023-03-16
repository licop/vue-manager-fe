<template>
  <div class="login-wrapper">
    <div class="model">
      <el-form ref="userFormRef" :model="user" status-icon :rules="rules">
        <div class="title">Vue后台管理系统</div>
        <el-form-item prop="userName">
          <el-input type="text" prefix-icon="User" v-model="user.userName" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" prefix-icon="View" v-model="user.userPwd" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login(userFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import storage from '../utils/storage'
import utils from '../utils/utils'
import api from '../api'

let user = reactive({
  userName: '',
  userPwd: ''
})

let rules= {
  userName: [
    {
      required: true, message: '请输入用户名', trigger: "blur"
    }
  ],
  userPwd: [
    {
      required: true, message: '请输入密码', trigger: "blur"
    }
  ]
}

const userFormRef = ref()
const store = useStore()
const router = useRouter()

function login(formRef) {
  formRef.validate((valid) => {
    if(valid) {
      api.login(this.user).then(async (res) => {
        store.commit('saveUserInfo', res)
        // await loadAsyncRoutes()
        router.push('/welcome')
      })
    } else {
      return false
    }
  })
}

async function loadAsyncRoutes() {
  let userInfo = storage.getItem('userInfo') || {}
  
  if(userInfo.token) {
    try {
      const { menuList } = await api.getPermissionList()
      let routes = utils.generateRoute(menuList)
      routes.map(route => {
        let url = `../views/${route.component}.vue`
        route.component = () => import(url)
        // 动态添加路由
        router.addRoute("home", route)
      })
    } catch (error) {
      console.log(error) 
    }
  }
} 

</script>

<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .model {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .title {
      font-size: 30px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>