<template lang="pug">
  .span 您已经购入： {{ member.totalNumber }} 本书
</template>

<script>
import bookMarketSubject from './bookMarketSubject.js'

export default {
  name: 'BookCount',

  subscriptions: {
    member: bookMarketSubject.member$
  }
}
</script>
