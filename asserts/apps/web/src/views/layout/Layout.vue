<template lang="pug">
  lx-container.webside-container(style="height:100%")
    lx-aside(style="height:100%")
      //- 侧边导航
      side-bar.webside_side-bar
    lx-container.webside-app_warp(direction="vertical" style="height:100%;")
      el-scrollbar.webside-app_warp_scroll-container(
        view-style="height:100%;padding: 0 0.05rem;"
      )
        lx-main.webside-app
          //- 顶部导航菜单栏
          nav-bar.webside-app_nav-bar
          keep-alive
            app-main.webside-app_main
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
.webside-app_warp {
  padding-left: 0.05rem;
}

.webside-app_warp_scroll-container {
  height: 100%;
  padding: 0.01rem 0;
}
</style>
