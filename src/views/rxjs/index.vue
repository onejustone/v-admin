<template lang="pug">
div.rxjs-playground-module rxjs-playground-module
  el-button(v-stream:click="plus$") click me
</template>

<script>
export default {
  name: 'RxjsModule',

  subscriptions () {
    this.plus$ = new Rx.Subject()
    return {
      count: this.$plus$.map(() => 1)
        .startWidth(0)
        .scan((totoal, change) => totoal + change)
    }
  }
}
</script>

