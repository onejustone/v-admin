export default {
  name: 'LxDialog',

  data () {
    return {
      show: false,
      onClose: null,
      onConfirm: null
    }
  },

  methods: {
    open () {
      this.show = true
    },

    close () {
      if (typeof this.onClose === 'function') {
        this.onClose()
      }

      this.show = false
      // this.$emit('update:show', false)
    },

    confirm () {
      if (typeof this.onConfirm === 'function') {
        this.onConfirm()
      }

      this.show = false
     // this.$emit('update:show', false)
    },

    handleEesKeyEscape (e) {
      document.addEventListener('keydown', e => {
        if (this.show && e.keyCode === 27) {
          this.close()
        }
      })
    }
  },

  mounted () {
    this.handleEesKeyEscape()
  }
}