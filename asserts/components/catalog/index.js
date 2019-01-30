import Catalog from './src/main.vue'

Catalog.install = function (Vue) {
  Vue.components(Catalog.name, Catalog)
}

export default Catalog
