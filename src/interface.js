document.body.onload = addElement;
var array_of_notes = []
function addElement () {

  //var array_of_notes = [new Note('note1'), new Note('note2'), new Note('note3')]

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
}

function logSubmit(event) {
  let inputMessage = document.getElementById('text-input').value
  document.getElementById('text-input').value = ''
  var noteObject = new Note(inputMessage)
  var new_note = document.createElement('a')
  var indexNumber = array_of_notes.length
  array_of_notes.push(noteObject)

  var new_note = document.createElement('a')
  new_note.addEventListener('click',
      function(event) {
        event.preventDefault();
        getElementById(note-body)
          (array_of_notes[indexNumber].body)
      });

    // retrieve note's ID
    // go into array, selecting full note, using ID
    // append note.body to document

  new_note.setAttribute('href', 'www.google.com')
  new_note.setAttribute('class', 'new-note')
  new_note.innerHTML = noteObject.preview();
  document.body.appendChild(new_note);
  document.body.appendChild(document.createElement('br'));

  event.preventDefault();
}
