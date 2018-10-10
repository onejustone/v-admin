import BaseComponent from '../baseComponent'
import hoc from './hoc'

const EnhancedCom = hoc(BaseComponent)

export default {
  name: 'BaseComponentWithHoc',

  components: {
    EnhancedCom
  },

  render (h) {
    // jsx 不需要下 h，render 需要写 h
    return (
      <div>
        <h2>我是基于hoc实现的，我是非侵入式的</h2>
        <enhanced-com test={9999}>
          <p>Default Slot</p>
          <h2 slot='slot1'>has name slot</h2>
        </enhanced-com>
      </div>
    )
  }
}
