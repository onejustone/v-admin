<template lang="pug">
  ul.catalog(
    :style="itemStyle"
  )
    div {{ activeAnchorId }}
    li.catalog-item__wrap(
      v-for="(nodeItem, index) in localAnchorList"
      :key="index"
    )
      catalog-item(
        :anchorNode="nodeItem"
        :textColor="textColor"
        :activeTextColor="activeTextColor"
        :activeAnchorId="currentAnchorId"
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
          :activeAnchorId="currentAnchorId"
          @updateHelightAnchor="updateHelightAnchor"
        )
</template>

<style lang="stylus" scoped>
.catalog
  background gray
  height 200px
  width 200px
  overflow auto
</style>

<script>
import { cloneDeep } from 'lodash'
import CatalogItem from './CatalogItem.vue'
import SubCatalog from './SubCatalog.vue'

export default {
  name: 'CatalogNav',

  props: {
    activeAnchorId: '',
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
    CatalogItem,
    SubCatalog
  },

  data () {
    return {
      localAnchorList: [],
      catalogAnchorElements: [],
      currentAnchorId: this.activeAnchorId
    }
  },

  computed: {
    itemStyle () {
      return {
        width: this.width ? this.width : 'auto'
      }
    },

    // catalogAnchorArray () {
    //   if (!this.catalogAnchorElements) return []
    //   return Array.from(this.catalogAnchorElements)
    // }
  },

  created () {
  },

  mounted () {
    this.initNavListData()
    // this.cacheCatalogAnchorsElements()
  },

  watch: {
    anchorList () {
      this.initNavListData()
    },

    activeAnchorId (value) {
      this.currentAnchorId = value
    }
  },

  methods: {
    initNavListData () {
      this.localAnchorList = cloneDeep(this.anchorList)
    },

    updateHelightAnchor (anchorNode) {
      console.log(anchorNode)
      this.currentAnchorId = anchorNode[this.anchorProps['anchor']]
    }
  }
}
</script>
