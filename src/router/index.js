import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import storage from './../utils/storage'
import API from './../api'
import utils from './../utils/utils'

const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页'
        },
        component: () => import('@/views/Welcome.vue')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/Login.vue')
  },
  {
    name: '404',
    path: '/404',
    meta: {
      title: '页面不存在'
    },
    component: () => import('@/views/404.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 根据menu动态加载路由
async function loadAsyncRoutes() {
  let userInfo = storage.getItem('userInfo') || {}
  if (userInfo.token) {
    try {
      const { menuList } = await API.getPermissionList()
      let routes = utils.generateRoute(menuList)
      // Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
      // https://cn.vitejs.dev/guide/features.html#glob-import
      const modules = import.meta.glob('../views/\*.vue') 
      console.log('views', modules)
      routes.map(route => {
        let url = `../views/${route.name}.vue`
        route.component = modules[url];
        // 添加路由
        router.addRoute("home", route);
      })
    } catch (error) {
      console.log(error)
    }
  }
}

loadAsyncRoutes();

// 导航守卫
router.beforeEach(async (to, from, next) => {
  if (to.name) {
    // hasRoute判断路由是否存在
    if (router.hasRoute(to.name)) {
      document.title = to.meta.title;
      next()
    } else {
      next('/404')
    }
  } else {
    await loadAsyncRoutes()
    let curRoute = router.getRoutes().filter(item => item.path == to.path)
    if (curRoute?.length) {
      document.title = curRoute[0].meta.title;
      next({ ...to, replace: true })
    } else {
      next('/404')
    }
  }
})


export default router