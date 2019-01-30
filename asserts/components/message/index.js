import Vue from 'vue'
import LxMessage from './src/main.vue'

const MessageConstructor = Vue.extend(LxMessage)

let instance = ''

const Message = (options) => {
  options = options || {}

  const userOnClose = options.onClose

  options.onClose = () => {
    Message.close(userOnClose)
  }

  instance = new MessageConstructor({
    data: options
  })

  instance.vm = instance.$mount()
  document.querySelector('body').appendChild(instance.$el)

  instance.vm.show = true
  instance.dom = instance.vm.$el
  return instance.vm
}

export default Message
