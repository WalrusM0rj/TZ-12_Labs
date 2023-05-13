function sumOfSequence(n) {
    let sum = 0;
    let currentNumber = '';
  
    for (let i = 1; i <= n; i++) {
      currentNumber += '1';
      sum += Number(currentNumber);
    }
  
    return sum;
  }
  
  // Request user input for variable n
  const inputN = prompt('Enter the value for n:');
  const n = parseInt(inputN); // Convert the user input from a string to an integer
  
  // Check if the input is valid before calculating the sum
  if (Number.isInteger(n) && n > 0) {
    const result = sumOfSequence(n);
    console.log(`The sum of the sequence for n = ${n} is:`, result);
  } else {
    console.log('Invalid input. Please enter a positive integer.');
  }