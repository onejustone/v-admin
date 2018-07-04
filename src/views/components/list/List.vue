<template lang="pug">
  section.list
    h2.text originData {{ listData }}
    h2.text _listData {{ _listData }}

    button.button.primary(@click="deleteItem") 切换
    div.list-item-content
       template(v-for="(item, index) of _listData")
         keep-alive
           ListItem(
             :content="item"
             :key="index"
             :index="index"
           )
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'List',

  components: {
    ListItem
  },

  data () {
    return {
      itemCout: 5,
      listData: [
        'a', 'b', 'c', 'd', 'e'
      ]
    }
  },

  computed: {
    _listData () {
      return this.listData.slice(0, this.itemCout)
    }
  },

  methods: {
    deleteItem () {
      const randomCount = Math.floor(Math.random()*5 + 1)
      this.itemCout = randomCount
    }
  }
}
</script>
