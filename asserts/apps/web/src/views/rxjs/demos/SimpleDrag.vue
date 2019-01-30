<template lang="pug">
  section.drag-container-wrapper(
    v-stream:scroll="dragContainerWrapperScroll$"
  )
    section.drag-container(
      v-stream:mousemove="containerMouseMove$"
    )
      div.drag-cell
</template>

<script>
  import { Observable } from 'rxjs'
  import { pluck } from 'rxjs/operators'

  export default {
    name: 'RxDrag',

    domStreams: [
      'dragContainerWrapperScroll$',
      'containerMouseMove$'
     ],

    data () {
      return {
      }
    },

    computed: {
      dragContainerWrapper () {
        return this.$el || null
      },

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
      const rootScroll$ = this.dragContainerWrapperScroll$
        .map(e => this.dragContainer.getBoundingClientRect().y < 0)
        .map(bool => bool ?
            this.dragCellElement.classList.add('drag-cell__fixed') :
            this.dragCellElement.classList.remove('drag-cell__fixed')
        )

      const mouseDown$ = this.$fromDOMEvent('.drag-cell', 'mousedown')
        // 用 filter 判断下，如果当前 dragCell 没有 fixed 的话，则事件不发出
        .filter(e => this.dragCellElement.classList.contains('drag-cell__fixed'))

      const mouseMove$ = this.containerMouseMove$
        .throttleTime(30)
        .map(({ data, event }) => event )

      const mouseUp$ = this.$fromDOMEvent('.drag-cell', 'mouseup')
      //. mouseout冒泡 mouseleave不冒泡
      const mouseout$ = this.$fromDOMEvent(null, 'mouseout')

      const stopDrag$ = Observable.merge(mouseUp$, mouseout$)

      const criticalValue = ({ value, min, max }) => {
        return Math.min(Math.max(min, value), max)
      }

      const dragSteam$ = mouseDown$.map(e => mouseMove$.takeUntil(stopDrag$))
        .concatAll()
        .withLatestFrom(mouseDown$, (move, down) => {
          const wrapperRect = this.dragContainerWrapper.getBoundingClientRect()
          const dragCellElement = this.dragCellElement.getBoundingClientRect()

          const minY = wrapperRect.top
          const maxY = wrapperRect.bottom - dragCellElement.height

          const minX = wrapperRect.left
          const maxX = wrapperRect.right - dragCellElement.width

          const relativeY = move.clientY - down.offsetY
          const relativeX = move.clientX - down.offsetX

          const safeX = criticalValue({ value: relativeX, min: minX, max: maxX })
          const safeY = criticalValue({ value: relativeY, min: minY, max: maxY })

          this.dragCellElement.style.top = `${safeY}px`
          this.dragCellElement.style.left = `${safeX}px`
        })

      return {
        rootScroll$,
        dragSteam$
      }
    }
  }
</script>

<style lang="stylus" scoped>
.drag-container-wrapper
  height: 600px;
  border: 1px solid green;
  overflow-y: scroll;
  padding: 10px;

.drag-container
  border: 1px solid red;
  height: 1600px;

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
  z-index 99
  transition all 0.2
</style>

