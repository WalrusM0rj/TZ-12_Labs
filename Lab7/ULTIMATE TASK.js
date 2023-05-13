function main() {
  // Get user input for script selection
  const scriptChoice = prompt('Enter a number of desired task (1,2,3):');

  switch (scriptChoice) {
    case '1':
      evenOddCheck();
      break;
    case '2':
      firstFivePrimes();
      break;
    case '3':
      sequenceSum();
      break;
    default:
      alert('Invalid selection. Please enter 1, 2, or 3.');
  }
}

function evenOddCheck() {
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
}

function firstFivePrimes() {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function sumOfFirstFivePrimes() {
    let primeNumbers = [];
    let currentNumber = 1;

    while (primeNumbers.length < 5) {
      if (isPrime(currentNumber)) {
        primeNumbers.push(currentNumber);
      }
      currentNumber++;
    }

    return primeNumbers.reduce((sum, prime) => sum + prime, 0);
  }

  console.log(sumOfFirstFivePrimes()); // 28
}

function sequenceSum() {
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
}

// Call the main function
main();