<template lang="pug">
span
  el-button(@click="handleCollpase")
</template>

<script>
import { mapMutations } from 'vuex'
import * as mType from '../../../store/mutationTypes/permission'

export default {
  name: 'CollapseMenu',
  methods: {
    ...mapMutations('permission/router', [`${mType.SWITCH_COLLPASE}`]),

    handleCollpase () {
      this[mType.SWITCH_COLLPASE]()
    }
  }
}
</script>
