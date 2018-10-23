export default {
  inserted: function (el, binding) {
    const value = binding.value
    const arg = binding.arg
    const expression = binding.expression
    console.log(binding, 'binding')
    console.log(value, arg, expression)
    console.log(el, 'el')
    el.focus()
    el.style.width = '200px'
    el.style.border = '10px solid green'
    el.value = arg
  }
}
