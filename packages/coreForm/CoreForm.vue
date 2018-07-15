<template lang="pug">
  .lx-core-form lx-core-form
</template>

<script>
import FormStore from './model/formStore.js'

export default {
  name: 'LxCoreForm',

  props: {
      node: { type: Object, default () { return { } } },
      data: Array,
      layoutLevel: { type: Number, default: 1 },
      layoutSetting: Array,
      layoutStyle: String,
      isDialogForm: Boolean,
      formId: String,
      itemId: String,
      formDisplayConfig: Object,
      showType: String,
      displayMode: String,
      isMultiForm: Boolean,
      // 是否查找表单验证中的错误字段并自动跳转到错误字段
      findErrorField: { type: Boolean, default: true },
      // 是否显示表单标题
      hiddenFormTitle: Boolean,
      // 是否启用表单折叠
      enableCollpase: { type: Boolean, default: true },
      // 是否使用 el-form-item 包裹 field 组件,打印时在@tempalte中使用
      useFormWrapField: { type: Boolean, default: true },
      // 是否启用 fieldTitle, 打印时在@tempalte form block 中使用
      enableFieldTitle: { type: Boolean, default: true },
      // 数据源
      itemSource: Object
      // node 节点本身
    }
  }
</script>

