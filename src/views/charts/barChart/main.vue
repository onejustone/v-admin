<template lang='pug'>
section.section.bar-chart-box
  div#bar-chart(style='width: 1000px; height:1000px')
</template>

<style lang='stylus' scoped>
#bar-chart {
  // background: pink;
}
</style>

<script>
import Echarts from 'echarts/lib/echarts';
import tooltip from 'echarts/lib/component/tooltip';
import title from 'echarts/lib/component/title';
import visualMap from 'echarts/lib/component/visualMap';
import ChengduMap from 'static/map/chengdu.json';
// import ChengduMap from 'static/map/hk.json';
// require('static/map/chengdu.js')

export default {
  name: 'charts',

  componentName: 'charts',

  data() {
    return {};
  },

  async mounted() {
    const myChart = Echarts.init(document.getElementById('bar-chart'));
    await Echarts.registerMap('chengdu' , ChengduMap);

    myChart.setOption({
      title: {
        text: '项目地图',
        subtext: 'jack'
      },
      tooltip: {
        trigger: 'item',
        formatter (params) {
          return params
        }
      },
      visualMap: {
        type: 'continuous',
        min: 800,
        max: 50000,
        text:['High','Low'],
        realtime: false,
        calculable: true,
        color: ['lightskyblue', 'yellow', 'orangered']
      },
      series: [
        {
          name: '项目统计',
          type: 'map',
          roam: false,
          mapType: 'chengdu',
          selectedMode: 'single',
          itemStyle: {
            normal: {
              label: {
                show: true
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          data: [
            {name: '都江堰市', value: 20057.34},
          ]
        }]
    })
  }
}
</script>
