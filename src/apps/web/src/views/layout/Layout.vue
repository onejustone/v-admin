<template lang="pug">
  lx-container(style="height:100%")
    lx-aside(style="height:100%")
      //- 侧边导航
      side-bar
    lx-container(direction="vertical" style="height:100%; overflow-y: auto;")
      lx-main
        //- 面包屑
        nav-bar
        //- 历史路由 标签
        tags-view
        keep-alive
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
