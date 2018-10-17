<template lang="pug">
section.dashboard
  div dashboard
  div.box
    img(src="static/demo.jpg")
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="stylus" scoped>
.box
  font-size 0
  padding 10px
  height 200px
  width 200px
  border 10px solid red
  overflow-x hidden
  overflow-y auto
</style>

