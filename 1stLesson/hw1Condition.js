///////////////////////////////////////////////////////////IF/////////////////////////////////////////////////
const a = 5;
const aEven = 6;
const b = 10;
const c = 10;

// Если а – четное посчитать а*б, иначе а+б///////////////////////////////////////////////////////////////////
function sumOrMultiplication(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    // validation input parameters
    a % 2 === 0 ? console.log(a * b) : console.log(a + b);
  } else {
    console.log("uncorect value");
  }
}

sumOrMultiplication(aEven, b);
sumOrMultiplication(a, b);

// Определить какой четверти принадлежит точка с координатами (х,у)/////////////////////////////////////////////////
const plusX = 10;
const minusX = -10;
const plusY = 10;
const minusY = -10;

function getCartesianQuarter(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // validation input parameters

    if (x > 0 && y > 0) {
      console.log("first");
    } else if (x < 0 && y > 0) {
      console.log("second");
    } else if (x < 0 && y < 0) {
      console.log("third");
    } else if (x > 0 && y < 0) {
      console.log("fourth");
    }
  } else {
    console.log("uncorect value");
  }
}

getCartesianQuarter(plusX, plusY);
getCartesianQuarter(minusX, plusY);
getCartesianQuarter(minusX, minusY);
getCartesianQuarter(plusX, minusY);

// Найти суммы только положительных из трех чисел /////////////////////////////////////////////////
function getPositiveSum(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    // validation input parameters
    if (a > 0 && b > 0 && c > 0) {
      console.log(a + b + c);
    } else if (a <= 0 && b > 0 && c > 0) {
      console.log(b + c);
    } else if (a > 0 && b <= 0 && c > 0) {
      console.log(a + c);
    } else if (a > 0 && b > 0 && c <= 0) {
      console.log(b + a);
    } else if (a <= 0 && b <= 0 && c <= 0) {
      console.log("enter positive number");
    }
  } else {
    console.log("enter number");
  }
}
getPositiveSum(a, b, c);

// Посчитать выражение макс(а*б*с, а+б+с)+3 /////////////////////////////////////////////////////////////////
function getValue(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    // validation input parameters
    let mult = a * b * c;
    let sum = a + b + c;
    return console.log(Math.max(mult, sum) + 3);
  } else {
    console.log("enter number");
  }
}

getValue(a, b, c);

// Написать программу определения оценки студента по его рейтингу, /////////////////////////////////////////////
function getAssessment(value) {
  if (typeof value === "number") {
    // validation input parameters
    if (value >= 0 && value <= 19) {
      console.log("F");
    } else if (value >= 20 && value <= 39) {
      console.log("E");
    } else if (value >= 40 && value <= 59) {
      console.log("D");
    } else if (value >= 60 && value <= 74) {
      console.log("C");
    } else if (value >= 75 && value <= 89) {
      console.log("B");
    } else if (value >= 90 && value <= 100) {
      console.log("A");
    }
  } else {
    console.log("enter number");
  }
}
getAssessment("19");
getAssessment(39);
getAssessment(59);
getAssessment(74);
getAssessment(89);
getAssessment(100);
