<template lang="pug">
div
  lx-cascader(:options="cascaderOptions" :props="cascaderProps" :valuesArr.sync="value")
  span rootValue {{ value }}
</template>

<script>
import LxCascader from "components/cascader"
import camelize from 'camelize'

const rowData = [
    {
      "title_id": "debug1",
      "code": "1",
      "name": "项目直接费用",
      "children": [
        {
          "title_id": "debug2",
          "code": "1.1",
          "name": "材料费",
          "children": [
            {
              "title_id": "debug3",
              "code": "1.1.1",
              "name": "水泥费",
              "with_ledger": true,
              "fixed": true
            },
            {
              "title_id": "debug7",
              "code": "1.1.2",
              "name": "相机费",
              "with_ledger": true,
              "fixed": false
            }
          ],
          "with_ledger": false,
          "fixed": true
        }
      ],
      "with_ledger": false,
      "fixed": true
    },
    {
      "title_id": "debug4",
      "code": "2",
      "name": "项目执行费用",
      "with_ledger": false,
      "fixed": true,
      "children": []
    },
    {
      "title_id": "debug5",
      "code": "3",
      "name": "项目管理费用",
      "with_ledger": false,
      "fixed": true,
      "children": []
    }
  ]

export default {
  name: 'Cascader',

  components: {
    LxCascader
  },

  data () {
    return {
      cascaderProps: {
        value: 'name',
        label: 'name',
        children: 'children'
      },
      value: []
    }
  },

  computed: {
    cascaderOptions () {
      return camelize(rowData)
    }
  }
}
</script>

<style lang="stylus">

</style>


