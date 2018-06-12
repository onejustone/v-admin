<template lang="pug">
  section(class="side-bar" style="height:100%")
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

<style lang="stylus">
  .side-bar
    overflow auto
    .el-menu:not(.el-menu--collapse)
      min-width 200px
</style>
