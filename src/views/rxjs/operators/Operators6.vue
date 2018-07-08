<template lang="pug">
section.section operators6
  section.section
    p.title groupBy
    div.content example {{ example }}

  section.section
    p.title exahustMap
    div.content
      p.info exhaustSub {{ exhaustSub }}
      button.button.primary(
        v-stream:click="finiteTimer$"
      ) 开始计时
</template>

<style lang="stylus">
</style>

<script>
  // debounce, throttle
  import { Observable } from 'rxjs'
  // import helper from 'api/helper.js'

  export default {
    domStreams: ['finiteTimer$'],

    subscriptions () {
      const people = [
        {name: 'Anna', score: 100, subject: 'English'},
        {name: 'Anna', score: 90, subject: 'Math'},
        {name: 'Anna', score: 96, subject: 'Chinese' },
        {name: 'Jerry', score: 80, subject: 'English'},
        {name: 'Jerry', score: 100, subject: 'Math'},
        {name: 'Jerry', score: 90, subject: 'Chinese' },
      ]

      const example = Observable.from(people)
        .zip(Observable.interval(100), (x, y) => {
          return x
        })
        .groupBy(person => person.name)
        .map(group => group.scan((acc, curr) => ({
          name: curr.name,
          score: acc.score + curr.score
        })))
        .mergeAll()

      // const sourceInterval = Observable.interval(1000)
      // const delayedInterval = sourceInterval.delay(5000).take(4)

      // const exaustSub = Observable.merge(
      //     delayedInterval,
      //     Observable.of(true)
      //   ).exhaustMap(_ => sourceInterval)
      const exhaustSub = this.finiteTimer$.exhaustMap(ev => Observable.interval(10).take(5))

      return {
        example,
        exhaustSub
      }
    }
  }
</script>
