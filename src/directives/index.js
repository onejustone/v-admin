
import focus from './focus'

const directives = [
  { name: 'focus', command: focus }
]

export default function Register (Vue) {
  console.log(Vue)
  directives.map(directive => {
    console.log(directive)
    Vue.directive(directive.name, directive.command)
  })
}
