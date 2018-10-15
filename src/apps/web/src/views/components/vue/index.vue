<template lang="pug">
.root
  div.parent
    div.box
</template>

<script>
import md5 from 'md5'
export default {
  name: 'VueDemo',
}
</script>

<style lang="stylus" scoped>
.parent
  height 200px
  width 100px
  .box
    margin 0 10px
    border 2px solid green
    height 100px
</style>

