document.body.onload = addElement;
function addElement () {

  var array_of_notes = [new Note('note1'), new Note('note2'), new Note('note3')]

  var p_element = document.createElement('p');
  p_element.setAttribute('id', 'note-body')

  var h1_element = document.createElement('h1');
  h1_element.innerHTML = 'h1 elem'
  var div_element = document.createElement('div')

  let form1 = document.createElement('form')
  form1.setAttribute('id', 'input-form')

  let input = document.createElement('textarea')
  input.setAttribute('rows', 8)
  input.setAttribute('cols', 40)
  input.setAttribute('id', 'text-input')

  let button = document.createElement('input')
  button.setAttribute('type', 'submit')
  button.setAttribute('value', 'Save Note')

  form1.appendChild(input)
  form1.appendChild(document.createElement('br'))
  form1.appendChild(button)

  div_element.appendChild(h1_element);
  document.body.appendChild(div_element);
  document.body.appendChild(form1)
  document.body.appendChild(p_element);

  form1.addEventListener('submit', logSubmit);

  array_of_notes.forEach(note => {
    var new_note = document.createElement('a')
    new_note.setAttribute('href', 'www.google.com')
    new_note.setAttribute('class', 'new-note')
    new_note.innerHTML = note.body;
    document.body.appendChild(new_note);
    document.body.appendChild(document.createElement('br'));
  })
}

function logSubmit(event) {
  let inputMessage = document.getElementById('text-input').value
  //let inputMessage = document.getElementById('form-input')[0].value
  document.getElementById('note-body').innerHTML = inputMessage
  event.preventDefault();
}

// function logSubmit(event) {
//   event.preventDefault()
//   let inputMessage = document.getElementById('input-form')[0]
//   console.log(inputMessage)
//   //alert(inputMessage)
//   //target the textarea and get its content and then
//   //put that into a new notes object
// }
