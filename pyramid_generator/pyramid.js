const character = '*';
const totalRows = 10;
let inverted = false;
const generatePyramid = (character, rows) => {
  const pyRows = []; // array to each row

  for (let i = 1; i <= rows; i++) {
    const leadingSpaces = " ".repeat(rows - i); // calculate leading spaces
    const charactersInRow = character.repeat(2 * i - 1); // calc characters for this row
    const rowStr = leadingSpaces + charactersInRow; // construct the row string

    if (inverted) {
      pyRows.unshift(rowStr); // add the row string to the beginning of the array
    }
    else {
      pyRows.push(rowStr); // add the row string to the end of the array
    }
  }

  return pyRows.join("\n"); // join the rows into a single string with newline separators
}

// how to use
console.log(generatePyramid(character, totalRows));



