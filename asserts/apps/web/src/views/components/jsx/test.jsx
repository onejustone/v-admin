export default {
  name: 'Test',

  props: [],

  data () {
    return {
      test: 'i am jack'
    }
  },

  methods: {
    handleClick () {
    }
  },

  render (h) {
    const directives = [
      { name: 'focus', arg: 'text', value: this.test, expression: this.handleClick }
    ]

    return (
      <input {...{ directives }} > </input>
    )
  }
}
