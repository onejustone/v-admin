<template lang="pug">
.map-chart
  ve-map(
    :data="chartData"
    :settings="chartSettings"
    :events="chartEvents"
    height="700px"
    :resizeable="false"
    :cancel-resize-check="true"
  )
</template>

<style lang="stylus" scoped>
.map-chart
  background pink
</style>

<script>
  import VeMap from 'v-charts/lib/map.common'

  export default {
    name: 'MapCharts',

    componentName: 'MapCharts',

    components: {
      VeMap
    },

    data () {
      let vm = this
      this.chartEvents = {
        click: function (e) {
          vm.handleChartEvents(e)
        }
      }

      return {
        chartData: {
          columns: ['位置', '项目数'],
          rows: [
            { '位置': '北京', '项目数': 1223 }
          ]
        },
        chartSettings: {
          zoom: 1,
          aspectScale: 0.75,
          roam: true,
          scaleLimit: { min: 1, max: 1.5 }
        }
      }
    },

    mounted () {
    },

    methods: {
      handleChartEvents (e) {
      }
    }
  }
</script>
