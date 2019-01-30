<template lang="pug">
  .section
    .title Operators-7 share
    .section
      p.title subject
</template>

<script>
import { Observable, Subject } from 'rxjs'

export default {
  name: 'Operators7',

  subscriptions () {
    const source$ = Observable.timer(1000)
    const example$ = source$.do(v => console.log('***SIDE EFFECT***'))
      .mapTo('***RESULT***')
      .share()

    const observableA = example$
    const observableB = example$

    return {
      observableA,
      observableB
    }
    // const observableA = source$.map
  }
}
</script>

