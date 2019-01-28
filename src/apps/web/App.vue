<template lang="pug">
  div#web-site
    router-view
</template>

<style lang="stylus">
#web-site
  height 100vh
</style>

<style>
@import "~style/reset.css"
</style>

<script>
import LxCurrency from 'lx-currency'

export default {
  name: 'App',

  components: {
    LxCurrency
  }
}
</script>
