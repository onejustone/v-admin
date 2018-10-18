<template lang="pug">
  span.list-item
    span listSubItemTotal {{ listSubItemTotal }}
    div.list-sub-item-content
      ListSubItem(
        v-for="(item, subIndex) in listSubItemTotal"
        :key="index+subIndex"
        :content="content"
      )
</template>

<style lang="stylus" scoped>
.list-item
  margin-left 100px
</style>

<script>
  import ListSubItem from './ListSubItem.vue'
  export default {
    name: 'ListItem',

    props: {
      content: String,
      index: Number
    },

    components: {
      ListSubItem
    },

    computed: {
      listSubItemTotal () {
        const total = Math.abs(Math.floor(Math.random()*10)-5) + 1
        return total
      }
    },

    created () {
    },

    beforeDestroy () {
    }
  }
</script>
