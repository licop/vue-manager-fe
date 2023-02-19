<template>
  <h1>欢迎来到登录界面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
  export default {
    name: 'Login',
    mounted() {
      this.$request({
        method: 'get',
        url: '/login',
        data: {
          name: 'jack'
        }
      }).then((res) => {
        console.log(res)
      })
    },
    methods: {
      goHome() {
        this.$router.push('/welcome')
      }
    }
  }
</script>

<style scoped>
</style>