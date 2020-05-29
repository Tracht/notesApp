'use strict';

let pageOneView = document.createElement('div')
let pageTwoView = document.createElement('div')
let noteManager = new NoteManager()

document.body.onload = function() {
  let noteHeadingElement = document.createElement('h1')
  noteHeadingElement.innerHTML = 'Notes'

  document.body.appendChild(noteHeadingElement)
  createPageOneElements()
  createPageTwoElements()
}

function createNewNote(event) {
  event.preventDefault()
  let inputMessage = document.getElementById('text-input').value
  if(inputMessage === '') return
  document.getElementById('text-input').value = ''
  let noteObject = new Note(inputMessage)
  let newNote = document.createElement('a')

  addShowBodyEvent(newNote, noteManager.numberOfNotes())
  noteManager.addNote(noteObject)

  newNote.setAttribute('href', '/')
  newNote.setAttribute('class', 'new-note')
  newNote.innerHTML = noteObject.preview()
  pageOneView.appendChild(newNote)
  pageOneView.appendChild(document.createElement('br'))
}

function addShowBodyEvent(noteElement, indexVar) {
  noteElement.addEventListener('click', function(event) {
    event.preventDefault();
      let noteBody = document.getElementById('note-body')
      noteBody.innerHTML = noteManager.getNote(indexVar).body()
    pageOneView.style.display = 'none'
    pageTwoView.style.display = 'block'
  })
}