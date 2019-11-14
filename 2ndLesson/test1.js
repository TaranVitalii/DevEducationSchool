////////////////////////////////////////////////////ARRAY//////////////////////////////////////
describe("get min value from array", function() {
  let randomArray = [10, 22, 13, 4, 0, 5, 40, 12, 43, 12, 34, 12];
  let clearArray = [];
  it("return min value ", function() {
    assert.equal(getMinValue(randomArray), 0);
  });
  it("return undefined from clear array ", function() {
    assert.equal(getMinValue(clearArray), undefined);
  });
  it("return false if string ", function() {
    assert.equal(getMinValue("hello"), false);
  });
  it("return false if null ", function() {
    assert.equal(getMinValue(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(getMinValue(randomArray), "number");
  });
});

// deepEqual для сравнения массивов и объектов
describe("get  max value from array", function() {
  let randomArray = [10, 22, 13, 4, 0, 5, 40, 12, 43, 12, 34, 12];
  let clearArray = [];
  it("return undefined from clear array ", function() {
    assert.equal(getMaxValue(clearArray), undefined);
  });
  it("return max value ", function() {
    assert.equal(getMaxValue(randomArray), 43);
  });
  it("return false if string ", function() {
    assert.equal(getMaxValue("hello"), false);
  });
  it("return false if null ", function() {
    assert.equal(getMaxValue(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(getMaxValue(randomArray), "number");
  });
});

describe("get index min value from array", function() {
  let randomArray = [10, 22, 13, 4, 0, 5, 40, 12, 43, 12, 34, 12];
  let clearArray = [];
  it("return undefined from clear array ", function() {
    assert.equal(getMinValueIndex(clearArray), undefined);
  });
  it("return index min value ", function() {
    assert.equal(getMinValueIndex(randomArray), 4);
  });
  it("return false if string ", function() {
    assert.equal(getMinValueIndex("hello"), false);
  });
  it("return false if null ", function() {
    assert.equal(getMinValueIndex(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(getMinValueIndex(randomArray), "number");
  });
});

describe("get index max value from array", function() {
  let randomArray = [10, 22, 13, 4, 0, 5, 40, 12, 43, 12, 34, 12];
  let clearArray = [];
  it("return undefined from clear array ", function() {
    assert.equal(getMaxValueIndex(clearArray), undefined);
  });
  it("return index max value ", function() {
    assert.equal(getMaxValueIndex(randomArray), 8);
  });
  it("return false if string ", function() {
    assert.equal(getMaxValueIndex("hello"), false);
  });
  it("return false if null ", function() {
    assert.equal(getMaxValueIndex(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(getMaxValueIndex(randomArray), "number");
  });
});

describe("get summ odd elements of array", function() {
  let randomArray = [10, 22, 13, 4, 0, 5, 40, 12, 43, 12, 34, 12];
  let clearArray = [];
  it("return false from clear array ", function() {
    assert.equal(getSummOddElements(clearArray), false);
  });
  it("return summ value ", function() {
    assert.equal(getSummOddElements(randomArray), 67);
  });
  it("return false if string ", function() {
    assert.equal(getSummOddElements("hello"), false);
  });
  it("return false if null ", function() {
    assert.equal(getSummOddElements(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(getSummOddElements(randomArray), "number");
  });
});

describe("reverse elements of array", function() {
  let randomArray = [1, 2, 3, 4, 5, 6];
  let clearArray = [];
  it("return clear array from clear array ", function() {
    assert.deepEqual(myReversArray(clearArray), []);
  });
  it("return reverse array ", function() {
    assert.deepEqual(myReversArray(randomArray), [6, 5, 4, 3, 2, 1]);
  });
  it("return array with letters", function() {
    assert.deepEqual(myReversArray("hello"), ["o", "l", "l", "e", "h"]);
  });
  it("return false if null ", function() {
    assert.equal(myReversArray(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(myReversArray(randomArray), "array");
  });
});

describe("count odd elements", function() {
  let randomArray = [1, 2, 3, 4, 5, 6];
  let textArray = ["o", "l", "l", "e", "h"];
  it("get count elements ", function() {
    assert.equal(getCountOddElements(randomArray), 3);
  });
  it("return number of odd elements", function() {
    assert.equal(getCountOddElements(textArray), 2);
  });
  it("return false if null ", function() {
    assert.equal(getCountOddElements(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(getCountOddElements(randomArray), "number");
  });
});

describe("reverse half one arrays", function() {
  let randomArray = [1, 2, 3, 4, 5, 6];
  let textArray = ["o", "l", "l", "e", "h"];
  it("reverse half array with number ", function() {
    assert.deepEqual(getReverseHalfArray(randomArray), [3, 2, 1, 6, 5, 4]);
  });
  it("reverse half array with string letters", function() {
    assert.deepEqual(getReverseHalfArray(textArray), ["l", "o", "h", "e", "l"]);
  });
  it("return false if null ", function() {
    assert.equal(getReverseHalfArray(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(getReverseHalfArray(randomArray), "array");
  });
});

describe("buble sort", function() {
  let randomArray = [3, 2, 1, 6, 5, 4];
  let clearArray = [];
  it("sort clear array ", function() {
    assert.deepEqual(bubleSort(clearArray), []);
  });
  it("standart buble sort ", function() {
    assert.deepEqual(bubleSort(randomArray), [1, 2, 3, 4, 5, 6]);
  });
  it("return false if null ", function() {
    assert.equal(bubleSort(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(bubleSort(randomArray), "array");
  });
});

describe("select sort", function() {
  let randomArray = [3, 2, 1, 6, 5, 4];
  let clearArray = [];
  it("sort clear array ", function() {
    assert.deepEqual(selectionSort(clearArray), []);
  });
  it("standart select sort ", function() {
    assert.deepEqual(selectionSort(randomArray), [1, 2, 3, 4, 5, 6]);
  });
  it("return false if null ", function() {
    assert.equal(selectionSort(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(selectionSort(randomArray), "array");
  });
});

describe("insert sort", function() {
  let randomArray = [3, 2, 1, 6, 5, 4];
  let clearArray = [];
  it("sort clear array ", function() {
    assert.deepEqual(inserSort(clearArray), []);
  });
  it("standart insert sort ", function() {
    assert.deepEqual(inserSort(randomArray), [1, 2, 3, 4, 5, 6]);
  });
  it("return false if null ", function() {
    assert.equal(inserSort(null), false);
  });
  it("return typeof source value ", function() {
    assert.typeOf(inserSort(randomArray), "array");
  });
});
////////////////////////////////////////////////////CONDITION///////////////////////////////////////////////////////////////////////

describe("summ or multiplication", () => {
  let number1 = 1;
  let number2 = 2;
  let number3 = 3;
  let number4 = 4;
  let numberMinus1 = -1;
  let numberMinus2 = -2;
  it("summ numbers", function() {
    assert.equal(sumOrMultiplication(number1, number3), 4);
  });
  it("multiplication numbers", function() {
    assert.equal(sumOrMultiplication(number2, number4), 8);
  });
  it("negative numbers", function() {
    assert.equal(sumOrMultiplication(numberMinus1, number1), 0);
  });
  it("negative numbers multiplication", function() {
    assert.equal(sumOrMultiplication(numberMinus2, numberMinus1), 2);
  });
  it("uncorect numbers summ", function() {
    assert.equal(sumOrMultiplication(numberMinus1, numberMinus1), -2);
  });
});
getCartesianQuarter;

describe("cartesian quarter", () => {
  let number1 = 1;
  let number2 = 2;
  let numberMinus1 = -1;
  let numberMinus2 = -2;
  it("first quarter", function() {
    assert.equal(getCartesianQuarter(number1, number2), "first");
  });
  it("second quarter", function() {
    assert.equal(getCartesianQuarter(numberMinus1, number2), "second");
  });
  it("thirty quarter", function() {
    assert.equal(getCartesianQuarter(numberMinus1, numberMinus2), "third");
  });
  it("fourth quarter", function() {
    assert.equal(getCartesianQuarter(number1, numberMinus1), "fourth");
  });
  it("uncorect value", function() {
    assert.equal(getCartesianQuarter(0, 0), "uncorect value");
  });
  it("uncorect value", function() {
    assert.equal(getCartesianQuarter("0", 0), "uncorect value");
  });
  it("uncorect intro value null", function() {
    assert.equal(getCartesianQuarter(null, null), "uncorect value");
  });
});

describe("cartesian quarter", () => {
  let number1 = 1;
  let number2 = 2;
  let numberMinus1 = -1;
  let numberMinus2 = -2;
  it("first quarter", function() {
    assert.equal(getCartesianQuarter(number1, number2), "first");
  });
  it("second quarter", function() {
    assert.equal(getCartesianQuarter(numberMinus1, number2), "second");
  });
  it("thirty quarter", function() {
    assert.equal(getCartesianQuarter(numberMinus1, numberMinus2), "third");
  });
  it("fourth quarter", function() {
    assert.equal(getCartesianQuarter(number1, numberMinus1), "fourth");
  });
  it("uncorect value", function() {
    assert.equal(getCartesianQuarter(0, 0), "uncorect value");
  });
  it("uncorect value", function() {
    assert.equal(getCartesianQuarter("0", 0), "uncorect value");
  });
  it("uncorect intro value null", function() {
    assert.equal(getCartesianQuarter(null, null), "uncorect value");
  });
});

describe("summ all positive number", () => {
  let number1 = 1;
  let number2 = 2;
  let numberMinus1 = -1;
  it("1 negative number", function() {
    assert.equal(getPositiveSum(number1, number2, numberMinus1), 3);
  });
  it("3 negative number", function() {
    assert.equal(
      getPositiveSum(numberMinus1, numberMinus1, numberMinus1),
      "enter positive number"
    );
  });
  it("one undefined or null in variables", function() {
    assert.equal(getPositiveSum(number1, number2, undefined), 3);
  });
  it("all positive number", function() {
    assert.equal(getPositiveSum(number1, number2, number1), 4);
  });
});

describe("max value from sum three aruments and multiplication", () => {
  let number1 = 1;
  let number2 = 2;
  let numberMinus1 = -1;
  it("1 negative number", function() {
    assert.equal(getValue(number1, number2, numberMinus1), 5);
  });
  it("3 negative number", function() {
    assert.equal(getValue(numberMinus1, numberMinus1, numberMinus1), 2);
  });
  it("one undefined or null in variables", function() {
    assert.equal(getValue(number1, number2, undefined), "enter number");
  });
  it("all positive number", function() {
    assert.equal(getValue(number1, number2, number1), 7);
  });
});

describe("get marks", () => {
  let number1 = 1;
  let numberMinus1 = -1;
  it("1 positive number", function() {
    assert.equal(getAssessment(number1), "F");
  });
  it("1 negative number", function() {
    assert.equal(getAssessment(numberMinus1), "enter number");
  });
  it("one undefined or null in variables", function() {
    assert.equal(getAssessment(undefined), "enter number");
  });
});
