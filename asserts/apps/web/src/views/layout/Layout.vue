<template lang="pug">
  lx-container(style="height:100%")
    lx-aside(style="height:100%")
      //- 侧边导航
      side-bar.app-side-bar
    lx-container(direction="vertical" style="height:100%; overflow-y: auto;")
      lx-main.app-content
        //- 顶部导航菜单栏
        nav-bar.app-content_nav-bar
        keep-alive
          app-main.app-content_app-main
</template>

<script>
  import { SideBar, NavBar, AppMain} from './components'

  export default {
    name: 'Layout',

    components: {
      SideBar,
      NavBar,
      AppMain
    }
  }
</script>

<style lang="scss" scoped>
.app-content {
  padding-left: 0.5rem;
}
</style>
