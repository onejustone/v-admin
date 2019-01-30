<template lang="pug">
.canvas-wraper
  canvas(width="400" height="400")
</template>

<script>
  export default {
    name: 'MyCanvas',

    props: {
      text: { type: String, default: '这个世界，我来了' }
    },

    data () {
      return {
        context: null
      }
    },

    mounted () {
      this.initCanvas()
    },

    methods: {
      initCanvas () {
        const canvasInstance = this.$el.children[0]
        if (!canvasInstance.getContext) {
          console.warn('[catched warn:] 当前浏览器不支持 canvas')
          return
        }

        this.context = canvasInstance.getContext('2d')
        this.context.beginPath();
        this.context.fillStyle = 'green'
        this.context.moveTo(0,0)
        this.context.lineTo(0, 100)
        this.context.lineTo(100, 0)
        this.context.closePath()
        this.context.fill()

        this.context.beginPath();
        this.context.font = '20px 宋体'
        // 设置文字格式 必需
        this.context.textAlign = 'left'
        // 设置文字对齐方式 必需
        this.context.textBaseline = 'middle'
        // 设置文字基线 必需
        this.context.fillStyle = 'white'
        this.context.rotate(Math.PI/180*-45)
        this.context.closePath()
        this.context.fillText(this.text, -20, 40)
        canvasInstance.style.width = 200
        canvasInstance.style.height = 200
      }
    }
  }
</script>

<style lang="stylus">

</style>
