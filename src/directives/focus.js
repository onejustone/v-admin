export default {
  inserted: function (el, binding) {
    // const value = binding.value
    const arg = binding.arg
    // const expression = binding.expression
    el.focus()
    el.style.width = '200px'
    el.style.border = '10px solid green'
    el.value = arg
  }
}
