
const _import = require('./_import_' + process.env.NODE_ENV)
// const _import = require('./_import_production')

/**
* in development-env not use lazy-loading, because lazy-loading too many pages will
* cause webpack hot update too slow. so only in production use lazy-loading;
*/

// 该模块只能用于加载 views 下的组件
export {
  _import
}
