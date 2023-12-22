// iterative method

function fibo(num) {
  let a = 0;
  let b = 1;
  if (num === 0) {
    return a;
  }
  for (let i = 2; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

let nthValue = fibo(9);
// console.log(nthValue);

// printing all the fibonacci numbers till user given number input
function fibonacci(num) {
  let a = 0;
  let b = 1;
  let seriesOfFiboNumbers = [a, b]
  if (num === 0) {
    return a;
  }
  for (let i = 2; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
    seriesOfFiboNumbers.push(b)
  }
  return seriesOfFiboNumbers;
}

let fiboSeriesNumber = fibonacci(20)
console.log(fiboSeriesNumber)