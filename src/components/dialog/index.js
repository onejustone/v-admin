import Vue from 'vue'
import Main from './src/main.vue'
import util from '@root/util'

const DialogConstrcutor = Vue.extend(Main)

let instance = ''
// const instances = []

const Dialog = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }

  const userOnClose = options.onClose
  options.onClose = () => {
    Dialog.onClose(userOnClose)
  }

  const userOnConfirm = options.onConfirm
  options.onConfirm = () => {
    Dialog.onConfirm(userOnConfirm)
  }

  instance = new DialogConstrcutor({
    data: options
  })

  if (util.isVNode(instance.content)) {
    instance.$slots.default = [instance.content]
    instance.content = null
  }

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.show = true
  instance.dom = instance.vm.$el
  return instance.vm
}

Dialog.onClose = (userOnClose) => {
  if (typeof userOnClose === 'function') {
    userOnClose()
  }
}

Dialog.onConfirm = (userOnConfirm) => {
  if (typeof userOnConfirm === 'function') {
    userOnConfirm()
  }
}

export default Dialog
