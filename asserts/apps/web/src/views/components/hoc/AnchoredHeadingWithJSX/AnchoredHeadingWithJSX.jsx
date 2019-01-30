const getChildrenTextContent = function (children) {
  return children.map(node => {
    return node.children ? getChildrenTextContent(node.children) : node.text
  }).join('').replace(/\s+/gi, '')
}

export default {
  name: 'AnchoredHeading',

  functional: true,

  render (h, context) {
    const headId = getChildrenTextContent(context.children)
      .toLowerCase()
      .replace(/W+/g, '-')
      .replace(/(^\-|\-$)/g, '')

    const HType = `h${context.props.level}`

    return (<HType id={headId}>{context.children}</HType>)
  }
}
