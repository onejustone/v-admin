<template lang="pug">
  section.drag-container-wrapper
    section.drag-container
</template>

<script>
  import { Observable } from 'rxjs'
  import { pluck } from 'rxjs/operators'

  export default {
    name: 'RxDrag',

    data () {
      return {

      }
    },

    computed: {
      dragContainer () {
         if (this.$el) {
          return this.$el.querySelectorAll('.drag-container')[0]
        }

        return null
      },

      dragCellElement () {
        if (this.$el) {
          return this.$el.querySelectorAll('.drag-cell')[0]
        }

        return null
      }
    },

    watchAsObservable () {
    },

    subscriptions () {
      // documentScroll$ 当 dragContainer 的顶部小于可视高度时，fixed dragCell element
      const rootScroll$ = this.$fromDOMEvent(null, 'scroll')
        .map(e => {
          console.log(this.dragContainer.getBoundingClientRect())
          return e
        })
        .map(e => this.dragContainer.getBoundingClientRect().y < 0)
        .map(bool => bool ?
            this.dragCellElement.classList.add('drag-cell__fixed') :
            this.dragCellElement.classList.remove('drag-cell__fixed')
        )

      const mouseDown$ = this.$fromDOMEvent('.drag-cell', 'mousedown')
        // 用 filter 判断下，如果当前 dragCell 没有 fixed 的话，则事件不发出
        .filter(e => this.dragCellElement.classList.contains('drag-cell__fixed'))

      const mouseMove$ = this.$fromDOMEvent('.drag-container', 'mousemove')

      const mouseUp$ = this.$fromDOMEvent('.drag-cell', 'mouseup')

      const dragSteam$ = mouseDown$.map(e => mouseMove$.takeUntil(mouseUp$))
        .concatAll()
        .withLatestFrom(mouseDown$, (move, down) => {
          console.log(move.clientX, down.offsetX)
          this.dragCellElement.style.top = `${move.clientY - down.offsetY}px`
          this.dragCellElement.style.left = `${move.clientX - down.offsetX}px`
        })

      return {
        dragSteam$,
        documentScroll$
      }
    },

    created () {
    },

    mounted () {
      window.addEventListener('scroll', function (e) {
        console.log('我不满意')
      })

      this.$el.addEventListener('scroll', function (e) {
        console.log('我的满意')
      })
    }
  }
</script>

<style lang="stylus" scoped>
.drag-container-wrapper
  height 600px
  border 1px solid green
  overflow-y scroll
  padding 10px

.drag-container
  border 1px solid red
  height 1600px

.drag-cell
  width 50px
  height 50px
  border 1px solid pink
  background-color #eee
  border-radius 50%
  &:hover
    cursor move
    box-shadow 0px 0px 4px 1px pink

.drag-cell__fixed
  position fixed
  right 20px
  top 100px
</style>

