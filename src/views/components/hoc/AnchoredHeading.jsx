const getChildrenTextContent = function (children) {
  return children.map(node => {
    return node.children ? getChildrenTextContent(node.children) : node.text
  }).join('')
}

export default {
  name: 'AnchoredHeading',

  render (h) {
    // const headId = getChildrenTextContent(this.$slots.default)
    //   .toLowerCase()
    //   .replace(/W+/g, '-')
    //   .replace(/(^\-|\-$)/g, '')

    return (<h2>fuck </h2>)
  },
  props: {
    level: { type: Number }
  }
}
