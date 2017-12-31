<template lang="pug">
    div.app-main
        router-view
        div.box
</template>

<script>
  export default {
    name: 'appMain'
  }
</script>

<style lang="styl" scoped>
.box
  dispay inline-block
  width 0
  &::before
    content 'love 你 you'
    outline 1px solid red
    color #fff

.box1
  .item
    border 1px solid green
    margin 0 10px
    padding 0 10px

.box2
  .item
    width 100%
    border 1px solid green
    margin 0 10px
    padding 0 10px
</style>