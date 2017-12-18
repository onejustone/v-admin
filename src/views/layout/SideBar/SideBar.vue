<template lang="pug">
  section(class="side-bar")
    el-menu(mode="vertical")
      side-bar-item(:routes="routes")
</template>

<script>
  import routesConfig from '../../../router/routes'
  import SideBarItem from './SideBarItem.vue'

  export default {
    name: 'SideBar',

    components: {
      SideBarItem
    },

    computed: {
      routes () {
        return routesConfig
      }
    }
  }
</script>