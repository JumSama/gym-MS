<template>
  <div>
    <side-menu :menuList="menuList"></side-menu>
  </div>
</template>

<script setup>
import sideMenu from './cpts/side-menu.vue'
const menuList = [
  {
    id: '1',
    title: '数据面板',
    icon: 'icon-fenxi',
    children: [{ id: '1-1', title: '数据展示', url: '/main/analysis/display' }]
  },
  {
    id: '2',
    title: '用户管理',
    icon: 'icon-yonghuguanli',
    children: [
      { id: '2-1', title: '用户列表', url: '/main/user/list' },
      { id: '2-2', title: '用户添加', url: '/main/user/create' }
    ]
  }
]
</script>

<style scoped></style>
