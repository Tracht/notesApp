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