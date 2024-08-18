let color = ['red', 'blue', 'cyan', 'lightblue', 'orange', 'yellow']
let letter = ['a', 'b', 'c', 'd', 'e', 'f']

function buttonGenerator() {
  let randomName = Math.floor(Math.random() * letter.length);

  let randomColor = Math.floor(Math.random() * color.length);

  // <button>
  //          Generate html
  //</button>
  
  /*
  <div id="resultBox" class="css-result">

  </div>
  */
  let resultBox = document.getElementById("resultBox");
  // creating button element
  let buttonElement = document.createElement('button');
  // creating text to be
  //displayed on button
  let text = document.createTextNode(`${letter[randomName]}`);

  // appending text to button
  buttonElement.appendChild(text);
  // appending button to div
  resultBox.appendChild(buttonElement);

  buttonElement.addEventListener('click', function alertClick() {
    alert(`Hello ${buttonElement.textContent}`)
  });

  buttonElement.style.color = `${color[randomColor]}`;
}


function h1Generator() {
  let randomColor = Math.floor(Math.random() * color.length);

  let resultBox = document.getElementById("resultBox-2");

  let h1Element = document.createElement('h1');

  let text = document.createTextNode("h1 text");

  h1Element.appendChild(text);

  resultBox.appendChild(h1Element);

  h1Element.style.display = "inline-block";
  h1Element.style.marginRight = "20px";

  h1Element.style.color = `${color[randomColor]}`;

}