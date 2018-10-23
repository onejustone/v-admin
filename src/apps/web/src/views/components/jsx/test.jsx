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
      console.log('this.test')
      console.log(this.test)
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
