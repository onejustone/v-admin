<template lang="pug">
  section.back-to-up-container
    ul.father
      li.item(v-for="item in 10") {{ item }}
</template>

<script>
  export default {
    name: 'componentBackToUp'
  }
</script>

<style lang="stylus" scoped>
.back-to-up-container
  padding 0 20px
  .father
    border 1px solid red
    overflow hidden
    .item
      border 1px solid green
      float left
      width 100px
      margin-right 20px
</style>