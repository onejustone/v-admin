import consoleMixin from './mixins/console'

export default {
  name: 'BaseComponent',

  mixins: [consoleMixin],

  props: {
    test: Number
  },

  methods: {
    handleClick () {
      this.$emit('customClick')
    }
  },

  render (h) {
    return (
      <div>
        <h2>我是基于mixins实现的，我是侵入式的</h2>
        <span onClick={this.handleClick}>
          props：{this.test}
        </span>
        {/* 具名插槽 */}
        <slot name='slot1'></slot>
        <p>====================</p>
        {/* 默认插槽 */}
        <slot></slot>
      </div>
    )
  }
}
