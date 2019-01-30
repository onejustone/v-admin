<template lang="pug">
  footer(class="lx-footer" :style={ hegight })
    slot
</template>

<script>
  export default {
    name: 'LxFooter',

    componentName: 'LxFooter',

    props: {
      hegight: {
        type: String,
        default: '60px'
      }
    }
  }
</script>