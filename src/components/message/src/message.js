export default {
  name: 'LxMessage',

  data () {
    return {
      message: '',
      time: 3000,
      show: true
    }
  },

  methods: {
    close () {
      const that = this
      window.setTimeout(() => {
        that.show = false
      }, this.time)
    }
  },

  mounted () {
    console.log(this)
    this.close()
  }
}