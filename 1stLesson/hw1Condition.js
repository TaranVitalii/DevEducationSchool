///////////////////////////////////////////////////////////IF/////////////////////////////////////////////////
const a = 5;
const aEven = 6;
const b = 10;
const c = 10;

// Если а – четное посчитать а*б, иначе а+б///////////////////////////////////////////////////////////////////
function sumOrMultiplication(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    // validation input parameters
    return a % 2 === 0 ? a * b : a + b;
  } else {
    return "uncorect value";
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
      return "first";
    } else if (x < 0 && y > 0) {
      return "second";
    } else if (x < 0 && y < 0) {
      return "third";
    } else if (x > 0 && y < 0) {
      return "fourth";
    } else {
      return "uncorect value";
    }
  } else {
    return "uncorect value";
  }
}

getCartesianQuarter(plusX, plusY);
getCartesianQuarter(minusX, plusY);
getCartesianQuarter(minusX, minusY);
getCartesianQuarter(plusX, minusY);

// Найти суммы только положительных из трех чисел /////////////////////////////////////////////////
function getPositiveSum(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    let sum = 0;
    if (a > 0) {
      sum += a;
    }
    if (b > 0) {
      sum += b;
    }
    if (c > 0) {
      sum += c;
    }
    return sum;
  } else {
    console.log("enter number");
  }
}
console.log(getPositiveSum(a, b, c), "sumPos");

// Посчитать выражение макс(а*б*с, а+б+с)+3 /////////////////////////////////////////////////////////////////
function getValue(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    // validation input parameters
    let mult = a * b * c;
    let sum = a + b + c;
    return Math.max(mult, sum) + 3;
  } else {
    return "enter number";
  }
}

console.log(getValue(a, b, c));

// Написать программу определения оценки студента по его рейтингу, /////////////////////////////////////////////
function getAssessment(value) {
  if (typeof value === "number") {
    // validation input parameters
    if (value >= 0 && value <= 19) {
      return "F";
    } else if (value >= 20 && value <= 39) {
      return "E";
    } else if (value >= 40 && value <= 59) {
      return "D";
    } else if (value >= 60 && value <= 74) {
      return "C";
    } else if (value >= 75 && value <= 89) {
      return "B";
    } else if (value >= 90 && value <= 100) {
      return "A";
    } else {
      console.log("enter number");
    }
  } else {
    console.log("enter number");
  }
}
getAssessment("19");
console.log(getAssessment(39));
getAssessment(59);
getAssessment(74);
getAssessment(89);
getAssessment(100);
