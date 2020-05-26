
// document.body.onload = addElement;
// // alert('hey')
//
// function addElement () {
//   // create a new div element
//   var newDiv = document.createElement("div");
//   // and give it some content
//   var newContent = document.createTextNode("Hi there and greetings!");
//   // add the text node to the newly created div
//   newDiv.appendChild(p_element);
//   // add the newly created element and its content into the DOM
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

document.body.onload = addElement;
function addElement () {
  var p_element = document.createElement('p');
  p_element.innerHTML = 'just a test'

  var h1_element = document.createElement('h1');
  h1_element.innerHTML = 'h1 elem'
  var div_element = document.createElement('div')

  div_element.appendChild(h1_element);
  document.body.appendChild(p_element);
  document.body.appendChild(div_element);

}
