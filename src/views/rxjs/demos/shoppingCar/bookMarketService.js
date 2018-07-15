const state = {
  shoppingList: [],
  member: {
    name: 'kinanson',
    totalPrice: 0,
    totalNumber: 0
  },
  books: [{
    id: 1,
    title: 'TensorFlow+Keras 深度學習人工智慧實務應用 ',
    context: `人工智慧時代來臨，必須學習的新技術
輕鬆學會「深度學習」：先學Keras再學TensorFlow

★成長最快領域：深度學習與類神經網路，是人工智慧成長最快的領域，讓電腦更接近人類的思考。
★應用深入生活：手機語音助理、人臉識別、影像辨識、手寫辨識、醫學診斷、自然語言處理。
★實作快速上手：只需Python基礎，依照本書Step by Step學習，就可以輕鬆學會深度學習概念與應用。

TensorFlow功能強大、執行效率高、支援各種平台，然而TensorFlow是低階的深度學習程式庫，學習門檻高。所以本書先介紹Keras，Keras是高階的深度學習程式庫（以TensorFlow作為後端引擎），對初學者學習門檻低，可以很容易地建立深度學習模型，並且進行訓練、預測。等讀者熟悉深度學習模型概念與應用後，再來學習TensorFlow就很輕鬆了。`,
    added: false,
    price: 450
  }, {
    id: 2,
    title: `資料結構--使用Python `,
    context: `資料結構(Data Structures)是資訊學科中的核心課程之一，也是基礎和必修的科目。本書確實闡述資料結構的重要主題，並以圖文並茂的方式表達，最能達到教學與學習事半功倍的效果。

內容共分十三章，分別為第一章演算法分析、第二章陣列、第三章堆疊與佇列、第四章鏈結串列、第五章遞迴、第六章樹狀結構、第七章Heap結構、第八章高度平衡二元搜尋樹、第九章2-3 Tree及2-3-4 Tree、第十章m-way 搜尋樹與B-Tree、第十一章圖形結構、第十二章排序，以及第十三章搜尋。`,
    added: false,
    price: 400
  }, {
    id: 3,
    title: `ffective SQL 中文版 | 寫出良好SQL的61個具體做法 `,
    context: `“與其瞎忙或四處尋找答案，請幫自己一個忙：直接買這本書吧！”
-Dave Stokes，MySQL社群經理，Oracle Corporation`,
    added: false,
    price: 400
  }, {
    id: 4,
    title: `無瑕的程式碼 ── 敏捷完整篇 ── 物件導向原則、設計模式與C#實踐 (Agile principles, patterns, and practices in C#) `,
    context: `這本書是《無瑕的程式碼》系列書的第三冊，也是《名家名著》系列書的第三冊。主題是「敏捷開發」，而重點仍舊是回歸到「如何撰寫出好的程式碼」。

什麼是「敏捷開發（Agile Development）」呢？簡單來說，它是軟體開發的一套方法，特點是只要透過這套方法，就能使你的專案更敏捷。

我們為何非得要讓專案變得敏捷呢？原因無他，就是因為我們有慣老闆、還有慣客戶。也就是說，對於現今的市場環境而言，專案不夠敏捷是不行的。這一點，相信所有的軟體工程師都無法否認吧！`,
    added: false,
    price: 500
  }]
}

const service = {
  get () {
    return state
  }
}

export default service
