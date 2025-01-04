// const infixToFunction = {
//   '+' : (x, y) => x + y,
//   '-' : (x, y) => x - y,
//   '*' : (x, y) => x * y,
//   '/' : (x, y) => y === 0 ? 'Error: Division by zero' : x / y,
// };

// const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));

// const highPrecedence = (str) => {
//   const regex = /([\d.]+)([*\/])([\d.]+)/;
//   const str2 = infixEval(str, regex);
//   return str2 === str ? str : highPrecedence(str2);
// };



// const isEven = num => num % 2 === 0;
// const sum = nums => nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// const average = nums => sum(nums) / nums.length;
// const median = nums => {
//   // create a shallow copy of the array and sort it
//   const sorted = nums.slice().sort((a, b) => a - b);
//   const length = sorted.length;
//   const middle = length / 2 - 1;
//   // check if length is even using the isEven function
//   // if it yes, return the ave of the number at the middle index and the number after that
//   // if it's odd, return the number at the middle index - you'll need to round the middle value up
//   /*
//   if (isEven(length)) {
//     return (sorted[middle] + sorted[middle + 1]) / 2;
//   } else {
//     return sorted[Math.ceil(middle)];
//   }
//     */
//    // the above is one of many ways to solve the problem
//   return isEven(length)
//     ? average([sorted[middle], sorted[middle + 1]])
//     : sorted[Math.ceil(middle)];
// }

// const spreadsheetFunctions = {
//   "" : input => input,
//   sum,
//   average,
//   median,
//   even : nums => nums.filter(isEven),
//   firsttwo : nums => nums.slice(0, 2),
//   lasttwo : nums => nums.slice(-2),
//   has2 : nums => nums.includes(2),
//   increment : nums => nums.map(num => num + 1),
//   someeven : nums => nums.some(num => num % 2 === 0),
//   everyeven : nums => nums.every(num => num % 2 === 0),
//   random : ([x, y]) => Math.floor(Math.random() * (x + y - x)) + x,
//   // random: ([x, y]) => Math.floor(Math.random() * y + x)
//   range : ([start, end]) => range(start, end),
//   nodupes : nums => [...new Set(nums)]
// }

// const applyFunction = (str) => {
//   // this parses and evaluates the multi and div operations
//   const noHigh = highPrecedence(str);
//   const infix = /([\d.]+)([+-])([\d.]+)/;
//   const str2 = infixEval(noHigh, infix);
//   const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
//   // the expression above will look for function calls like sum(1, 4)
//   const toNumberList = (args) => args.split(",").map(parseFloat)
//   const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()(toNumberList(args))]
//   return str2.replace(functionCall, (match, fn, args) => spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match)
// }


// const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

// const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

// const evalFormula = (x, cells) => {
//   // update your idToText func to return the value of the input element
//   const idToText = id => cells.find(cell => cell.id === id).value;

//   // declare a rangeRegex variable and assign it a regular expression that matches A through J
//   // use a capture group with a character class tp achieve this
//   const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
//   const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2))
//   const elemValue = num => character => idToText(character + num);
//   const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
//   const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
//   const cellRegex = /[A-J][1-9][0-9]?/gi;
//   const cellExpanded = rangeExpanded.replace(cellRegex, match => idToText(match.toUpperCase()));

//   const functionExpanded = applyFunction(cellExpanded);

//   return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded, cells);
// }


// window.onload = () => {
//   const container = document.getElementById('container');

//   const createLabel = name => {
//     const label = document.createElement('div');
//     label.className = 'label';
//     label.textContent = name;
//     container.appendChild(label);
//   }

//   const letters = charRange("A", "J");
//   letters.forEach(createLabel);

//   range(1, 99).forEach(number => {
//     createLabel(number);
//     letters.forEach(letter => {
//       const input = document.createElement('input');
//       input.type = 'text';
//       input.id = letter + number;
//       input.ariaLabel = letter + number;
//       input.onchange = update;
//       container.appendChild(input);
//     });
//   });
// }

// const update = event => {
//   const element = event.target;
//   const value = element.value.replace(/\s/g, '');

//   // create an if condition to check if the value does not include the id of the element.
//   // if it does not include the id, then update the spreadsheet functions with the new value.
//   // if it does include the id, then do nothing because the user is editing the spreadsheet
//   if (!value.includes(element.id) && value.startsWith('=')) {
//     element.value = evalFormula(value.slice(1), Array.from(document.getElementById('container').children));
//   }
// };

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
}

const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));

const highPrecedence = str => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
}

const isEven = num => num % 2 === 0;
const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const average = nums => sum(nums) / nums.length;

const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
}

const spreadsheetFunctions = {
  "": input => input,
  sum,
  average,
  median,
  even: nums => nums.filter(isEven),
  someeven: nums => nums.some(isEven),
  everyeven: nums => nums.every(isEven),
  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num => num + 1),
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  range: nums => range(...nums),
  nodupes: nums => [...new Set(nums).values()]
}

const applyFunction = str => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2 = infixEval(noHigh, infix);
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = args => args.split(",").map(parseFloat);
  const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(functionCall, (match, fn, args) => spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match);
}

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => character => idToText(character + num);
  const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
  const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
  const cellRegex = /[A-J][1-9][0-9]?/gi;
  const cellExpanded = rangeExpanded.replace(cellRegex, match => idToText(match.toUpperCase()));
  const functionExpanded = applyFunction(cellExpanded);
  return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded, cells);
}

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach(number => {
    createLabel(number);
    letters.forEach(letter => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      input.onchange = update;
      container.appendChild(input);
    })
  })
}

const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {
    element.value = evalFormula(value.slice(1), Array.from(document.getElementById("container").children));
  }
}

