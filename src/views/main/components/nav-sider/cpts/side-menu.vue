<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    :default-active="nowPath"
    text-color="#fff"
    :collapse="mainStore.isCollapse"
    :unique-opened="false"
    :router="true"
  >
    <div class="logo">
      <!-- <span>GYM管理系统</span> -->
    </div>

    <el-sub-menu v-for="menu in menuList" :index="menu.id" :key="menu.id">
      <template #title>
        <div class="iconfont" :class="menu.icon"></div>
        <span>{{ menu.title }}</span>
      </template>
      <el-menu-item
        v-for="child in menu.children"
        :key="child.id"
        :index="child.url"
      >
        <span class="iconfont icon-tiaoxuanxiangmu"></span>
        {{ child.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore.js'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
defineProps({
  menuList: Array
})
const route = useRoute()
const mainStore = useMainStore()
const nowPath = computed(() => route.path)
</script>

<style scoped>
.el-menu {
  height: 100vh;
}
.iconfont {
  margin-right: 8px;
}
</style>
