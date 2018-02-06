<template lang="pug">
div.b-test
  el-button(@click="nodeClick") 点击触发
  div item {{ slotProps.innerProps }}
</template>

<script>
export default {
  name: 'bTest',

  props: ['slotProps'],

  data () {
    return {
      arrs: ['a', 'b', 'c', 'd', 'e']
    }
  },

  methods: {
    nodeClick () {
      console.log('bTest nodeClick')
      this.$parent.$emit('nodeClick')
    }
  }
}
</script>