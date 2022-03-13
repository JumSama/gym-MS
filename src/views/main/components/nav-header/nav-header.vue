<template>
  <div class="header">
    <div
      class="collapse-menu iconfont"
      :class="mainStore.isCollapse ? 'icon-zhedie2' : 'icon-zhedie1'"
      @click="collapse"
    ></div>

    <breadcrumb></breadcrumb>
    <div class="flex-1"></div>
  </div>
</template>

<script setup>
import breadcrumb from './cpts/breadcrumb.vue'
import { useMainStore } from '@/stores/mainStore.js'
const mainStore = useMainStore()
const collapse = () => {
  mainStore.isCollapse = !mainStore.isCollapse
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
