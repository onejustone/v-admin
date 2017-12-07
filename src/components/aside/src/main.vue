<template lang="pug">
  aside(class="lx-aside" :style="{ width }")
    slot
</template>

<script>
  export default {
    name: 'LxAside',

    componentName: 'LxAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  }
</script>