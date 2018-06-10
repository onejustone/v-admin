<template lang="pug">
  section.section
    b-notification(:action.sync="done$")
      h1 Signed Out

    h1.title is done? {{ done$ }}
    h1.title {{ output$ }}
    div.subtitle {{ events$ }}
</template>

<script>
  import { Observable } from 'rxjs'

  export default {
    name: 'Signed',

    subscriptions () {
      const key$ = Observable.fromEvent(
        window,
        'keydown'
      )
        .pluck('key')
        .scan((text, key) => text + key)

      const mouse$ = Observable.fromEvent(
        window,
        'mousemove'
      )
        .map(e => ({
          x: e.clientX,
          y: e.clientY
        }))

      const events$ = Observable.merge(
        key$,
        mouse$
      )

      const countdown$ = Observable.interval(500)
        .startWith(3)
        .scan(time => time - 1)
        .takeWhile(time => time >= 0)

      const output$ = events$
        .switchMapTo(
          Observable.of('Keep it up!!!')
            .concat(countdown$.delay(500))
        ).takeWhile(value => value !== 0)
        .concat(Observable.of(`We'll miss you`))

      const done$ = Observable.of(false)
        .concat(
          output$
            .last()
            .delay(500)
            .mapTo(true)
        )

      return {
        events$,
        output$,
        done$
      }
    },

    mounted () {
      console.log(this.$el)
    }
  }
</script>
