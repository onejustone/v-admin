<template lang="pug">
  section.section
    h2.title {{ text$ }}
    form(@submit.prevent="submitHandler")
      input.input(type="input" @input="inputHandler")
      input.button(
        type="submit"
        :value="buttonText$"
        :disabled="disable$"
      )
</template>

<script>
  import { Observable } from 'rxjs'

  export default {
    name: 'Form',

    observableMethods: ['submitHandler', 'inputHandler'],

    subscriptions () {
      const input$ = this.inputHandler$.pluck('target', 'value').share()
      const [empty$, term$] = input$.startWith('').partition(term => term === '')

      const formatResponse = res =>
        res.response.length
          ? res.response.map(person => person.name).join('')
          : 'No resulst...'

      const search = term =>
        Observable.ajax(
          `https://starwars.egghead.training/people?delay=1000&name_like=${term}`
        )
          .map(formatResponse)
          .share()

      const result$ = this.submitHandler$
        .withLatestFrom(term$, (_, term) => term)
        .exhaustMap(term =>
          Observable.race(
            input$.take(1).mapTo('Cancelled..'),
            search(term).takeUntil(input$)
          )
        )

      const text$ = Observable.merge(
        this.submitHandler$.mapTo('Loading...'),
        empty$.mapTo('Please type somthing'),
        term$.mapTo('Hit enter when ready'),
        result$
      )

      const disable$ = Observable.merge(
        this.submitHandler$.mapTo(true),
        empty$.mapTo(true),
        term$.mapTo(false)
      ).startWith(true)

      const buttonText$ = Observable.merge(
        this.submitHandler$.mapTo('Loading...'),
        empty$.mapTo('Empty'),
        term$.mapTo('Search'),
        result$.mapTo('Change to search again')
      )

      return {
        text$,
        buttonText$,
        disable$
      }
    }
  }
</script>
