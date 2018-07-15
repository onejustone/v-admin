<template lang="pug">
  div.card
    div.card-header
      span.book-title 书名：{{ book.name }}
      span.book-price 价格{{ book.price }}
    div.card-block
      button.button(@click="add")
        span(v-show="!book.added") 加入购物车
        span(v-show="book.added") 已经购买
    div.card-content
       p.card-title 简介
       p {{ book.context }}
</template>

<script>
import bookMarketSubject from './bookMarketSubject.js'

export default {
  name: 'BookDetail',

  props: ['book'],

  methods: {
    add () {
      bookMarketSubject.addToCar(this.book)
    }
  }
}
</script>
