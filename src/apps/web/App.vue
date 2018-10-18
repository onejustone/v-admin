<template lang="pug">
  div#web-site
    router-view
</template>

<script>
import LxCurrency from 'lx-currency'

export default {
  name: 'App',

  components: {
    LxCurrency
  }
}
</script>
