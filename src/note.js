class Note {
  constructor(body) {
    this.body = body
  }
  preview() {
    return this.body.substring(0,20) + '...'
  }
}
