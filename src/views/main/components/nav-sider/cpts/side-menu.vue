<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    default-active="2-1"
    text-color="#fff"
    :collapse="mainStore.isCollapse"
    :unique-opened="false"
    :route="true"
  >
    <div class="logo">
      <span>GYM管理系统</span>
    </div>

    <el-sub-menu v-for="menu in menuList" :index="menu.id" :key="menu.id">
      <template #title>
        <div class="iconfont" :class="menu.icon"></div>
        <span>{{ menu.title }}</span>
      </template>
      <el-menu-item
        v-for="child in menu.children"
        :key="child.id"
        :index="child.id"
      >
        <el-icon><Menu /></el-icon>
        {{ child.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { User, Menu, Setting, DataAnalysis } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
import { useMainStore } from '@/stores/mainStore.js'
const mainStore = useMainStore()
const iconCpts = defineComponent({
  User,
  Setting,
  DataAnalysis
})
defineProps({
  menuList: Array
})
</script>

<style scoped>
.el-menu {
  height: 100vh;
}
.iconfont {
  margin-right: 8px;
}
</style>
