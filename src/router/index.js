import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: () => import('@/views/main/main.vue'),
      name: '首页',
      children: [
        {
          path: '/main/user/list',
          component: () => import('@/views/main/user/user-list.vue'),
          name: '用户管理'
        },
        {
          path: '/main/user/create',
          component: () => import('@/views/main/user/user-create.vue'),
          name: '用户添加'
        },
        {
          path: '/main/user/update',
          component: () => import('@/views/main/user/user-update.vue'),
          name: '用户修改'
        },
        {
          path: '/main/analysis/display',
          component: () => import('@/views/main/analysis/analysis-display.vue'),
          name: '数据展示'
        }
      ]
    }
  ]
})

export default router
