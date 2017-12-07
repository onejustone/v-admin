import LxMessage from '@root/components/message'
import LxDialog from '@root/components/dialog'

import LxContainer from '@root/components/container'
import LxAside from '@root/components/aside'
import LxMain from '@root/components/main'
import LxHeader from '@root/components/header'
import LxFooter from '@root/components/footer'

const components = [
  LxMessage,
  LxDialog,
  LxContainer,
  LxAside,
  LxMain,
  LxHeader,
  LxFooter
]

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$dialog = LxDialog
  Vue.prototype.$message = LxMessage
}

export default install
