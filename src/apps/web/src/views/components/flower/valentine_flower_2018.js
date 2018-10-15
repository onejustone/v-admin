
import dynamics from 'dynamics.js'

export default {
  mounted () {
    this.startAnimation()
  },

  methods: {
    startAnimation () {
      const MAX_GRAVITY_HEIGHT = $(window).height() - 200
      const MAX_MOVE_WIDTH = $(window).width() - 100

      const flower = document.querySelector('.js-valentine-flower')
      const flower$ = $('.js-valentine-flower')
      const flowerType = flower$.data('type')

      const dialog$ = $('.js-valentine-flower-dialog')
      const dialogClose$ = $('.js-valentine-flower-dialog-quit')

      flower$.one('click', (el) => {
        dynamics.stop(flower)
        flower$.animate({ opacity: 0 }, 800, () => {
          flower$.hide()
          dialogClose$.on('click', (el) => {
            dialog$.hide()
          })
          dialog$.show()
          $.get(`http://www.baidu.com`, { 'flower_type': flowerType }, (r) => {
            // if (r === 'success') {
            // dialogClose$.on('click', (el) => {
            //   dialog$.hide()
            // })
            // dialog$.show()
            // } else {
            //   console.error('手一滑小花没有了...')
            // }
          })
        })
      })

      animate(flower)

      function animate (el) {
        const direction = Math.random(0, 1) * 10 > 5 ? 'left' : 'right'

        el.style[direction] = 0

        dynamics.animate(el, {
          translateY: MAX_GRAVITY_HEIGHT
        }, {
          type: dynamics.gravity,
          duration: 3000,
          complete: verticalBounce
        })

        function verticalBounce () {
          const moveOffset = direction === 'left' ? MAX_MOVE_WIDTH / 2 : -(MAX_MOVE_WIDTH / 2)
          dynamics.animate(el, {
            translateX: moveOffset,
            translateY: MAX_GRAVITY_HEIGHT
          }, {
            type: dynamics.easeIn,
            friction: 1,
            duration: 4000,
            complete: horizontalBounce
          })
        }

        function horizontalBounce () {
          const moveOffset = direction === 'left' ? MAX_MOVE_WIDTH / 2 : -(MAX_MOVE_WIDTH / 2)
          dynamics.animate(el, {
            translateX: moveOffset,
            translateY: MAX_GRAVITY_HEIGHT - 50
          }, {
            type: dynamics.bounce,
            duration: 2000,
            complete: verticalBounce2
          })
        }

        function verticalBounce2 () {
          const moveOffset = direction === 'left' ? MAX_MOVE_WIDTH + 110 : -(MAX_MOVE_WIDTH + 110)
          dynamics.animate(el, {
            translateX: moveOffset,
            translateY: MAX_GRAVITY_HEIGHT
          }, {
            type: dynamics.linear,
            delay: 1000,
            duration: 3000,
            complete: handelComplete
          })
        }

        function handelComplete () {
          el.style.display = 'none'
          el.style.left = -1000
          el.parentElement.removeChild(el)
        }
      }
    }
  }
}

