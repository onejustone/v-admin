<template lang="pug">
  lx-container(style="height:100%")
    lx-aside(style="height:100%")
      side-bar
    lx-container(direction="vertical" style="height:100%; overflow-y: auto;")
      lx-main
        nav-bar
        tags-view
        keep-alive
          //- router-view
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
