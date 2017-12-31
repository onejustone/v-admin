<template lang="pug">
  lx-container
    lx-aside(style="height:100%")
      side-bar
    lx-container(direction="vertical")
      lx-main
        nav-bar
        tags-view
        app-main
</template>

<script>
  import { SideBar, NavBar, AppMain, TagsView } from './components'

  export default {
    name: 'Layout',

    components: {
      SideBar,
      NavBar,
      TagsView,
      AppMain
    }
  }
</script>