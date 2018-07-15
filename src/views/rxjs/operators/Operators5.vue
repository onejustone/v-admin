<template lang="pug">
section
  section.section
    p.title catch
    button.button(v-stream:click="retry$") retry
    div.content example {{ example$ }}

  section.section.concat-all
    p.title concatAll
    div.content {{ concatAll$ }}
</template>

<style lang="stylus">
.concat-all
  border 1px solid red
</style>

<script>
  // debounce, throttle
  import { Observable, ObjectUnsubscribedError } from 'rxjs'
  // import http from 'api/http.js'

  export default {
    domStreams: ['retry$'],

    subscriptions () {
       // catch
       const retry = this.retry$
        .do(e => console.log(e))

       const source$ = Observable.from(['a', 'b', 'c', 'd', 2])
        .zip(Observable.interval(300), (x, y) => x)

       const example$ = source$.map(x => x.toUpperCase())
         .catch((errorObs, sourceObs) =>
           Observable.empty()
           .concat(sourceObs.delay(5000))
         )

        // concatAll
        const concatAllClick$ = this.$fromDOMEvent('.concat-all', 'click')
        const concatAll$ = concatAllClick$.map(e => Observable.interval(1000)).concatAll()

       return {
         example$,
         retry,
         concatAll$
      }
    }
  }
</script>
