<template>
  <div id="line" style="width: 100%; height: 400px" ref="line"></div>
</template>

<script>
import { onMounted, ref } from 'vue'
import echarts from '../index'
export default {
  props: {
    resize: Object
  },
  setup(props) {
    const datas = ref(null)
    const line = ref(null)
    let echartDom = null

    onMounted(() => {
      // 基于准备好的dom，初始化echarts实例
      echartDom = echarts.init(line.value)
      // 定义大小
      echartDom.resize(props.resize)
      // 加载动画
      // myChart.showLoading()
      // 绘制图表
      echartDom.setOption({
        title: {
          text: '访问流量',
          left: 'left'
        },
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150],
            type: 'line',
            smooth: true,
            areaStyle: {
              color: 'rgba(221, 39, 39, 1)'
            },
            emphasis: {
              disabled: false,
              label: {
                show: true,
                position: 'top',
                color: 'rgba(255, 255, 255, 1)',
                fontStyle: 'italic'
              }
            }
          }
        ]
      })
    })
    return {
      line
    }
  }
}
</script>

<style lang="scss" scoped>
#line {
  box-shadow: 0 0 2px #666;
}
</style>
