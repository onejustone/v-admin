<template lang="pug">
  div#website
    router-view
</template>

<script>
import LxCurrency from 'lx-currency'

export default {
  name: 'app',
  components: {
    LxCurrency
  }
}
</script>

<style lang="stylus">
 @import "style/global.styl"
</style>

