<template>
  <div class="pie" style="width: 400px; height: 400px" ref="chartDom"></div>
</template>

<script>
import { onMounted, ref } from 'vue'
import echarts from '../index'
export default {
  setup() {
    const chartDom = ref(null)
    onMounted(() => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(chartDom.value)
      myChart.setOption({
        title: {
          text: '运动人群占比',
          left: true
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom'
        },
        series: [
          {
            name: '年龄段',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '20岁以下' },
              { value: 735, name: '20-30岁' },
              { value: 580, name: '30-40岁' },
              { value: 484, name: '40岁以上' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    })
    return {
      chartDom
    }
  }
}
</script>

<style lang="scss" scoped>
.pie {
  box-shadow: 0 0 2px #666;
  border-radius: 4px;
}
</style>
