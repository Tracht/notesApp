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