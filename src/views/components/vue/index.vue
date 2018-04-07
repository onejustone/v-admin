<template lang="pug">
.root
  div.icon-x
    i.el-icon-warning
    span 拉三等奖拉就上了
    span 脸颊上飞机啊
</template>

<script>
import md5 from 'md5'
export default {
  name: 'VueDemo',

  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.root
  font-size 14px
  width 100px
.icon-x
  border 1px solid red
  line-height 40px
  padding-left 20px
</style>

