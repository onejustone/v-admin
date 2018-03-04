import globalUtils from '@/util'
// import objectPath from 'object-path'

export default {
  name: 'LxCascader',

  props: {
    options: { type: Array, default () { return [] } },
    valuesArr: { type: Array, default () { return [] } },
    props: { type: Object, default () {
      return {
        value: 'value',
        children: 'children',
        label: 'label'
      }
    } },
    maxLevel: { type: Number, default: 3 }, // 支持的最大层级
    size: { type: String, default: 'small' }
  },

  data () {
    return {
      show: true,
      values: this.valuesArr,
      currentLabels: '',
      newItemValue: {},
      valueArr: [],
      disabled: true,
      list: [],
      currentNode: '',
      localOptions: this.options,
      addNewInputStack: {},
      tmpStoreEditItem: ''
    }
  },

  computed: {
    labelKey () {
      return this.props.label
    },

    childrenKey () {
      return this.props.children
    },

    valueKey () {
      return this.props.value
    },

    iconArrow () {
      return this.show ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
    },

    newValue (value) {
    }
  },

  mounted () {
    this.list = [this.options]
  },

  beforeDestoryed () {
  },

  methods: {
    showAction () {
      this.show = !this.show
      this.initMenu()
    },

    initMenu () {
      this.addNewInputStack = {}
      this.list = [this.options]
    },

    hide () {
    },

    selectAll () {
      this.valueArr = []

      this.list.forEach(group => {
        group.forEach(item => {
          if (item.selected) {
            this.valueArr.push(item)
          }
        })
      })

      this.currentLabels = this.getKeyValue(this.valueArr, this.labelKey).join('/')
    },

    getKeyValue (listArr, valueKey) {
      const value = []
      listArr.forEach(item => {
        value.push(item[valueKey])
      })
      return value
    },

    touch ($event, listIndex, item) {
      $event.stopPropagation()
      this.currentNode = item

      if (this.list.length !== 1 + listIndex) {
        // 清除上一次已选择的历史数据，并总是保留顶级节点数据, 叶子节点无需要再 copy 数组
        this.list = this.list.slice(0, 1 + listIndex)
      }

      this.list[listIndex].map(group => {
        // 设置同级所有节点未选择状态
        group['selected'] = false
      })
      // 设置目标节点为选择状态
      item['selected'] = true

      this.selectAll()

      if (item.children) {
        this.list.push(item.children)
      } else {
        this.show = false
      }
    },

    showAddButton (listIndex, list) {
      if (listIndex === 0 || listIndex > 2) {
        return false
      }

      return (
        !this.addNewInputStack['input_' + listIndex] ||
        !this.addNewInputStack['input_' + listIndex].show
      )
    },

    handleAddNew ($event, listIndex, group) {
      const objKey = 'input_' + listIndex

      this.list = this.list.slice(0, listIndex + 1)

      if (!this.addNewInputStack[objKey]) {
        this.$nextTick(_ => {
          this.$set(this.addNewInputStack, objKey, {})
        })
      }

      this.$nextTick(_ => {
        this.$set(this.addNewInputStack[objKey], 'value', '')
        this.$set(this.addNewInputStack[objKey], 'show', true)
      })

      setTimeout(() => {
        this.$refs[objKey][0].$refs.input.focus()
      }, 0)
    },

    newAddItem (listIndex, list) {
      const objKey = 'input_' + listIndex
      const newValue = this.addNewInputStack[objKey]['value']

      // const currentLevelGroup = list[listIndex]
      // 获得当前层级数组
      // const levelFirtNode = currentLevelGroup[0]
      // 获得第一个节点信息
      // const nodeAncestor = globalUtils.getAncestorNodes(levelFirtNode[this.valueKey], this.valueKey, this.options).reverse()
      // 以第一个节点为基准，找到其对应的祖先节点路径
      // 在当前节点的父级下插入新的节点
      let newNode = {
        [this.valueKey]: globalUtils.generateId(),
        [this.labelKey]: newValue
      }

      if (listIndex < this.maxLevel) {
        // 最大级别
        newNode = {
          ...newNode,
          [this.childrenKey]: []
        }
      }

      list[listIndex].push(newNode)
      // this.updateListTree(newValue, this.options, listIndex, list)
      this.addNewInputStack[objKey]['show'] = false
    },

    updateListTree (value, options, listIndex, list) {
      // 根节点禁止添加节点，唯 2 级别和 3 级可以
      // const [firstNode, secondNode, thirdNode] = nodePathArr

      // let newNode = {
      //   [this.valueKey]: globalUtils.generateId(),
      //   [this.labelKey]: value
      // }

      // if (listIndex < this.maxLevel) {
      //   // 三级节点不添加 children
      //   newNode = {
      //     ...newNode,
      //     [this.childrenKey]: []
      //   }
      // }

      // list[listIndex].push(newNode)
      // if (level === 3) {
      //   // if (!this.$_hasOwn(secondNode, 'children')) {
      //   //   secondNode.children = []
      //   // }
      //   secondNode.children.map(child => {
      //     if (child[this.valueKey] === thirdNode[this.valueKey]) {
      //       child.children.push(newNode)
      //     }
      //   })

      //   firstNode.children.map(node => {
      //     if (node[this.valueKey] === secondNode[this.valueKey]) {
      //       node = secondNode
      //     }
      //   })
      // }

      // if (level === 2) {
      //   firstNode.children.map(node => {
      //     if (node[this.valueKey] === secondNode[this.valueKey]) {
      //       node.children.push(newNode)
      //     }
      //   })
      // }

      // options.map(topNode => {
      //   if (topNode[this.valueKey] === firstNode[this.valueKey]) {
      //     topNode = firstNode
      //   }
      // })

      return options
    },

    canEdit (item) {
      return true
    },

    canDelete (item) {
      return true
    },

    handleDelete (item) {

    },

    handleEdit (item) {
      if (!this.$_hasOwn(item, 'isEdit')) {
        this.$set(item, 'isEdit', true)
      }

      item.isEdit = true
      this.tmpStoreEditItem = globalUtils.deepCloneObj(item)
    },

    doneMenuItemEdit (item) {
      item.isEdit = false
    },

    cancelMenuItemEdit (item) {
      this.$set(item, this.valueKey, this.tmpStoreEditItem[this.valueKey])
      this.$set(item, 'isEdit', false)
    },

    cancelAddItem (listIndex, list) {
      const objKey = `input_${listIndex}`
      this.$set(this.addNewInputStack[objKey], 'show', false)
    }
  }
}
