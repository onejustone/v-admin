
import dynamics from 'dynamics.js'

export default {
  mounted () {
    this.startAnimation()
  },

  methods: {
    startAnimation () {
      const MAX_GRAVITY_HEIGHT = 450
      const el = document.querySelector('.js-valentine-flower')

      animate(el)

      function animate (el) {
        el.style.right = 0

        function verticalBounce2 () {
          dynamics.animate(el, {
            translateX: 1500,
            translateY: MAX_GRAVITY_HEIGHT
          }, {
            type: dynamics.linear,
            delay: 1000,
            duration: 3000,
            complete: handelComplete
          })
        }

        function horizontalBounce () {
          // el.style.top = MAX_GRAVITY_HEIGHT
          dynamics.animate(el, {
            translateX: 800,
            translateY: MAX_GRAVITY_HEIGHT - 50
          }, {
            type: dynamics.bounce,
            duration: 2000,
            complete: verticalBounce2
          })
        }

        function verticalBounce () {
          dynamics.animate(el, {
            translateX: 800,
            translateY: MAX_GRAVITY_HEIGHT
          }, {
            type: dynamics.easeIn,
            friction: 1,
            duration: 4000,
            complete: horizontalBounce
          })
        }

        function handelComplete () {
          el.style.display = 'none'
          el.style.left = -1000
        }

        dynamics.animate(el, {
          translateY: MAX_GRAVITY_HEIGHT
        }, {
          type: dynamics.gravity,
          duration: 3000,
          complete: verticalBounce
        })
      }
    }
  }
}

