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
  }
}
</script>

<style type="text/css">
  /*html,
  body {
    overflow: auto;
  }
*/</style>

<style lang="styl">
  html
      width 100%
      height 100%
  .lx-main
    border 1px solid red
</style>