<template lang="pug">
  div.light-table-example
    light-table(
      :tableColumns="tableColumns"
      :tableData="tableData"
      :tableOptions="tableOptions"
      :enablePage="false"
      :enableDragable="true"
      :enableQueryFromUrl="false"
      optionColumnAlign="center"
      @updateTableData="updateTableData"
    )
</template>

<script>
import LightTable from 'packages/lightTable'

export default {
  name: 'Example',

  components: {
    LightTable
  },

  data () {
    return {
      tableData: [
          { id: '1', name: 'aack', age: 18 },
          { id: '2', name: 'back', age: 28 },
          { id: '3', name: 'cack', age: 38 },
          { id: '4', name: 'dack', age: 48 },
          { id: '5', name: 'eack', age: 58 },
          { id: '6', name: 'fack', age: 68 }
        ]
    }
  },

  computed: {
    tableColumns () {
      return [
        { label: 'order', column: 'id' },
        { label: '姓名', column: 'name' },
        { label: '年龄', column: 'age' }
      ]
    },
    tableOptions () {
      return [
        { label: '删除', handle: this.handleDelete.bind(this)}
      ]
    }
  },

  methods: {
    updateTableData () {

    },
    handleDelete (rowData) {
      this.tableData = this.tableData.filter(item => item.id !== rowData.id)
    }
  }
}
</script>
