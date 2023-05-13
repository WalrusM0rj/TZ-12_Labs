function checkNum(value) {
  if (typeof value !== 'number' || isNaN(value)) {
    return '';
  } else {
    return value % 2 === 0 ? 'Even' : 'Odd';
  }
}

// Ask the user for input
const userInput = prompt("Please enter a number -> ");

// Convert the user input to a number (if possible)
const userNumber = parseFloat(userInput);

// Call the function with the user's input
const result = checkNum(userNumber);

// Display the result
alert(result);