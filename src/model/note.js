'use strict';

class Note {
  constructor(body) {
    this._body = body
  }
  preview() {
    return this._body.substring(0,20) + '...'
  }

  body() {
    return this._body
  }
}
