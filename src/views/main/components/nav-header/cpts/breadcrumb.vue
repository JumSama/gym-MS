<template>
  <el-breadcrumb separator="/">
    <template v-for="path in paths" :key="path">
      <el-breadcrumb-item :to="{ path: '/' }">{{ path }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const props = defineProps({
  breadcrumbList: Object
})
const route = useRoute()
const paths = computed(() => {
  return route.path.split('/').map((el) => {
    return props.breadcrumbList[el]
  })
})
</script>
