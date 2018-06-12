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
        .map((e, value) => console.log("drage cell mosedown"))

      const mouseMove$ = this.$fromDOMEvent(null, 'mousemove')
        .map((e, value) => console.log("mousemove"))

      const mouseUp$ = this.$fromDOMEvent(null, 'mouseup')
        .map((e, value) => console.log("mouseup"))

      const dragSteam$ = mouseDown$.map(e => mouseMove$.takeUntil(mouseUp$))
        .concatAll()
        .map(_ => console.log('结束了'))

      return {
        // mouseDown$,
        // mouseMove$,
        // mouseUp$,
        dragSteam$
      }
    },

    created () {
      console.log('created')
    },

    mounted () {
      console.log('mounted')
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

