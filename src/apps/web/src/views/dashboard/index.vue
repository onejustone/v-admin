<template lang="pug">
section.dashboard
  div dashboard
  span.button button-text
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
  },

  mounted () {
    window.onload = function () {
     console.log(window['aaa'].aaa); // 此处window['aaa']为undifine，所以这里一定会报错
    };
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
  background $primary-color
</style>

<style lang="scss">
.button {
  color: $primary-color;
}
</style>
