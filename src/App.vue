<template>
  <router-view></router-view>
</template>

<script>
  
  export default {
    name: 'App',
    mounted() {
      this.$storage.setItem("name", "Tom")
    }
  }
</script>

<style scoped>
</style>
