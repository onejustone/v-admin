<template lang="pug">
div.a-test
  div(v-for="item in arrs")
    slot(name="test" :innerProps="item")
</template>

<script>
export default {
  name: 'ATest',

  data () {
    return {
      arrs: ['a', 'b', 'c', 'd', 'e']
    }
  },

  methods: {
    outClick () {
    }
  },

  mounted () {
    this.$on('nodeClick', () => this.outClick())
  }
}
</script>

<style lang="stylus">
</style>
