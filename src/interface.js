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

function createPageOneElements() {

  let inputForm = document.createElement('form')
  inputForm.setAttribute('id', 'input-form')

  let noteBodyInput = document.createElement('textarea')
  noteBodyInput.setAttribute('rows', 8)
  noteBodyInput.setAttribute('cols', 40)
  noteBodyInput.setAttribute('id', 'text-input')

  let noteSubmissionButton = document.createElement('input')
  noteSubmissionButton.setAttribute('type', 'submit')
  noteSubmissionButton.setAttribute('value', 'Save Note')

  inputForm.appendChild(noteBodyInput)
  inputForm.appendChild(document.createElement('br'))
  inputForm.appendChild(noteSubmissionButton)

  pageOneView.appendChild(inputForm)
  document.body.appendChild(pageOneView)

  inputForm.addEventListener('submit', createNewNote)
}

function createPageTwoElements() {
  let noteBodyElement = document.createElement('p')
  noteBodyElement.setAttribute('id', 'note-body')

  let homeButton = document.createElement('button')
  homeButton.innerHTML = 'Home'
  homeButton.addEventListener('click', function(event) {
    pageTwoView.style.display = 'none'
    pageOneView.style.display = 'block'
  })
  pageTwoView.appendChild(noteBodyElement)
  pageTwoView.appendChild(homeButton)
  document.body.appendChild(pageTwoView)
  pageTwoView.style.display = 'none'
}
