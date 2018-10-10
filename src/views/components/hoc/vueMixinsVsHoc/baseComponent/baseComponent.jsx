export default {
  name: 'BaseComponent',

  props: {
    test: Number
  },

  methods: {
    handleClick () {
      console.log('handleClick test')
      this.$emit('customClick')
    }
  },

  render (h) {
    return (
      <div>
        <span onClick={this.handleClick}>
          props：{this.test}
        </span>
        {/* 具名插槽 */}
        <p>具名插槽</p>
        <slot name='slot1'></slot>
        <div slot='slot'></div>
        <p>====================</p>
        {/* 默认插槽 */}
        <p>默认插槽</p>
        <div slot='slot'></div>
      </div>
    )
  }
}
