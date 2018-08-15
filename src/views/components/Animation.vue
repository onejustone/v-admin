<template lang="pug">
.section
  img.flower.js-valentine-flower(
    width="200"
    height="200"
    src='/static/flower.png'
  )

  img.flower.js-valentine-flower(
    width="200"
    height="200"
    src='/static/flower.png'
  )

  img.flower.js-valentine-flower(
    width="200"
    height="200"
    src='/static/flower.png'
  )

  //- img.flower.js-valentine-flower(
  //-   width="200"
  //-   height="200"
  //-   src='/static/flower.png'
  //- )

  //- img.flower.js-valentine-flower(
  //-   width="200"
  //-   height="200"
  //-   src='/static/flower.png'
  //- )

  div.flower-dialog.js-valentine-flower-dialog
  el-button(
    @click="startAnimation"
  ) restart
</template>

<style lang="stylus" scoped>
.section
  position relative
.flower
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  z-index 100
</style>

<script>
import dynamics from 'dynamics.js'

export default {
  mounted () {
    this.startAnimation()
  },

  methods: {
    startAnimation () {
      const MAX_GRAVITY_HEIGHT = 450
      const DISAPPEAR_GRAVITY_BOTTOM = 1000

      const els = this.$el.querySelectorAll('.flower')
      // const el = this.$el.querySelector('.flower')

      const animateOne = (el) => {
        el.style.top = 0

        const handelComplete = () => {
          el.style.display = 'none'
          el.style.bottom = DISAPPEAR_GRAVITY_BOTTOM
        }

        const verticalBounce = () => {
          dynamics.animate(el, {
            translateY: MAX_GRAVITY_HEIGHT
          }, {
            type: dynamics.spring,
            duration: 3000,
            bounciness: 100,
            complete: handelComplete
          })
        }

        dynamics.animate(el, {
          translateY: MAX_GRAVITY_HEIGHT
        }, {
          type: dynamics.gravity,
          bounciness: 400,
          elasticty: 400,
          duration: 7000,
          complete: verticalBounce
        })
      }

      const animateTwo = (el) => {
        el.style.right = 0

        const verticalBounce2 = () => {
          // el.style.top = MAX_GRAVITY_HEIGHT
          dynamics.animate(el, {
            translateX: 1500,
            translateY: MAX_GRAVITY_HEIGHT
          }, {
            type: dynamics.linear,
            // friction: 1,
            // bounciness: 100,
            // elasticty: 400,
            delay: 1000,
            duration: 3000,
            complete: handelComplete
          })
        }

        const horizontalBounce = () => {
          // el.style.top = MAX_GRAVITY_HEIGHT
          dynamics.animate(el, {
            translateX: 800,
            translateY: MAX_GRAVITY_HEIGHT - 50
          }, {
            type: dynamics.bounce,
            // friction: 1,
            // bounciness: 100,
            // elasticty: 400,
            duration: 2000,
            complete: verticalBounce2
          })
        }

         const verticalBounce = () => {
          // el.style.top = MAX_GRAVITY_HEIGHT
          dynamics.animate(el, {
            translateX: 800,
            translateY: MAX_GRAVITY_HEIGHT
          }, {
            type: dynamics.easeIn,
            friction: 1,
            // bounciness: 100,
            // elasticty: 400,
            duration: 4000,
            complete: horizontalBounce
          })
        }

        const handelComplete = () => {
          el.style.display = 'none'
          el.style.left = -1000
        }

        dynamics.animate(el, {
          translateY: MAX_GRAVITY_HEIGHT,
        }, {
          type: dynamics.gravity,
          duration: 3000,
          complete: verticalBounce
        })
      }

      const animateThree = (el) => {
        dynamics.animate(el, {
          translateX: 100,
        }, {
          type: dynamics.linear,
          duration: 3000,
          complete: horizontalLinearLeft
        })

        function horizontalLinearLeft (params) {
          dynamics.animate(el, {
            translateX: -100,
          }, {
            type: dynamics.linear,
            duration: 5000,
            complete: handelComplete
          })
        }

        function handelComplete () {
          el.style.display = 'none'
          el.style.left = -1000
        }
      }

      const animatePools = [
        animateOne,
        animateTwo,
        animateThree
      ]

      Array.from(els).forEach((el, index) => {
        const seq = (index + 1) % 3
        console.log(seq)
        animateTwo(el)
        // animatePools[seq](el)
      })
    }
  }
}
</script>

