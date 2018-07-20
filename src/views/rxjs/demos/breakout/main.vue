<template lang="pug">
section.section.breakout-wrapper
  canvas(
    id="stage"
    width="480"
    height="320"
  )
</template>

<style lang="stylus" scoped>
.breakout-wrapper
   background-color pink
</style>

<script>
export default {
  name: 'Breakout'
}
</script>
