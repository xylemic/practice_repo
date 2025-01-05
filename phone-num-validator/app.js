const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const msgDisplay = document.getElementById('results-div');

const numberValidityCheck = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }

  const countryCode = '^(\\+?234\\s?|0)?'; 
  const validPrefix = '(70[1-9]|80[2-9]|81[0-9]|90[1-9]|91[0-9])'; 
  const spaceDashes = '([\\s\\-])?'; 
  const middleFour = '[0-9]{4}';
  const lastThree = '[0-9]{3}';
  // const phoneNumber = '[0-9]{7}$'; // matches the remaining 7 digits

  const numRegex = new RegExp(countryCode + validPrefix + spaceDashes + middleFour + spaceDashes + lastThree);
  const htmlElem = document.createElement('p');
  htmlElem.className = 'results_text';
  numRegex.test(input) ? (htmlElem.style.color = '#00471b') : (htmlElem.style.color = '#4d3800');
  htmlElem.appendChild(document.createTextNode(
    `${numRegex.test(input) ? 'Valid' : 'Invalid'} Nigeria number: ${input}`
  ));
  msgDisplay.appendChild(htmlElem);
}

checkBtn.addEventListener('click', () => {
  numberValidityCheck(userInput.value);
  userInput.value = '';
})

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    numberValidityCheck(userInput.value);
    userInput.value = '';
  }
})

clearBtn.addEventListener('click', () => {
  msgDisplay.innerHTML = '';
})

// const testNumbers = ['07451234567', '9060392644'];

// testNumbers.forEach(num => {
//   numberValidityCheck(num);
// })

