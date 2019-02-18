export default {
  name: 'LxBreadcrumb',

  data () {
    return {
      levelList: []
    }
  },

  mounted () {
    this.getBeadcrumb()
  },

  watch: {
    '$route': 'getBeadcrumb'
  },

  methods: {
    getBeadcrumb () {
      const matched = this.$route.matched.filter(item => item.name)
      this.levelList = matched
    }
  }
}
