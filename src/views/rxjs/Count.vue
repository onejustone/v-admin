<template lang="pug">
  section.section
    h1.title {{ countdown$ }}
    button.button.is-success(:disabled="disable$" v-stream:click="snooze$") Snooze
    button.button.is-danger(:disabled="disable$" v-stream:click="dismiss$") Dismiss
</template>

<script>
  import { Observable } from 'rxjs'

  export default {
    name: 'Count',

    domStreams: ['snooze$', 'dismiss$'],

    subscriptions () {
      const countdown$ = Observable.interval(500)
        .startWith(5)
        .scan(time => time - 1)
        .takeWhile(time => time >= 0)
        .concat(Observable.of('wake up!!!'))
        .repeatWhen(() =>
          this.snooze$.takeUntil(this.dismiss$)
        )
        .concat(Observable.of('have a nice day!'))

      const disable$ = countdown$.map(text => text !== 'wake up!!!')

      return {
        countdown$,
        disable$
      }
    }
  }
</script>
