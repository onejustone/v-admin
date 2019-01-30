<template lang="pug">
  div#web-site
    router-view
</template>

<style lang="scss">
@import "~style/reset.scss";

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-size: 0.2rem;
}

#app {
  width: 100%;
  height: 100%;
}

#web-site {
  height: 100vh;
}
</style>

<script>
import LxCurrency from 'lx-currency'

export default {
  name: 'App',

  components: {
    LxCurrency
  }
}
</script>
