///////////////////////////////////////////////////////////FOR /WHILE/////////////////////////////////////////////////////
// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 20, 20];

function getSummAndCount(value) {
  let sum = 0;
  let count = 0; //count even numbers
  for (let i = 0; i < value.length; i++) {
    let item = value[i];
    if (item % 2 === 0) {
      sum += item;
      count++;
    }
    if (count >= 99) {
      let result = { sum, count };
      return console.log(result);
    }
  }
  let result = { sum, count };
  return console.log(result);
}
getSummAndCount(data);

// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)/////////////////////////
function isPrime(n) {
  if (typeof n === "number") {
    if (n <= 1) return false; // 1 - it isn't prime number
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}
console.log(isPrime(4));

// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)////////
function getSqrtChecking(n) {
  // simple implimentation
  if (typeof n === "number") {
    let i = 1;
    while (i * i <= n) {
      i++;
    }
    return i - 1;
  }
}
console.log(getSqrtChecking(6));

function getSqrtCheckingBin(n) {
  //binary method
  if (typeof n === "number") {
    let result = n;

    while (result * result > n) {
      result /= 2;
    }
    while (result * result < n) {
      result++;
    }

    return Math.floor(result);
  }
}
console.log(getSqrtCheckingBin(6), "bin");
// Вычислить факториал числа n. n! = 1*2*…*n-1*n; /////////////////////////////////////////////////////////////////////////

// function factorial(n) {
//   if (n <= 0) return "uncorect value";
//   if (n != 1) {
//     return n * factorial(n - 1);
//   } else {
//     return 1;
//   }
// }

// console.log(factorial(1));

function factorial(n) {
  if (typeof n === "number") {
    let value = 1;
    for (let i = 1; i <= n; i++) {
      value *= i;
    }
    return value;
  }
}
console.log(factorial(4));

// Посчитать сумму цифр заданного числа////////////////////////////////////////////////////////////////////
function sumFactorial(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumFactorial(5));
// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например,
//  задано число 123, вывести 321.///////////////////////////////////////////////////////////////////////////
function revers(n) {
  let x = 0;
  while (n > 0) {
    x = x * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return x;
}
let n = 123;
console.log(revers(n));