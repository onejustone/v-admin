export default {
  name: 'ViewTags',

  data () {
    return {
      historyRouters: []
    }
  },

  methods: {
    recodeRouter (to, from, next) {
      if (this.historyRouters.length > 10) {
        this.historyRouters.pop(to)
      }

      const activeRoute = this.historyRouters.find(item => {
        item.name === to.name
      })

      if (activeRoute) {
        return
      }

      this.historyRouters.push(to)
    }
  },

  watch: {
    '$route': 'recodeRouter'
  }
}