<template lang="pug">
  span.list-sub-item
    span.text.blod.red {{ content }}
</template>

<style lang="stylus" scoped>
.list-item
  margin-left 20px
</style>

<script>
  export default {
    name: 'ListSubItem',

    props: {
      content: String
    },

    created () {
    },

    beforeDestroy () {
    }
  }
</script>
