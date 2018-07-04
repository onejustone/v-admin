<template lang="pug">
.section
  p.title GitHub-实时异步搜索
  input.input(v-stream:input='handleInput$')
  span.text
   ul.list
     li.list-item(v-for="item in inputContent$")
       span {{ item.name }}
</template>

<script>
// debounce, throttle
  import { Observable } from 'rxjs'
  import helper from 'api/helper.js'

  const SEARCH_REPOS = 'https://api.github.com/search/repositories?sort=stars&order=desc&q='

  export default {
    domStreams: ['handleInput$'],

    subscriptions () {
      const inputContent$ = this.handleInput$
        .debounceTime(500)
        .filter(({event, data}) => !!event.target.value)
        .map(({event}) => event.target.value.trim())
        // 只取最近的一次不一样的值进行异步
        .distinctUntilChanged()
        .do(value => console.log(value))
        // 仅处理最后一次的异步
        .switchMap(value => Observable.fromPromise(helper.get(`${SEARCH_REPOS}${value}`)))
        .do(result => console.log(result))
        .map(result => result.items)

       return {
        inputContent$
      }
    }
  }
</script>
