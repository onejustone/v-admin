export default function WithConsole (WrappedComponent) {
  return {
    mounted () {
      console.log('I am hoc componets, i have already mounted')
    },
    props: WrappedComponent.props,
    render (h) {
      console.log(this.$slots, '$slot')
       // 将 this.$slots 格式化为数组，因为 h 函数第三个参数是子节点，是一个数组
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          // 手动更正 vnode
          vnode.context = this._self
          return vnode
        })

      console.log(slots)
      // jsx 不需要下 h，render 需要写 h
      return h(
        WrappedComponent,
        {
          on: this.$listeners,
          attrs: this.$attrs, // attrs 指的是那些没有被声明为 props 的属性
          props: this.$props, // 需要显示的将 props 传递下去
         // 透传 scopedSlots
          scopedSlots: this.$scopedSlots
        },
        slots // 将 slots 作为 h 函数的第三个参数
      )
    }
  }
}
