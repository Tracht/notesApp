document.body.onload = addElement;
function addElement () {
  var p_element = document.createElement('p');
  p_element.innerHTML = 'just a test'

  var h1_element = document.createElement('h1');
  h1_element.innerHTML = 'h1 elem'
  var div_element = document.createElement('div')

  let form1 = document.createElement('form')
  let input = document.createElement('textarea')

  input.setAttribute('rows', 8)
  input.setAttribute('cols', 40)
  let button = document.createElement('input')
  button.setAttribute('type', 'submit')
  button.setAttribute('value', 'Save Note')

  form1.appendChild(input)
  form1.appendChild(document.createElement('br'))
  form1.appendChild(button)

  div_element.appendChild(h1_element);
  document.body.appendChild(div_element);
  document.body.appendChild(p_element);
  document.body.appendChild(form1)
}
