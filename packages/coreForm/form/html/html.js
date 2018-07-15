import { hasOwn } from 'utils/detectDataType.js'

export default {
  name: 'LxHtml',

  componentName: 'LxHtml',

  props: {
    displayMode: { type: String, default: 'preview' },
    node: { type: Object, default () { return {} } }
  },

  computed: {
    nodeType () {
      if (hasOwn(this.node, 'config')) {
        return this.node.config.type
      }
    },

    nodeClass () {
      const modifier = this.displayMode === 'edit' ? '__is-edit' : '__is-preview'

      return {
        [`form-paragraph-title${modifier}`]: this.nodeType === 'paragraph_title',
        [`form-table-row-title${modifier}`]: this.nodeType === 'table_row_title',
        [`form-table-col-title${modifier}`]: this.nodeType === 'table_col_title'
      }
    }
  }
}
