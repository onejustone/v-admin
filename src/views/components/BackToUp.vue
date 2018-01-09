<template lang="pug">
  section.back-to-up-container
    div(v-for="item in 100")
      span.item item

    back-to-up
</template>

<script>
  import BackToUp from '../../components/backToUp'

  export default {
    name: 'componentBackToUp',

    components: {
      BackToUp
    }
  }
</script>