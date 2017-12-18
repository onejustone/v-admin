<template lang="pug">
  section(class="side-bar")
    el-menu(mode="vertical")
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

    computed: {
      ...mapState('permission/router', ['routes'])
    }
  }
</script>