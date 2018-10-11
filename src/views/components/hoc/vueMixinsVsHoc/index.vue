<template lang="pug">
 div
    section.section
      h3 base-component-with-mixin
      base-component-with-mixin(
        @customClick="customClick"
        :test=1000
      )

    section.section
      h3 base-component-with-hoc
      base-component-with-hoc
</template>

<script>
import BaseComponentWithMixin from './baseComponentWithMixin'
import BaseComponentWithHoc from './baseComponentWithHoc'

export default {
  name: 'VueHoc',

  components: {
    BaseComponentWithMixin,
    BaseComponentWithHoc
  },

  methods: {
    customClick () {
      console.log('parent customClick')
    }
  }
}
</script>
