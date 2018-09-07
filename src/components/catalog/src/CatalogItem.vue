<template lang="pug">
li.catalog-anchor-item(
  @click="gotoAnchor(anchorNode)"
  :data-catalog-anchor-id="anchorNode[anchorProps.anchor]"
  :class="{'catalog-item__disabled': disabledCatalogItem(anchorNode)}"
  :style="[itemStyle]"
)
  span.catalog-item__name {{ anchorNode[anchorProps.name] }}
</template>

<style lang="stylus" scoped>
.catalog-anchor-item
  line-height 30px
  &:hover
    font-style italic
    cursor pointer

.catalog-item__disabled
  color gray
</style>

<script>
export default {
  name: 'CatalogItem',

  props: {
    anchorNode: { type: Object, default () {
      return {
        anchor: 'anchor',
        name: 'name'
      }
    } },
    anchorProps: { type: Object, default () {
      return {
        id: 'id',
        anchor: 'anchor',
        name: 'label'
      }
    }},
    activeAnchorId: String,
    activeTextColor: { type: String, default: 'green' },
    textColor: { type: String, default: 'red'}
  },

  data () {
    return {
      active: false,
      currentAnchorId: this.activeAnchorId
    }
  },

  computed: {
    itemStyle () {
      return {
        color: this.active ? this.activeTextColor : this.textColor
      }
    }
  },

  mounted () {
    this.helightActiveAnchor()
  },

  watch: {
    activeAnchorId (newActiveAnchorId) {
      this.currentAnchorId = newActiveAnchorId
      this.helightActiveAnchor()
    },

    currentAnchorId () {
      this.helightActiveAnchor()
    }
  },

  methods: {
    helightActiveAnchor () {
      if (this.currentAnchorId === this.anchorNode[this.anchorProps['anchor']]) {
        this.$el.style.color = this.activeTextColor
        this.$el.scrollIntoView()
      } else {
        this.$el.style.color = this.textColor
      }
    },

    disabledCatalogItem (anchorNode) {
      return this.$_hasOwn(anchorNode, 'disabled') && !anchorNode.disabled
    },

    handleMouseover () {
      this.active = true
    },

    handleMouseleave () {
      this.active = false
    },

    gotoAnchor (anchorNode) {
      if (this.disabledCatalogItem(anchorNode)) return
      const anchorElement = document.querySelector(`#${anchorNode.anchor}`)
      if (!anchorElement) {
        console.warn('没有找到对应的锚点导航元素，请检查配置是否正确!', anchorNode)
        return
      }
      anchorElement.scrollIntoView()
      this.$emit('updateHelightAnchor', anchorNode)
    }
  }
}
</script>
