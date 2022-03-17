<template>
  <div class="search-bar">
    <el-input
      class="search-input"
      v-model="searchValue"
      :clearable="true"
    ></el-input>
    <el-button type="primary" class="search-btn" @click="onSubmit"
      >搜索用户</el-button
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['search'])
const searchValue = ref(null)
const onSubmit = () => {
  emit('search', searchValue.value)
}
</script>

<style lang="scss" scoped>
.search-bar {
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 40%;
  .search-input {
    height: 100%;
  }
  .search-btn {
    margin-left: 4px;
  }
}
</style>
