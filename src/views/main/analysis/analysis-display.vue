<template>
  <div class="display">
    <Eline></Eline>
    <div class="task-list">
      <task-progress v-for="item in 6" :key="item"></task-progress>
    </div>
    <div class="analysis-list">
      <Epie></Epie>
      <Epie></Epie>
    </div>
  </div>
</template>

<script setup>
import Eline from './cpts/echart/line/Eline.vue'
import Epie from './cpts/echart/pie/Epie.vue'
import taskProgress from './cpts/other/task-progress.vue'
</script>

<style lang="scss" scoped>
.display {
  height: 100%;
}
.task-list {
  margin: 6px 0;
  display: flex;
  gap: 4px;
}
.analysis-list {
  display: flex;
  gap: 8px;
  margin: 0 2px;
}
</style>
