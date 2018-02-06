<template lang="pug">
    div.app-main
      router-view
      el-button(@click="handleCollpase") switchCollpase
</template>

<script>
  import { mapMutations } from 'vuex'
  import * as mType from '../../../store/mutationTypes/permission'

  export default {
    name: 'appMain',

    methods: {
      ...mapMutations('permission/router', [`${mType.SWITCH_COLLPASE}`]),

      handleCollpase () {
        this[mType.SWITCH_COLLPASE]()
      }
    }
  }
</script>

<style lang="stylus" scoped>
.box
  dispay inline-block
  width 0
  &::before
    content 'love 你 you'
    outline 1px solid red
    color #fff

.box1
  .item
    border 1px solid green
    margin 0 10px
    padding 0 10px

.box2
  .item
    width 100%
    border 1px solid green
    margin 0 10px
    padding 0 10px
</style>