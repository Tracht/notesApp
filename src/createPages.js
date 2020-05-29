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