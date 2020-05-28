'use strict';

let pageOneView = document.createElement('div')
let pageTwoView = document.createElement('div')
let array_of_notes = []

document.body.onload = function() {
  let noteHeadingElement = document.createElement('h1')
  noteHeadingElement.innerHTML = 'Notes'

  // Be deleted later 
  let p_element = document.createElement('p')
  p_element.setAttribute('id', 'note-body')
  
  document.body.appendChild(noteHeadingElement)
  createPageOneElements()
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
    // let noteBody = document.getElementById('note-body')
    // noteBody.innerHTML = array_of_notes[indexVar].body
    pageOneView.style.visibility = 'hidden'
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