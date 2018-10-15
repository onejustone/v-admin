<template lang="pug">
  .div
    button.button.is-primary(
      @click="resetCar"
    ) 确定结账
</template>

<script>
import bookMarketSubject from './bookMarketSubject.js'

export default {
  name: 'ShoppingConfirm',

  methods: {
    resetCar () {
      bookMarketSubject.resetCar()
    }
  }
}
</script>
