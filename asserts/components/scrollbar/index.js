import Scrollbar from './src/main.vue'

Scrollbar.install = function (Vue) {
  Vue.components(Scrollbar.name, Scrollbar)
}

export default Scrollbar
