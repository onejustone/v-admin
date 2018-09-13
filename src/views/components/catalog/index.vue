<template lang="pug">
section.section
  div.side-nav
    lx-catalog(
      :anchorList="navTreeData"
      :activeAnchorId="currentAnchorId"
    )

  div.article
    div(v-for="item in navTreeData")
      div(:id="item.anchor" :data-scroll-id="item.anchor").item {{ item.label }}
      div(v-for="children in item.children")
        div(:id="children.anchor" :data-scroll-id="children.anchor").item-children {{ children.label }}
        div(v-for="child in children.children")
          div(:id="child.anchor" :data-scroll-id="child.anchor").item-children-child {{ child.label }}
</template>

<style lang="stylus" scoped>
.side-nav
  width 400px
  float left

.article
  width 400px
  height 200px
  overflow auto
  position relative
  float left

.item
  margin 40px 0px
  line-height 40px

.item-children
  margin 20px 0px
  line-height 30px

.item-children-child
  margin 10px 0px
  line-height 20px
</style>

<script>
import LxCatalog from 'packages/catalog'

import navTestData from './nav_test_data.js'

import { debounce } from 'lodash'

export default {
  name: 'Catalog',

  components: {
    LxCatalog
  },

  data () {
    return {
      articleAnchorElements: null,
      currentAnchorId: null
    }
  },

  computed: {
    navTreeData () {
      return navTestData
    },

    articleAnchorElementsArray () {
      if (!this.articleAnchorElements) return []
      return Array.from(this.articleAnchorElements)
    }
  },

  created () {
    this.listenArticleScroll = debounce(this.listenArticleScroll, 300)
  },

  mounted () {
    this.listenArticleScroll()
    this.cacheAnchorElements()
  },

  methods: {
    cacheAnchorElements () {
      const article = this.$el.querySelector('.article')
      const anchors = article.querySelectorAll("div[id*='anchor-']")
      console.log(anchors, 'anchors')
      this.articleAnchorElements = anchors
    },
    listenArticleScroll () {
      const article = this.$el.querySelector('.article')
      article.addEventListener('scroll', (e) => {
        this.detectCurrentAnchor(e)
      })
    },
    detectCurrentAnchor (e) {
      const articleScrollTop = e.target.scrollTop
      const articleClientHeight = e.target.clientHeight

      const currentScrollHeight = articleScrollTop + articleClientHeight

      for (const anchorEle of this.articleAnchorElementsArray) {
        const anchorEleOffsetTop = anchorEle.offsetTop
        const anchorOffsetHeight = anchorEle.offsetHeight

        if (
          articleScrollTop - anchorOffsetHeight < anchorEleOffsetTop &&
          articleScrollTop + anchorOffsetHeight > anchorEleOffsetTop &&
          articleScrollTop > anchorEleOffsetTop
          ) {
          anchorEle.style.color = 'red'
          const anchorSrollId = anchorEle.dataset.scrollId
          this.currentAnchorId = anchorSrollId
        } else {
          anchorEle.style.color = 'green'
        }
      }
    }
  }
}
</script>
