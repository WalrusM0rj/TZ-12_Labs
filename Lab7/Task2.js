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