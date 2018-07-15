<template lang="pug">
section.pull-to-refresh-container
  div.pull-pull-to-refresh__indacitor
    el-progress(
      :width=40
      type="circle"
      color="#8e71c7"
      status="success"
      :percentage="percentage"
    )
  ul.list
    li.list-item(
      v-for="person in people"
    ) {{ person.name }}
</template>

<style lang="stylus" scoped>
.pull-to-refresh-container
  padding 50px
  border 1px solid green
  background rgba(234, 222, 334, 0.5)

.pull-pull-to-refresh__indacitor
  display flex
  justify-content center
  align-items center
  position relative
  z-index 1

.list
  position relative
  border 1px solid red
  background green
  margin-top -45px
  z-index 2
</style>

<script>
  const THRESHOLD = 40 // 触发刷新的阈值
  const ELASTICITY = 2 //动画的弹力系数
  const URl = 'www.github.com'
  // const MAXOFFSET = THRESHOLD * MAXOFFSET
  import { xget } from 'http'
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
        maxOffset: 50, // 66
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
      pullToRefreshDragMove (_offset, result) {
        const maxOffset = Math.min(_offset, this.maxOffset)
        this.pullAnimation(maxOffset)

        let percentage = Math.floor(Math.abs(_offset) / this.maxOffset * 100)
        console.log(percentage, 'percentage')
        percentage = percentage > 100 ? 100 : percentage

        this.percentage = percentage
        this.releaseToRefresh = result
      },
      async getUseraInfo () {
        await xget(URl)
      },
      pullToRefreshDragRelase () {
        this.$message.success('release refresh')
        const usersData$ = Observable.defer(_ => this.getUseraInfo())
        usersData$.subscribe(value => {
          console.log(value)
          this.percentage = 0
          this.pullAnimation(0)
        })
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
            // 未触发请求，结束时恢复初始状态
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
        .do(drag => {
          const refresh = drag.absOffset === this.maxOffset
          this.pullToRefreshDragMove(drag.absOffset, refresh)
          console.log(drag.absOffset, 'drag.absOffset')
        })
         // 展示处理当滑动的距离超过最大阈值时
        .skipWhile(drag => drag.absOffset < this.maxOffset)
        .map(drag => {
          const refresh = drag.absOffset >= this.maxOffset
          if (refresh) {
            this.pullToRefreshDragRelase()
          }
          return drag
        })
        .takeWhile(drag => drag.absOffset < this.maxOffset)
        .repeat()

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
