<template>
  <el-container>
    <el-aside
      :width="mainStore.isCollapse ? '60px' : '200px'"
      :class="{ transition: mainStore.isCollapse }"
    >
      <nav-side></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header></nav-header>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import navSide from './components/nav-sider/nav-side.vue'
import navHeader from './components/nav-header/nav-header.vue'
import { useMainStore } from '@/stores/mainStore'
const mainStore = useMainStore()
</script>

<style scoped>
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
}
.transition {
  transition: width 0.3s;
}
.el-container {
  height: 100vh;
  overflow: hidden;
}
.el-aside {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
