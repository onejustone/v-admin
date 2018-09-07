function getScrollBarWidth () {
  const outer = document.createElement('div')
  outer.style.visibilty = 'hidden'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  outer.style.width = '100px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'

  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth

  const scrollBarWidth = widthNoScroll - widthWithScroll

  outer.parentNode.removeChild(outer)

  return scrollBarWidth
}

export default getScrollBarWidth

