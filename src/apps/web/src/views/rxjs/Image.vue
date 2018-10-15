<template lang="pug">
  section.section
    b-modal(:active="error$")
      h1.has-text-white Youer Appear Offonline
      button.button(v-stream:click="retry$") Retry

    button.button(v-stream:click="load$") Load

    h1.title {{ name$ }}
    img(:src="image$" alt="")
</template>

<script>
  import { Observable } from 'rxjs'

  export default {
    name: 'Image',

    domStreams: ['load$', 'retry$'],

    subscriptions () {
      const person$ = Observable.merge(this.load$, this.retry$)
        .switchMapTo(
          Observable.ajax(`https://starwars.egghead.training/people/0`)
          .map(res => res.response)
          .catch(() => Observable.of('error'))
        )
        // .share()

      const error$ = person$.map(message => !message)

      const name$ = person$.pluck('name')
      const image$ = person$.pluck('image')
        .map(image => `https://starwars.egghead.training/${image}`)

      return {
        name$,
        image$,
        error$
      }
    }
  }
</script>
