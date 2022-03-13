<template>
  <div class="header">
    <div
      class="collapse-menu iconfont"
      :class="mainStore.isCollapse ? 'icon-zhedie2' : 'icon-zhedie1'"
      @click="collapse"
    ></div>

    <breadcrumb :breadcrumbList="breadcrumbList"></breadcrumb>
  </div>
</template>

<script setup>
import breadcrumb from './cpts/breadcrumb.vue'
import { useMainStore } from '@/stores/mainStore.js'
const mainStore = useMainStore()

// 侧边栏折叠开关
const collapse = () => {
  mainStore.isCollapse = !mainStore.isCollapse
}

// 面包屑对照表
const breadcrumbList = {
  main: '首页',
  user: '用户管理',
  analysis: '数据面板',
  right: '权限管理',
  list: '列表',
  display: '数据展示'
}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #e9e9e9;
}
.collapse-menu {
  padding: 0 20px;
  font-size: 24px;
}
</style>
