function addShowBodyEvent(noteElement, indexVar) {
  noteElement.addEventListener('click', function(event) {
    event.preventDefault();
      let noteBody = document.getElementById('note-body')
      noteBody.innerHTML = noteManager.getNote(indexVar).body()
    pageOneView.style.display = 'none'
    pageTwoView.style.display = 'block'
  })
}