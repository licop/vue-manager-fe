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

<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/index.scss';
</style>
