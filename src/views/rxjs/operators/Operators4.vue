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
  import { get$ } from 'rapi/http.js'

  const SEARCH_REPOS = 'https://api.github.com/search/repositories?sort=stars&order=desc&q='

  export default {
    domStreams: ['handleInput$'],

    subscriptions () {
      const inputContent$ = this.handleInput$
        .debounceTime(500)
        .filter(({event, data}) => !!event.target.value)
        // https://hackernoon.com/using-rxjs-to-handle-http-requests-what-ive-learned-4640aaf4646c
        // .concatMap()
        .map(({event}) => event.target.value.trim())
        // 只取最近的一次不一样的值进行异步
        .distinctUntilChanged()
        // 仅处理最后一次的异步
        .switchMap(value => get$(`${SEARCH_REPOS}${value}`))
        .map(result => result.items)

       return {
        inputContent$
      }
    }
  }
</script>
