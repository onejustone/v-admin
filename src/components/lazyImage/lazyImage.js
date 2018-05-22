import { magnifyIamge, adjustImage } from '@/util/image'
import _ from 'lodash'

const EVENTS = ['scroll', 'load', 'wheel', 'mousewheel', 'resize']

const Util = {
  on: (el, evt, fn) => {
    el.addEventListener(evt, _.throttle(fn, 300))
  },

  off: (el, evt, fn) => {
    el.removeEventListener(evt, fn)
  }
}

export default {
  name: 'LazyImg',

  props: {
    enableLazy: {
      type: Boolean,
      default: true
    },

    img: {
      type: Object,
      default () {
        return {
          downloadLink: String,
          viewLink: String,
          previewLink: String
        }
      }
    },

    props: {
      type: Object,
      default () {
        return {
          downloadLink: 'downloadLink',
          viewLink: 'viewLink',
          previewLink: 'previewLink'
        }
      }
    }
  },

  data () {
    return {
      imgLoading: false,
      cached: false
    }
  },

  computed: {
    viewLink () {
      return this.props.viewLink
    },

    downloadLink () {
      return this.props.downloadLink
    },

    previewLink () {
      return this.props.previewLink
    }
  },

  created () {
  },

  mounted () {
    if (this.enableLazy) {
      this.init()
    }
  },

  beforeDestroy () {
    EVENTS.forEach(evt => {
      Util.off(window, evt, this.checkImage)
    })
  },

  methods: {
    handleLoad (e) {
      const target = e.target
      const parent = e.target.parentNode
      const parentWidth = parent.offsetWidth
      magnifyIamge(target, parentWidth)
      if (!this.enableLazy) {
        this.loadOriginImage(target)
      }
    },

    init () {
      EVENTS.forEach(evt => {
        Util.on(window, evt, this.checkImage)
      })
    },

    checkImage () {
      console.log(new Date())
      const el = this.$el
      const rect = el.getBoundingClientRect()
      if (
        rect.right > 0 &&
        rect.bottom > 0 &&
        rect.top < window.innerHeight &&
        rect.left < window.innerWidth
      ) {
        if (this.cached) {
          this.adjustImageSize()
          return
        }

        this.loadOriginImage()
        this.cached = true
      }
    },

    adjustImageSize () {
      // const parent = this.$el
      // const parentWidth = this.$el.offsetWidth
      // const parentHeight = this.$el.offsetHeight
      // // const image = this.$el.querySelectorAll('img')[0]
      // // const imageWidth = image.width
      // // const boundaryValue = Math.min()
      // adjustImage()
    },

    loadOriginImage (preview) {
      this.imgLoading = true
      const previewImage = this.$el.querySelectorAll('img.preview-image')[0]
      const newImage = new Image()
      const parent = this.$el
      const parentWidth = this.$el.offsetWidth
      newImage.src = this.img.viewLink
      const vm = this
      newImage.onload = function () {
        adjustImage(newImage, parentWidth)
        parent.appendChild(newImage)
        parent.removeChild(previewImage)
        vm.imgLoading = false
      }
    }
  }
}
