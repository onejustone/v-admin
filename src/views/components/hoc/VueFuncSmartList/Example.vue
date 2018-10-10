<template lang="pug">
section.smart-list
  smart-list(
    :items="['34']"
    :isOrdered="true"
  )
</template>

<script>
import SmartList from './SmartList.vue'

export default {
  name: 'Example',

  components: {
   SmartList
  }
}
</script>


