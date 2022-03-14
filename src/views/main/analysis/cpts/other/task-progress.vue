<template>
  <div class="progress">
    <div><span class="iconfont icon-fenxi"></span> 游客流量</div>
    <div class="number">1234,12 <span>人</span></div>
    <el-progress :percentage="100" :format="format" />
  </div>
</template>

<script setup>
const props = defineProps({
  unit: String,
  size: Number,
  target: Number,
  title: String
})
// 是否完成当前任务
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
// 计算完成百分比
const percentage = props.size / props.target
</script>

<style lang="scss" scoped>
.progress {
  width: 200px;
  height: 100px;
  box-shadow: 0 0 2px #666;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  margin: 2px;
  padding-left: 20px;
  border-radius: 4px;
  .number {
    font-size: x-large;
    font-weight: bold;
    & span {
      font-size: 12px;
    }
  }
}
.el-progress {
  z-index: 999;
  width: 100%;
}
</style>
