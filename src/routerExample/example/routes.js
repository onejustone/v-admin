import { _import } from 'router/config'
import { router } from 'config'

export default {
  path: `/${router.example}`,
  component: _import('example/Example')
}
