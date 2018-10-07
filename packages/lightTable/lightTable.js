// import globalUitls from 'utils'
import Sortable from 'sortablejs'
import VueDraggable from 'vuedraggable'
import { cloneDeep } from 'lodash'

export default {
  name: 'LightTable',

  componentName: 'LightTable',

  props: {
    pending: { type: Boolean, default: false },
    tableData: { type: Array, default () { return [] } },
    rowClassName: { type: Function, default () { return () => {} } },
    /**
     * 目前 tbaleColumns 的数据结构是
     * [
     *   {
     *     label: '姓名', column: 'name', align: 'center'
     *   },
     *   {
     *     label: '邮箱', column: 'mail', align: 'center'
     *   }
     * ]
     */
    tableColumns: { type: Array, default () { return [] } },
    /**
     *
     * 目前 tableOptions 的数据结构是
     * [
     *   {
     *     label: '删除',
     *     optionId: 'delete',
     *     type: 'danger',
     *     handle: this.handleRemove.bind(this),
     *     size: 'small'
     *   }
     * ]
    */
    columnProps: {
      type: Object,
      default () {
        return {
          label: 'label',
          align: 'align',
          type: 'type',
          width: 'width',
          headerAlign: 'headerAlign',
          sortable: 'sort'
        }
      }
    },
    // 列表操作列
    tableOptions: { type: Array, default () { return [] } },
    /**
      *
      * filterOption 用于自定义控制 row 中 option(button) 的显示状态
      * 由 lightTable 传出 row 和 optionId, 计算结果由父级传入
    */
    optionColumnAlign: { type: String, default: 'center' },
    filterOption: { type: Function, default () { return true } },
    /**
     * fixedOptions 是否固定操作列 true/right/left
     */
    fixedOptions: { type: [Boolean, String], default: false },
    optionsWidth: { type: Number, default: 150 },
    loadData: { type: Function, default () { return function () {} } },
    tabs: { type: Array, default () { return [] } },
    showTab: { type: Boolean, default: true },
    showHeader: { type: Boolean, default: true },
    // 分页相关
    total: { type: Number, default: 0 },
    limit: { type: Number, default: 10 /* limit 的默认值需要和 pageSizes 中数据匹配 */ },
    currentPage: { type: Number, default: 1 },
    pageSizes: { type: Array, default () { return [10, 20, 30] } },
    // table 样式和尺寸属性
    size: { type: String, default: 'medium' },
    border: { type: Boolean, default: true },
    stripe: { type: Boolean, default: true },
    tableStyle: { type: Object, default () { return { 'backgroundColor': '#fff' } } },
    headerCellStyle: { type: Object, default () { return { 'backgroundColor': '#f5f7fa' } } },
    /**
     *
     * 是否启用 url 传递数据，lightTable 在某些场景下不需要使用 url 进行信息通信，比如弹窗中的 lightTable
     * 因为此时，外部组件可能会监听路由的变化，导致意外的数据请求
    */
    enableQueryFromUrl: { type: Boolean, default: true },
    enablePage: { type: Boolean, default: true },
    /**
     * column 属性相关
     */
    enableSelect: { type: Boolean, default: false },
    enableIndex: { type: Boolean, default: false },
    setSelectable: Function,
    /**
     * 拖拽
    */
    enableDragable: { type: Boolean, default: false }
    /**
     * setRowData
     */
  },

  components: {
    VueDraggable
  },

  data () {
    return {
      selfLimit: this.limit,
      selfCurrentPage: this.currentPage,
      columnEditValueStore: { },
      editColumnList: [],
      multipleSelection: [],
      defaultColumnProps: {
        label: 'label',
        align: 'align',
        type: 'type',
        width: 'width',
        minWidth: 'minWidth',
        headerAlign: 'headerAlign',
        sortable: 'sort'
      }
    }
  },

  computed: {
    hasOption () {
      return this.tableOptions.length > 0
    },

    _columnProps () {
      return Object.assign({}, this.defaultColumnProps, this.columnProps)
    }
  },

  methods: {
    createSortable () {
      const table = this.$el.querySelector('.el-table__body-wrapper tbody')
      const self = this
      // const tableData = cloneDeep(this.tableData)
      // const tableData = this.tableData

      function handleSortEnd ({ newIndex, oldIndex }) {
        console.log(newIndex, oldIndex)
        console.log(self.tableData, 'this.tableData')
        // const targetRow = tableData.splice(oldIndex, 1)[0]
        // tableData.splice(newIndex, 0, targetRow)
        // targetRow['index'] = newIndex
        // console.log(targetRow)
        // self.$emit('updateTableData', tableData)
      }

      const sortable = Sortable.create(table, {
        sort: true,
        onEnd ({ newIndex, oldIndex }) {
          handleSortEnd({ newIndex, oldIndex })
        }
      })
      // sortable.onEnd((n, o) => console.log(n, o))
      // {
      //   onEnd({ newIndex, oldIndex }) {
      //     const targetRow = tableData.splice(oldIndex, 1)[0]
      //     tableData.splice(newIndex, 0, targetRow)
      //     targetRow['index'] = newIndex
      //     console.log(targetRow)
      //     console.log(tableData, 'tableData')
      //     self.$emit('updateTableData', tableData)
      //   }
      // }
      console.log(sortable)
    },

    handleSizeChange (sizePage) {
      this.selfLimit = sizePage
      this.doSearch()
    },

    handleCurrentPage (page) {
      this.selfCurrentPage = page
      this.doSearch()
    },

    async doSearch () {
      const searchParams = {
        page: this.selfCurrentPage,
        limit: this.selfLimit
      }

      await this.loadData(searchParams)
      if (this.enableQueryFromUrl) {
        this.$router.push({ query: searchParams })
      }
    },

    setRows (rows) {
      rows.forEach(row => {
        this.$refs.lightTable.toggleRowSelection(row)
      })
    },

    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.lightTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.lightTable.clearSelection()
      }
    },

    select (selection, row) {
      this.$emit('select', selection)
    },

    selectionChange (multipleSelection) {
      this.multipleSelection = multipleSelection
      this.$emit('selectionChange', multipleSelection)
    },

    isEmpty (data) {
      return !data
    }
  },

  mounted () {
    this.doSearch()
    this.enableDragable && this.createSortable()
  },

  watch: {
    tableData () {
      this.enableDragable && this.createSortable()
    }
  }
}
