import EmptyList from './components/EmptyList.vue'
import OrderedList from './components/OrderedList.vue'
import TableList from './components/TableList.vue'
import UnorderedList from './components/UnorderedList.vue'

export default {
  name: 'SmartList',
  functional: true,
  props: {
    items: { type: Array, required: true },
    isOrdered: Boolean
  },
  render (h, context) {
    function appropriateListComponent () {
      const items = context.props.items

      if (items.length === 0) return EmptyList
      if (typeof items[0] === 'object') return TableList
      if (context.props.isOrdered) return OrderedList

      return UnorderedList
    }

    return h(
      appropriateListComponent(),
      context.data, // 通过 context.data 在函数式组件中传递所有的特性和事件监听器
      context.children // 等同于非函数式组件中的 this.$slots.default
    )
  }
}
