/**
 * 所有的逻辑都会存放在这里，只要调用`next`就会修改`subject`，然后有订阅的
 * 地方就会自动收到通知，可以想象`bookMarket`就是`state`,`member$`和`books$`就是`getters`
 */

// import { without, xorBy } from 'lodash'
import { BehaviorSubject } from 'rxjs'
import bookMarketService from './bookMarketService'

const bookMarket = bookMarketService.get()

const subject = {
  // bookMarket$:
  books$: new BehaviorSubject(bookMarket.books),
  member$: new BehaviorSubject(bookMarket.member),
  shoppingList$: new BehaviorSubject(bookMarket.shoppingList),
  addToCar (book) {
    bookMarket.books.forEach(item => {
      if (item === book) {
        item.added = !item.added
        // 更新 book
        book = item
      }
    })

    const price = book.price

    bookMarket.member.totalPrice += book.added
      ? +price : -price
    bookMarket.member.totalNumber += book.added
      ? +1 : -1

    this.books$.next(bookMarket.books)
    this.member$.next(bookMarket.member)
  },

  resetCar () {
    bookMarket.member.totalPrice = 0
    bookMarket.member.totalNumber = 0
    bookMarket.books.forEach(item => (item.added = false))
    this.member$.next(bookMarket.member)
  }
}

export default subject
