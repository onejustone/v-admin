
import focus from './focus'

const directives = [
  { name: 'focus', command: focus }
]

export default function Register (Vue) {
  directives.map(directive => {
    Vue.directive(directive.name, directive.command)
  })
}
