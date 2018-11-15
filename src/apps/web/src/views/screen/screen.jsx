import { get$ } from 'rhttp'
import { Observable } from 'rxjs'
import Rythm from 'rythm.js'

// import { concatMap } from 'rxjs/operators'

// hitokoto 官网 api：https://hitokoto.cn/api

let CURRENTINDEX = 0

export default {
  name: 'Screen',

  domStreams: ['pageClick$'],

  subscriptions () {
    const catType = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

    const pageClick = this.pageClick$.map(value => console.log(value))

    const hitokoto$ = Observable.merge(Observable.of(0), Observable.interval(60 * 1000))
      .concatMap(seq => get$(`https://sslapi.hitokoto.cn?c=${catType[CURRENTINDEX]}`))
      .do(_ => {
        if (CURRENTINDEX >= 6) CURRENTINDEX = -1
        ++CURRENTINDEX
      })
      .map(result => result)

    this.pageClick$.map(vlaue => console.log('this.pageClick$'))

    return {
      pageClick,
      hitokoto$
    }
  },

  methods: {
    handleClick () {
      this.$router.push('/web/dashboard')
    },
    initRythm () {
      const rythm = new Rythm()
      rythm.setMusic('static/media/guoke.mp3')
      rythm.start()
    }
  },

  mounted () {
  },

  render (h) {
    return (
      <section class='hitokoto__full-page' onClick={this.handleClick}>
        <section class='hitokoto__wrap'>
          <div class='hitokoto__content'>
            <div class='word rythm-bass'>
              <span class='break_left'>「</span>
              {this.hitokoto$ && this.hitokoto$.hitokoto}
              <span class='break_right'>」</span>
            </div>
            <div class='author'>「{this.hitokoto$ && this.hitokoto$.from}」</div>
          </div>
        </section>
      </section>
    )
  }
}
