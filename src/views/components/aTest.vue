<template lang="pug">
div.a-test
  el-button(@click="doPromise") doPromise

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
    async waitProimse () {
      await new Promise(r => setTimeout(r, 1000))

      const isHeads = Boolean(Math.round(Math.random()) + 1)

      if (isHeads) return 'yes'
      throw Error('Boo!')
    },

    async doPromise () {
      try {
        const result = await this.waitProimse()
        console.log(result)
      } catch (e) {
        console.error(e)
      }
    },

    outClick () {
      console.log('yes, at aText')
    }
  },

  mounted () {
    this.$on('nodeClick', () => this.outClick())
  }
}
</script>