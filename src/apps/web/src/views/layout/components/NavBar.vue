<template lang="pug">
  section(class="nav-bar")
    div.toggle-menu
    div {{ levelList }}
</template>

<script>
  // import LxBreadcrumb from '../../../components/breadcrumb'

  export default {
    name: 'NavBar',

    components: {
      // LxBreadcrumb
    },

    data () {
      return {
        levelList: []
      }
    },

    created () {
      this.getBreadcrumb()
    },

    watch: {
      $router: 'getBreadcrumb'
    },

    methods: {
      getBreadcrumb () {
        const currentRoute = this.$router.currentRoute
        console.log(currentRoute, 'currentRoute')
        const currentRouteInfo = currentRoute.matched.find(item => item.name === currentRoute.name)

        if (!currentRouteInfo) {
          this.levelList = []
        }

        console.log(currentRouteInfo);
      }
    }
  }
</script>
