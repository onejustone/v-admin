<template lang="pug">
  section.menu-container
    a-test
      div(slot="test" slot-scope="slotProps")
        b-test(:slotProps="slotProps")
</template>

<script>
  import ATest from './aTest.vue'
  import BTest from './bTest.vue'

  export default {
    components: {
      ATest,
      BTest
    },

    methods: {
      nodeClick () {
        console.log('nodeClick at testMenu')
      }
    }
  }
</script>

