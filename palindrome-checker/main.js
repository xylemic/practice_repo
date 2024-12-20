// select elements
const input = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn')
const result = document.getElementById('result');

// add event listener to button
checkButton.addEventListener('click', () => {
  const userInput = input.value.trim(); // get input value and trim spaces

  // check if input is empty
  if (userInput === "") {
    alert('Please input a value');
    return;
  }
  
  // result.textContent = `You entered: ${userInput}`; // placeholder for debugging

  // next: normalize the user input by removing 
  // non-alphanumeric characters and making it lowercase
  // reverse the normalized user input
  // compare the reversed user input to the 
  // normalized user input
  const regExpVal = /[^a-z0-9]/g;
  const normalizedText = userInput.toLowerCase().replace(regExpVal, "");

  // reverse the normalized user input
  const reversedText = normalizedText.split("").reverse().join("");

  // check if the normalized user input is a palindrome
  if (normalizedText === reversedText) {
    result.textContent = `${userInput} is a palindrome`;
    result.className = 'palindrome';
  } else {
    result.textContent = `${userInput} is not a palindrome`;
    result.className = 'not-palindrome';
  }

  // clear the input field
  input.value = "";
})

// clear input and result
clearButton.addEventListener('click', () => {
  input.value = "";
  result.textContent = "";
  result.className = ''; // reset the class name to default for the next check
})



