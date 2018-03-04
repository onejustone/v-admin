<template lang="pug">
div.b-test
  el-button(@click="nodeClick") 点击触发
  div item {{ slotProps.innerProps }}
</template>

<script>
export default {
  name: 'bTest',

  props: ['slotProps'],
  
  methods: {
    nodeClick () {
      console.log('bTest nodeClick')
      this.$parent.$emit('nodeClick')
    }
  }
}
</script>