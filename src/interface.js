'use strict';

let pageOneView = document.createElement('div')
let pageTwoView = document.createElement('div')
let array_of_notes = []

document.body.onload = function() {
  let noteHeadingElement = document.createElement('h1')
  noteHeadingElement.innerHTML = 'Notes'

  document.body.appendChild(noteHeadingElement)
  createPageOneElements()
  createPageTwoElements()
}

function createNewNote(event) {
  let inputMessage = document.getElementById('text-input').value
  document.getElementById('text-input').value = ''
  let noteObject = new Note(inputMessage)
  let new_note = document.createElement('a')
  addShowBodyEvent(new_note, array_of_notes.length)
  array_of_notes.push(noteObject)

  new_note.setAttribute('href', '/')
  new_note.setAttribute('class', 'new-note')
  new_note.innerHTML = noteObject.preview()
  pageOneView.appendChild(new_note)
  pageOneView.appendChild(document.createElement('br'))

  event.preventDefault()
}

function addShowBodyEvent(noteElement, indexVar) {
  noteElement.addEventListener('click', function(event) {
    event.preventDefault();
     let noteBody = document.getElementById('note-body')
     noteBody.innerHTML = array_of_notes[indexVar].body
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

  pageTwoView.appendChild(noteBodyElement)
  pageTwoView.appendChild(homeButton)
  document.body.appendChild(pageTwoView)
  pageTwoView.style.display = 'none'
}
