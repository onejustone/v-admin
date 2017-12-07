import { _import } from '@router/config'
import { router } from '@root/config'

export default {
  path: `/${router.example}`,
  component: _import('example/Example')
}
