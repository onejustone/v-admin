// 异步加载的组件只能使用.vue文件，package.json不可以
module.exports = path => () => import(`views/${path}.vue`)

