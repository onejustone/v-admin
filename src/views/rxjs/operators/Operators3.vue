<template lang="pug">
div
  section#scan.section
    h2.title scan
    div.content
      div.is-success numberState {{ numberState$ }}
      button#addButton.button.is-primary 加
      button#minusButton.button.is-success 减

  section#buffer.section
    h2.title buffer
    div bufferExample$ {{ bufferExample$ }}

  section#delay.section
    h2.title delay delayWhen
    div.delay-content(
      v-stream:mousemove="delayContentMouseMove$"
    )
      img.delay-content-image.card(
        v-for="(img, index) in images"
        :key="index"
        :src="img"
      )
</template>
<style lang="stylus">

.delay-content
  position relative
  height 600px
  border 1px solid red

.delay-content-image
  position absolute
  border-radius 50%
  height 70px
  max-height 70px
  border 3px white solid
  transform translate3d(0,0,0)
</style>

<script>
/**
* scan, buffer
*/
  import { Observable } from 'rxjs'

  export default {
    domStreams: ['delayContentMouseMove$'],

    observableMethods: ['followMouse'],

    computed: {
      images () {
        return [
          '/static/demo.jpg',
          '/static/demo1.jpg',
          '/static/demo2.jpg',
          '/static/demo3.jpg',
        ]
      },

      imageDoms () {
        if (this.$el) {
          return this.$el.querySelectorAll('img')
        }
        return null
      }
    },

    subscriptions () {
      // scan
      const addButton$ = this.$fromDOMEvent('#addButton', 'click')
        .mapTo(1)
      const minusButton$ = this.$fromDOMEvent('#minusButton', 'click')
        .mapTo(-1)

      const state$ = Observable.merge(addButton$, minusButton$)

      const numberState$ = state$.startWith(0).scan((origin, next) => origin + next, 0)

      // buffer
      const source1$ = Observable.interval(300)
      const source2$ = Observable.interval(1000)
      const bufferExample$ = source1$.buffer(source2$)

      // delay
      const mouseMovePos$ = this.delayContentMouseMove$.map(e => {
        return {
          clientX: e.clientX,
          clientY: e.clientY
        }
      }).map(e => {
      })

     function followMouse (DOMArr) {
       const delayTime = 600
       DOMArr.forEach((item, index) => (
         mouseMovePos$.map(e => {
             return {
               clientX: e.clientX,
               clientY: e.clientY
             }
           })
           .delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2)
           .map(({clientX, clientY}) => {
             item.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
           })
       ))
     }
     followMouse(Array.from(this.imageDoms))

      return {
        // scan
        addButton$,
        minusButton$,
        numberState$,
        bufferExample$,
        mouseMovePos$
      }
    },

    mounted () {
      // const imgsList = this.$el.querySelectorAll('img')
      // this.followMouse(Array.from(this.imageDoms))
    },

    methods: {
      followMouse (DOMArr) {
        const delayTime = 600
        const vm = this
        DOMArr.forEach((item, index) => (
          vm.delayContentMouseMove$.map(e => {
              return {
                clientX: e.clientX,
                clientY: e.clientY
              }
            })
            .delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2)
            .map(({clientX, clientY}) => {
              item.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
            })
        ))
      }
    }
  }
</script>
