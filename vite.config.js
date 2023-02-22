import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // vite可配置别名，解决./…/问题，类似于Vue里面的@
  resolve: {
    alias:{
      '@': path.resolve( __dirname, './src' )
    }
  },
  // 全局的mixin 样式问题，可以通过vite进行配置
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import '@/assets/style/base.scss';`
  //     }
  //   }
  // },
  server:{
    host:'localhost',
    port: 5173,
    proxy: {
      // 代理接口，当出现api时代理到3000端口
      "/api": {
        target: 'http://localhost:3000'
      }
    }
  },
  plugins: [vue()]
})
