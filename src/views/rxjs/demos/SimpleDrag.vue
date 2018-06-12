<template lang="pug">
  section.drag-container
    div.drag-cell
    input.text
</template>

<script>
  import { Observable } from 'rxjs'
  import { pluck } from 'rxjs/operators'

  export default {
    name: 'RxDrag',

    subscriptions () {
      const mouseDown$ = this.$fromDOMEvent('.drag-cell', 'mousedown')
        .map(e => {
          console.log("drage cell mosedown")
          return e
        })

      const mouseMove$ = this.$fromDOMEvent(null, 'mousemove')
        .map(e => {
          console.log("mousemove")
          return e
        })

      const mouseUp$ = this.$fromDOMEvent(null, 'mouseup')
        .map(e => {
          console.log("mouseup")
          return {
            x: e.clientX,
            y: e.clientY
          }
        })

      const dragSteam$ = mouseDown$.map(e => mouseMove$.takeUntil(mouseUp$))
        .concatAll()
        .map(e => console.log('结束了', e.x, e.y))

      return {
        dragSteam$
      }
    },

    created () {
    },

    mounted () {
    }
  }
</script>

<style lang="stylus" scoped>
.drag-container
  border 1px solid red
  height 600px
  position relative

.drag-cell
  position absolute
  width 50px
  height 50px
  border 1px solid pink
  background-color #eee
  border-radius 50%
  &:hover
    cursor move
    box-shadow 0px 0px 4px 1px pink
</style>

