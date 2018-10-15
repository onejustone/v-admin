<template lang="pug">
.section
  p.text {{ example$ }}
</template>


<script>
  import { Observable } from 'rxjs'

  export default {
    subscriptions () {
      const main$ = Observable.from('hello')
        .zip(Observable.interval(500), (x, y) => x)

      const some$ = Observable.from([0,1,0,1,0,1])
        .zip(Observable.interval(300), (x, y) => x)

      const example$ = main$.withLatestFrom(some$, (x, y) => {
        return y === 1 ? x.toUpperCase() : x
      })

      return {
        example$
      }
    }
  }
</script>
