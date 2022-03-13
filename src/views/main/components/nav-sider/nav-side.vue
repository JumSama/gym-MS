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
    children: [
      { id: '1-1', title: '数据展示' },
      { id: '1-2', title: '数据面板' }
    ]
  },
  {
    id: '2',
    title: '用户管理',
    icon: 'icon-yonghuguanli',
    children: [
      { id: '2-1', title: '用户列表' },
      { id: '2-2', title: '数据面板' }
    ]
  },
  {
    id: '3',
    title: '权限管理',
    icon: 'icon-quanxian',
    children: [
      { id: '3-1', title: '数据展示' },
      { id: '3-2', title: '数据面板' }
    ]
  }
]
</script>

<style scoped></style>
