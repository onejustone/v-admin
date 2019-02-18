<template lang="pug">
section.section.anchored-heading-with-jsx
  template(v-for="item in 5")
    anchored-heading-with-jsx(
      :level="item"
    ) {{ `hello i am ${item}` }}
</template>

<script>
import AnchoredHeadingWithJsx from './AnchoredHeadingWithJSX.vue';

export default {
  name: 'Example',

  components: {
    AnchoredHeadingWithJsx
  }
}
</script>


