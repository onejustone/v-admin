<template lang="pug">
  section(class="nav-bar")
    div.toggle-menu
    //- lx-breadcrumb
</template>

<script>
  import LxBreadcrumb from '../../../components/breadcrumb'

  export default {
    name: 'NavBar',

    components: {
      LxBreadcrumb
    }
  }
</script>
