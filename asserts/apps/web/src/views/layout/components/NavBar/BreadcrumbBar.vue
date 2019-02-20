<template lang="pug">
  div.app-breadcrumb-bar
    el-breadcrumb(class="app-breadcrumb" separator="/")
      transition-group
        el-breadcrumb-item(
          v-for="(item,index)  in navItemList"
          v-if='item.meta.title'
          :key="item.path"
        )
          span(
            v-if='item.redirect==="noredirect"||index==navItemList.length-1'
            class="no-redirect"
          ) {{ item.meta.title }}

          router-link(v-else :to="item.redirect||item.path") {{ item.meta.title }}
</template>

<script>
  export default {
    name: 'BreadcrumbBar',

    data () {
      return {
        navItemList: null
      }
    },

    created () {
      this.getBreadcrumb()
    },

    watch: {
      $route: 'getBreadcrumb'
    },

    methods: {
      getBreadcrumb () {
        let matched = this.$route.matched.filter(item => item.name);
        const first = matched[0]

        if (first && first.name !== 'home') {
          matched = [{ path: '/web/dashboard', meta: { title: '首页' }}].concat(matched)
        }

        this.navItemList = matched
      }
    }
  }
</script>

<style lang="scss" scoped>
.app-breadcrumb-bar {
  margin-top: 0.1rem;
}
</style>
