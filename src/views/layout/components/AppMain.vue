<template lang="pug">
  div.app-main
    transition(:name="transitionName")
      router-view
</template>

<script>
  export default {
    name: 'appMain',

    data () {
      return {
        transitionName: 'el-zoom-in-top'
      }
    },

    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'el-zoom-in-center' : 'el-zoom-in-bottom'
      }
    },
  }
</script>

<style lang="stylus" scoped>
</style>
