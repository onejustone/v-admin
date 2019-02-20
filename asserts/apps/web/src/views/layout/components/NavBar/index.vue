<template lang="pug">
  div.app-nav-bar
    breadcrumb-bar
    tags-view
</template>

<script>
import TagsView from './TagsView.vue'
import BreadcrumbBar from './BreadcrumbBar.vue'

export default {
  name: 'NavBar',

  components: {
    TagsView,
    BreadcrumbBar
  }
}
</script>

<style lang="scss" scoped>

</style>
