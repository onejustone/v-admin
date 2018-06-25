<template lang="pug">
div
  span {{ isSameOfTime() }}
  span {{ c }}
</template>

<script>
import moment from 'moment'
import util from 'util'

export default {
  name: 'TextTime',

  computed: {
    a () {
      const time= moment('2018.05.11 08:45')
      return time
    },

    b () {
      const time= moment('2018.05.12 08:45')
      return time
    },

    c () {
      const time = '2018.05.22 08:34'
      const timestamp = new Date(time).getTime()
      return this.humanize(timestamp / 1000)
    }
  },

  methods: {
    isSameOfTime () {
      return util.isSameOf(this.a, this.b, 'day')
    },

    humanize (timestamp) {
      return util.humanize(timestamp)
    }
  }
}
</script>
