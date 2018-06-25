<template lang="pug">
  div.list-item
    span.text.blod {{ content }}
</template>

<script>
  export default {
    name: 'ListItem',

    props: {
      content: String
    },

    created () {
    },

    beforeDestroy () {
    }
  }
</script>
