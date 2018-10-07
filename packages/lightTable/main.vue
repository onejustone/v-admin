<template lang="pug" src="./lightTable.pug"></template>

<style lang="stylus" src="./lightTable.styl" scoped="scoped"></style>

<style lang="stylus">
  .light-table__cell-edit
    position relative !important
    padding-right 20px !important
    padding-left 20px !important

    .icon
      top 20px
      right 10px
      opacity 0
    &:hover
      .icon
        opacity 1
</style>

<script src="./lightTable.js"></script>
