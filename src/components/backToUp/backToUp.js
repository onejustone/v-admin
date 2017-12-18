export default {
  name: 'BackToUp',

  props: {
    visibleHeight: { type: Number, default: 400 }
  },

  data () {
    return {
      visible: false,
      timer: null
    }
  },

  methods: {
    backToTop () {
      const lastPosition = window.pageYOffset
      const step = 50
      let i = 1
      this.timer = setInterval(_ => {
        const next = lastPosition - step * i
        console.log(i)
        if (next <= -lastPosition) {
          window.scroll(0, 0)
          clearInterval(this.timer)
          this.timer = null
        } else {
          window.scroll(0, next)
        }
        i ++
      }, 10)
    },

    handleScroll () {
      this.visible = window.pageYOffset > this.visibleHeight
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },

  destory () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}