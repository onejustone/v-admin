<template lang="pug">
section.section operators6
  section.section
    p.title groupBy
    div.content example {{ example }}
</template>

<style lang="stylus">
</style>

<script>
  // debounce, throttle
  import { Observable } from 'rxjs'
  // import helper from 'api/helper.js'

  export default {
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


      return {
        example
      }
    }
  }
</script>
