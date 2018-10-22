<template lang="pug">
  div#web-site
    router-view
</template>

<style lang="stylus" scoped>
#web-site
  height 100vh
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
