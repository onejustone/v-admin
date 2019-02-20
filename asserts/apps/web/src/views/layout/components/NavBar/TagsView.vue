<template lang="pug">
  section.tags-view-container
    el-scrollbar.tags-view_scroll-bar(
      view-style="padding: 0.08rem 0.02rem;"
      :native="false"
    )
      template(
        v-for="routeItem in historyRouteList"
        v-if="routeItem.meta && routeItem.meta.title"
      )
        el-tag.tags-view-item(
          type="warn"
          size="small"
        )
          router-link(
            :to="routeItem.path"
          ) {{ routeItem.meta.title }}

          i.el-icon-close
</template>

<script>
  export default {
    name: 'TagsView',

    data () {
      return {
        historyRouteList: []
      }
    },

    computed: {

    },

    watch: {
      $route: 'updateRouterTags'
    },

    methods: {
      updateRouterTags () {
        const currentRoute = Object.assign(
          {},
          {
            name: this.$route.name,
            meta: this.$route.meta,
            path: this.$route.fullPath
          })

        if (!currentRoute.name) return

        this.historyRouteList = this.historyRouteList
          .filter(item => item.path !== currentRoute.path)

        this.historyRouteList.push(currentRoute)
      }
    }
  }
</script>

<style lang="scss" scoped>
.tags-view-container {
  margin-top: 0.05rem;
  white-space: nowrap;
  font-size: 0;
}

.tags-view_scroll-bar {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  border-bottom: 1px solid #d8dce5;
}


.tags-view-item {
  margin-left: 0.05rem;
}
</style>

