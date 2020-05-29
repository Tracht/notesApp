'use strict';

class NoteManager {

  constructor() {
    this._notes = []
  }

  numberOfNotes() {
    return this._notes.length
  }

  addNote(noteObject) {
    this._notes.push(noteObject);
  }

  getNote(index) {
    return this._notes[index]
  }

}
