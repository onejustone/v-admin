import LxMessage from 'components/message'
import LxDialog from 'components/dialog'

import LxContainer from 'components/container'
import LxAside from 'components/aside'
import LxMain from 'components/main'
import LxHeader from 'components/header'
import LxFooter from 'components/footer'

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
}

export default install
