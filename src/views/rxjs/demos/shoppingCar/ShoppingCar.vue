<template lang="pug">
  .section.shopping-car
    .nav
      price-count
      book-count
      span.right
        shopping-confirm
      span.right {{ member.name }} 欢迎您
    .container
        div.row(v-for="book in books")
          book-detail(:book="book")
    .footer
</template>

<script>
import bookMarketSubject from './bookMarketSubject.js'

import PriceCount from './PriceCount'
import ShoppingConfirm from './ShoppingConfirm'
import BookDetail from './BookDetail'
import BookCount from './BookCount'

export default {
  name: 'ShoppingCar',

  components: {
    PriceCount,
    ShoppingConfirm,
    BookDetail,
    BookCount
  },

  subscriptions: {
    books: bookMarketSubject.books$,
    member: bookMarketSubject.member$,
    shoppingList: bookMarketSubject.shoppingList$
  }
}
</script>

