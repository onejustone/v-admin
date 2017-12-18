<template lang="pug">
  lx-container
    lx-aside(style="height:100%;width:150px")
      side-bar
    lx-container(direction="vertical")
      lx-main.lx-main
        nav-bar
        tags-view
        app-main
</template>

<script>
import { SideBar, AppMain, NavBar, TagsView } from './views/layout'
import BackToUp from './components/backToUp'
export default {
  name: 'app',

  components: {
    SideBar,
    AppMain,
    NavBar,
    TagsView,
    BackToUp
  },

  computed: {
    testValue () {
      const obj = { 'cssName': 'red' }
      if (this.$_hasOwn(obj, 'cssName')) {
        return 'fuckaaaaa'
      }
    }
  }
}
</script>

<style lang="styl">
 @import "style/global.styl"
</style>

