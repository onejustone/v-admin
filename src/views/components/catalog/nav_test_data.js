const data = [{
  anchor: 'anchor-1',
  label: '一级 1',
  children: [{
    anchor: 'anchor-1-1',
    label: '二级 1-1',
    children: [{
      anchor: 'anchor-1-1-1',
      label: '三级 1-1-1'
    }]
  }]
}, {
  anchor: 'anchor-2',
  label: '一级 2',
  children: [{
    anchor: 'anchor-2-1',
    label: '二级 2-1',
    children: [{
      anchor: 'anchor-2-1-1',
      label: '三级 2-1-1'
    }]
  }, {
    anchor: 'anchor-2-2',
    label: '二级 2-2',
    children: [{
      anchor: 'anchor-2-2-1',
      label: '三级 2-2-1'
    }]
  }]
}, {
  anchor: 'anchor-3',
  label: '一级 3',
  children: [{
    anchor: 'anchor-3-1',
    label: '二级 3-1',
    children: [{
      anchor: 'anchor-3-1-1',
      label: '三级 3-1-1'
    }]
  }, {
    anchor: 'anchor-3-2',
    label: '二级 3-2',
    children: [{
      anchor: 'anchor-3-2-1',
      label: '三级 3-2-1'
    }]
  }]
}]

export default data
