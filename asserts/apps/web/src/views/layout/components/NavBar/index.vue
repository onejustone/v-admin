<template lang="pug">
  div.app-nav-bar
    breadcrumb-bar
</template>

<script>
import BreadcrumbBar from './BreadcrumbBar.vue'

export default {
  name: 'NavBar',

  components: {
    BreadcrumbBar
  }
}
</script>

<style lang="scss" scoped>

</style>
