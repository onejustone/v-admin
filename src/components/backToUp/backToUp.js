export default {
  name: 'BackToUp',

  props: {
    visibleHeight: { type: Number, default: 400 }
  },

  data () {
    return {
      visible: false
    }
  },

  methods: {
    backToTop () {
      window.scrollTo(0, 0)
    },

    handleScroll () {
      console.log('hahah')
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