<template lang="pug">
  div.fuck-div
    div chenrong
    LxCurrency(:value="1000" suffix="$")
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
