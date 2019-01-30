  export default {
    name: 'LxContainer',

    props: {
      direction: String
    },

    computed: {
      isVertical () {
        if (this.direction === 'vertical') {
          return true
        }

        if (this.direction === 'horizontal') {
          return false
        }

        return this.$slots && this.$slots.default
        ? this.$slots.default.some(vNode => {
          const tag = vNode.componentOptions && vNode.componentOptions.tag
          return tag === 'lx-header' || tag === 'lx-footer'
        }) : false
      }
    }
  }
