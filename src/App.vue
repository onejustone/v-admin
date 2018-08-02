<template lang="pug">
  div#website
    router-view
    lx-currency(value="334434")
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

