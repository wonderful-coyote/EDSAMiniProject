/*
Use JavaScript to create an event listener for the submit button.
4. In the event listener, get the value of the text input field and perform the following operations on the string:
• Count the number of characters in the string.
Count the number of words in the string.
Reverse the string
Convert the string to uppercase.
Convert the string to lowercase.
5. Display the results of the operations on the string in the HTML page, below the form.
*/

const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');


submitBtn.addEventListener("click", (event) => {
  
  event.preventDefault();

  const fullInput = document.getElementById('fullname').value;
  const emailInput = document.getElementById('email').value;
  const phoneInput = document.getElementById('phone').value;
  const pwordInput = document.getElementById('password').value;

  // Perform string operations
  const charCount = [fullInput.length, emailInput.length, phoneInput.length, pwordInput.length];
  const wordCount = [fullInput.split(" ").length, emailInput.split(" ").length, phoneInput.split(" ").length, pwordInput.split(" ").length];
  const reverseText = [fullInput.split("").reverse().join(""), emailInput.split("").reverse().join(""), phoneInput.split("").reverse().join(""), pwordInput.split("").reverse().join("")];
  const upperText = [fullInput.toUpperCase(), emailInput.toUpperCase(), phoneInput.toUpperCase(), pwordInput.toUpperCase()];
  const lowerText = [fullInput.toLowerCase(), emailInput.toLowerCase(), phoneInput.toLowerCase(), pwordInput.toLowerCase()];

  // Display the results in the output div
  result.innerHTML = `
    <p>Number of characters: ${charCount}</p>
    <p>Number of words: ${wordCount}</p>
    <p>Reversed text: ${reverseText}</p>
    <p>Uppercase text: ${upperText}</p>
    <p>Lowercase text: ${lowerText}</p>
  `;
});



