<template lang="pug">
  ul.sub-catalog
    li.catalog-item__wrap(
      v-for="(nodeItem, index) in localAnchorList"
      :key="index"
    )
      catalog-item(
        :anchorNode="nodeItem"
        :textColor="textColor"
        :activeTextColor="activeTextColor"
        :anchorProps="anchorProps"
        :activeAnchorId="activeAnchorId"
        @updateHelightAnchor="updateHelightAnchor"
      )

      template(
        v-if="$_hasOwn(nodeItem, anchorProps['children']) && nodeItem[anchorProps['children']].length"
      )
        sub-catalog(
          class="sub-catalog"
          :anchorList="nodeItem[anchorProps['children']]"
          :anchorProps="anchorProps"
          :textColor="textColor"
          :activeTextColor="activeTextColor"
          :activeAnchorId="activeAnchorId"
          @updateHelightAnchor="updateHelightAnchor"
        )
</template>

<style lang="stylus" scoped>
.sub-catalog
  margin-left 20px
</style>

<script>
import { cloneDeep } from 'lodash'
import CatalogItem from './CatalogItem.vue'

export default {
  name: 'SubCatalog',

  props: {
    activeAnchorId: String,
    anchorList: Array,
    anchorProps: { type: Object, default () {
      return {
        'id': 'id',
        'anchor': 'anchor',
        'name': 'name',
        'children': 'children'
      }
    }},
    textColor: { type: String, default: '#333'},
    activeTextColor: { type: String, default: 'red'}
  },

  components: {
    CatalogItem
  },

  data () {
    return {
      localAnchorList: []
    }
  },

  computed: {
  },

  mounted () {
    this.initNavListData()
  },

  watch: {
    anchorList () {
      this.initNavListData()
    }
  },

  methods: {
    initNavListData () {
      this.localAnchorList = cloneDeep(this.anchorList)
    },

    updateHelightAnchor (anchorNode) {
      this.$emit('updateHelightAnchor', anchorNode)
    }
  }
}
</script>
