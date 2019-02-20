<template lang="pug">
  section(class="side-bar" style="height:100%")
    el-scrollbar.side-bar-scrollbar(
      wrap-class="app-side-bar__wrap-class"
      wrap-style="height: 100%"
      view-class="app-side-bar__view-class"
      view-style="height: 100%"
      :native="false"
    )
      el-menu(
        style="height:100%"
        mode="vertical"
        @open="handleOpen"
        @close="handleClose"
        :default-active="$route.path"
        :default-openeds="openedsRoute"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="white"
        active-text-color="#409EFF"
      )
        //- a(href="screen.html")
        //-   el-menu-item(index="screen") 屏保应用
        side-bar-item(:routes="routes")
</template>

<script>
  import { mapState } from 'vuex'
  import SideBarItem from './SideBarItem.vue'

  export default {
    name: 'SideBar',

    components: {
      SideBarItem
    },

    data () {
      return {
        openedsRoute: []
      }
    },

    computed: {
      ...mapState('permission/router', ['routes', 'isCollapse'])
    },

    mounted () {
    },

    methods: {
      handleOpen (index, indexPath) {
        // todo
      },

      handleClose (index, indexPath) {
        // todo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side-bar-scrollbar {
    height: 100%;
  }

  .side-bar {
    overflow: auto;

    .el-menu:not(.el-menu--collapse) {
      min-width: 200px;
    }
  }
</style>
