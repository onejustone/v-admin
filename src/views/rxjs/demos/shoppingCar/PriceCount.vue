<template lang="pug">
  .span 结账金额为： {{ member.totalPrice }}
</template>

<script>
import bookMarketSubject from './bookMarketSubject.js'

export default {
  name: 'PriceCount',

  subscriptions: {
    member: bookMarketSubject.member$
  }
}
</script>
