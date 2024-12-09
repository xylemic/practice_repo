const character = "*";
const count = 10;
const rows = [];
let inverted = false;

// in order to know how to format a row
// the padRow func will need to know which
// row num you are on, and how many rows in
// total are being generated
// best way is for creating params for
// row count and row num

const padRow = (rowNumber, rowCount) => {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


// todo: use a different type of loop
for (let i = 1; i <= count; i++) {

  // because, the i in the for loop is initialized with 0
  // but the string repeat method requires an integer as the second argument
  // so, it repeats the character i times, not i+1 times
  // this results in incorrect output, where each row has one less character than the previous row
  // to fix this, we should increment i by 1 before using it in the string repeat method
  
  //rows.push(character.repeat(i));

  // correct code with the incremented i
  // rows.push(character.repeat(i + 1));
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}


/*
while (rows.length <= count) {
  rows.push(padRow(rows.length + 1, count))
}
*/

// the correct way to loop from count down to 1 
/*
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
*/

let result = "";

for (const row of rows) {
  result = result + row + "\n"; // this puts each character on separate lines (on top of each other)
}

console.log(result);

