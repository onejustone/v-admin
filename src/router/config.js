
const _import = require('./_import_' + process.env.NODE_ENV)

/**
* in development-env not use lazy-loading, because lazy-loading too many pages will
* cause webpack hot update too slow. so only in production use lazy-loading;
*/

export {
  _import
}
