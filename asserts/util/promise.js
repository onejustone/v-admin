const delay = (ms) => new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), ms)
})

export {
  delay
}
