<template lang="pug">
section.section.bar-chart-box
  div#bar-chart(style="width: 600px;height:400px;")
</template>

<style lang="stylus" scoped>
#bar-chart
  background pink
</style>

<script>
  import VeLine from 'v-charts/lib/line.common'

  export default {
    name: 'charts',

    componentName: 'charts',

    components: {
      VeLine
    },

    data () {
      return {

      }
    },

    mounted () {
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
