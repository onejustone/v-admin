<template lang="pug">
.section
  p.title debounce throttle
  input.input(v-stream:input='handleInput$')
  span.text {{ inputContent$ }}
</template>


<script>
// debounce, throttle
  import { Observable } from 'rxjs'

  export default {
    domStreams: ['handleInput$'],

    subscriptions () {
      const inputContent$ = this.handleInput$
        .debounceTime(300)
        .throttleTime(1000)
        .map(e => {
          console.log(e)
          return e
        })
        .map((event, value) => event.event.target.value)

       return {
        inputContent$
      }
    }
  }
</script>
