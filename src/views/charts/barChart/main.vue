<template lang="pug">
section.section.bar-chart-box
  div#bar-chart(style="width: 600px;height:400px;")
</template>

<style lang="stylus" scoped>
#bar-chart
  background pink
</style>

<script>
  import Echarts from 'echarts/lib/echarts'
  import BarChart from 'echarts/lib/chart/bar'
  import tooltip from 'echarts/lib/component/tooltip'
  import title from 'echarts/lib/component/title'

  export default {
    name: 'charts',

    componentName: 'charts',

    data () {
      return {

      }
    },

    mounted () {
      const myChart = Echarts.init(document.getElementById('bar-chart'))
      myChart.setOption({
        title: {
          text: '柱状图'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
</script>
