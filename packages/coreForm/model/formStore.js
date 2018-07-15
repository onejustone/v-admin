
export default class FormStore {
  constructor (options) {
    for (const option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option]
      }
    }
  }
}
