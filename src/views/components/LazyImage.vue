<template lang="pug">
div.lazy-image-playground lazy image
  img(src="/static/demo.jpg")
  template(
    v-for="(img, idx) in images"
  )
    lazy-image(
      :key="idx"
      :img="img"
    )
</template>

<script>
import LazyImage from 'components/lazyImage'
import image_files from './images'

export default {
  name: 'LazyImagePlayGround',

  components: {
    LazyImage
  },

  computed: {
    images () {
      return image_files
    }
  }
}
</script>

<style lang="stylus">
.lazy-image-playground
  border 1px solid green
</style>
