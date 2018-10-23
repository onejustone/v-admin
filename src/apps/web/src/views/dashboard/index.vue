<template lang="pug">
section.dashboard
  div dashboard
  input(v-focus:text.foo.bar="text")
  div.box
    //- img(src="static/demo.jpg")
</template>

<script>
export default {
  name: 'Dashboard',

  data () {
    return {
      text: 'i am jack'
    }
  }
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

