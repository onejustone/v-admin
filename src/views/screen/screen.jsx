import { get$ } from 'rhttp'
import { Observable } from 'rxjs'
// import { concatMap } from 'rxjs/operators'

// hitokoto 官网 api：https://hitokoto.cn/api

let CURRENTINDEX = 0

export default {
  name: 'Screen',

  subscriptions () {
    const catType = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

    const hitokoto$ = Observable.merge(Observable.of(0), Observable.interval(10000))
      .concatMap(seq => get$(`https://sslapi.hitokoto.cn?c=${catType[CURRENTINDEX]}`))
      .do(_ => {
        if (CURRENTINDEX >= 6) CURRENTINDEX = -1
        ++CURRENTINDEX
      })
      .map(result => result)

    return {
      hitokoto$
    }
  },

  render (h) {
    return (
      <section class='hitokoto__full-page'>
        <section class='hitokoto__wrap'>
          <div class='hitokoto__content'>
            <div calss='break_left'></div>
            <div class='word'>{this.hitokoto$ && this.hitokoto$.hitokoto}</div>
            <div calss='break_right'></div>
            <div class='author'>{this.hitokoto$ && this.hitokoto$.from}</div>
          </div>
        </section>
      </section>
    )
  }
}
