<template lang="pug">
section.pull-to-refresh-container
  div.pull-pull-to-refresh__indacitor
    el-progress(
      :width=40
      type="circle"
      color="#8e71c7"
      :percentage="percentage"
    )
  ul.list
    li.list-item(
      v-for="person in people"
    ) {{ person.name }}
</template>

<style lang="stylus" scoped>
.pull-to-refresh-container
  padding 20px
  border 1px solid green
  background rgba(234, 222, 334, 0.5)

.pull-pull-to-refresh__indacitor
  position relative
  z-index 1

.list
  position relative
  border 1px solid red
  padding 20px
  background green
  margin-top -45px
  z-index 2
</style>

<script>
  const THRESHOLD = 40 // 触发刷新的阈值
  const ELASTICITY = 2 //动画的弹力系数
  // const MAXOFFSET = THRESHOLD * MAXOFFSET

  import { Observable } from 'rxjs'

  export default {
    name: 'PullToRefresh',

    domStreams: ['listScroll'],

    data () {
      return {
        showPullprogress: false,
        percentage: 0,
        // 触发刷新的阈值
        threshold: THRESHOLD, // 40
        // 最大滚动距离
        maxOffset: 40, // 66
        listNode: '',
        releaseToRefresh: false,
        pullToRefreshContainer: '',
        people: [
          { name: 'jack' },
          { name: 'jack1' },
          { name: 'jack2' },
          { name: 'jack3' },
          { name: 'jack4' },
          { name: 'jack5' },
          { name: 'jack6' },
          { name: 'jack7' },
          { name: 'jack8' },
          { name: 'jack9' },
          { name: 'jack10' },
          { name: 'jack' },
          { name: 'jack1' },
          { name: 'jack2' },
          { name: 'jack3' },
          { name: 'jack4' },
          { name: 'jack5' },
          { name: 'jack6' },
          { name: 'jack7' },
          { name: 'jack8' },
          { name: 'jack9' }
        ]
      }
    },

    computed: {
      list () {
        if (this.$el) {
          return this.$el.querySelectorAll('.list')[0]
        }

        return null
      }
    },

    mounted() {
    },

    methods: {
      pullAnimation (offset) {
        this.list.style.transform = `translate3d(0, ${offset}px, 0)`
      },
      pullToRefreshDragMove (offset, result) {
        this.pullAnimation(offset)
        // this.showPullprogress = true

        let percentage = Math.floor(Math.abs(offset) / this.maxOffset * 100)
        percentage = percentage > 100 ? 100 : percentage

        this.percentage = percentage
        this.releaseToRefresh = result

        result && this.$message.success('move refresh')
      },
      pullToRefreshDragRelase () {
        this.$message.success('release refresh')
      },
      contorllLoading () {

      }
    },

    subscriptions () {
      const touchStart = this.$fromDOMEvent(null, 'touchstart')
      const touchMove = this.$fromDOMEvent(null, 'touchmove')
      const touchEnd = this.$fromDOMEvent(null, 'touchend')
      const touchCancel = this.$fromDOMEvent(null, 'touchcancel')
      const end = Observable.merge(touchEnd, touchCancel)

      const touchstartAtTop = touchStart
        // 只处理位于顶部的 touchstart 事件
        .filter(start => this.$el.scrollTop === 0)

      const dragDown = touchstartAtTop.map(start =>
          touchMove
            .takeUntil(end)
            // 未觸發資料讀取請求時，结束时恢复初始状态
            .concat(Observable.defer(_ => this.pullAnimation(0)))
        )
        .concatAll()
        .withLatestFrom(touchstartAtTop, (move, startTop) => {
          const startY = startTop.touches[0].pageY
          const currentY = move.touches[0].pageY
          const offset = currentY - startY
          const absOffset = Math.floor(Math.abs(offset))
          const compressOffset = Math.floor(Math.abs(offset) / 2) // 压缩滚动距离，实现拖拽“力度”

          return {
            startEvent: startTop,
            moveEvent: move,
            startY,
            currentY,
            offset,
            absOffset,
            compressOffset
          }
        })
        // 只处理向下的滑动操作
        .filter(drag => drag.offset > 0 )
        // 超过范围不做处理
        .filter(drag => drag.absOffset <= this.maxOffset)
        .do(drag => {
          console.log(drag.offset, 'offset')
          console.log(drag.absOffset, 'absOffset')
          // console.log(drag.compressOffset, 'compressOffset')
          console.log(this.maxOffset, 'maxOffset')
          // const showIndicator = drag.compressOffset >= this.threshold
          // if (!showIndicator) return
          const refresh = drag.absOffset === this.maxOffset
          console.log(refresh, 'refresh')
          this.pullToRefreshDragMove(drag.offset, refresh)
        })
        // 展示处理当滑动的距离超过最大阈值时
        .map(drag => {
          // this.pullToRefreshDragMove()
          return drag
        })

      return {
        touchStart,
        touchMove,
        touchEnd,
        touchCancel,
        dragDown
      }
    }
  }
</script>
