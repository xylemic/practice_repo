const convertBtn = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const outputElement = document.getElementById('output');

// function to convert an integer to a roman numeral
const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';

  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}


  // function to handle conversion and output
  // display
  const handleConversion = () => {
    const numberInputValue = numberInput.value;

    // convert input to a number
    const number = parseInt(numberInputValue);

    if (outputElement.style.display === "none" || outputElement.style.display === "") {
      outputElement.style.display = "block";
    }

    // check for valid input
    if (!numberInput.value) {
      outputElement.textContent = "Please enter a valid number.";
      return;
    }

    if (number < 1) {
      outputElement.textContent = "Please enter a number greater than or equal to 1.";
      return;
    }

    if (number >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999.";
      return;
    }

    // convert to roman numeral
    outputElement.textContent = convertToRoman(number);

    // clear input field
    numberInput.value = "";
  };

  convertBtn.addEventListener('click', handleConversion);

  numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleConversion();
    }
  })


