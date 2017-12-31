<template lang="pug">
  section(class="side-bar")
    //- div {{ routes }}
    el-menu(mode="vertical" router)
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