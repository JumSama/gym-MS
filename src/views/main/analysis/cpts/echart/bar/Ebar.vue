<template>
  <div id="bar" style="width: 400px; height: 400px" ref="bar"></div>
</template>

<script>
import {
  onBeforeMount,
  // onBeforeUnmount,
  onMounted,
  ref,
  watch
} from 'vue'
import echarts from '../index'
export default {
  props: {
    resize: Object
  },
  setup(props) {
    console.log('子create')
    const datas = ref(null)
    const bar = ref(null)
    let echartDom = null
    // 模拟异步请求
    setTimeout(() => {
      datas.value = [5, 20, 36, 10, 10, 20]
    }, 1000)

    setTimeout(() => {
      datas.value = [5, 40, 36, 20, 10, 80]
    }, 2000)

    setTimeout(() => {
      datas.value = [5, 60, 36, 18, 30, 20]
    }, 3000)

    onMounted(() => {
      // 基于准备好的dom，初始化echarts实例
      echartDom = echarts.init(bar.value)
      // 定义大小
      echartDom.resize(props.resize)
      // 加载动画
      // myChart.showLoading()
      // 绘制图表
      echartDom.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: []
          }
        ]
      })
      // 监听数据的动态改变
      watch(
        () => datas.value,
        () => {
          echartDom.setOption({
            title: {
              text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
              {
                name: '销量',
                type: 'bar',
                data: datas.value
              }
            ]
          })
        }
      )
    })
    // onBeforeUnmount(() => {
    //   echartDom.dispose()
    // })
    return {
      bar
    }
  }
}
</script>
