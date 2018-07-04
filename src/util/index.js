import * as typeDetection from './typeDetection'
import * as vDom from './vdom'
import * as promise from './promise'
import * as common from './common'
import * as time from './time'
import * as env from './env'
import * as generateId from './generateId'

export default {
  ...typeDetection,
  ...vDom,
  ...promise,
  ...common,
  ...time,
  ...generateId,
  ...env
}
