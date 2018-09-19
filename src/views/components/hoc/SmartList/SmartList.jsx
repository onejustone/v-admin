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
    console.log(context.props.items, 'items')
    function appropriateListComponent () {
      const items = context.props.items

      if (items.length === 0) return EmptyList
      if (typeof items[0] === 'object') return TableList
      if (context.props.isOrdered) return OrderedList

      return UnorderedList
    }

    return h(
      appropriateListComponent(),
      context.data,
      context.children
    )
  }
}
