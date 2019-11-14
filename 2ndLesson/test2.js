//////////////////////////////////////////////////////////////////////LOOOPS/////////////////////////////////////////////
describe("get even and count numbers", () => {
  const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 20, 20];
  const data = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    20,
    20
  ];

  it("array < 99 ", function() {
    assert.deepEqual(getSummAndCount(data1), { sum: 80, count: 7 });
  });
  it("array > 99 ", function() {
    assert.deepEqual(getSummAndCount(data), { sum: 646, count: 58 });
  });

  it("undefined and null", function() {
    assert.equal(getSummAndCount(null), "enter number");
  });
});

describe("get even and count numbers", () => {
  const number2 = 2;
  const number10 = 10;

  it("is prime number ", function() {
    assert.equal(isPrime(number2), true);
  });
  it("is unprime number ", function() {
    assert.equal(isPrime(number10), false);
  });
  it("undefined and null", function() {
    assert.equal(isPrime(null), "enter number");
  });
});

describe("get Sqrt Checking", () => {
  const number2 = 4;
  const number10 = 10;

  it("Sqrt Checking ", function() {
    assert.equal(getSqrtChecking(number2), 2);
  });
  it("is unprime number ", function() {
    assert.equal(getSqrtChecking(-1), false);
  });
  it("undefined and null", function() {
    assert.equal(getSqrtChecking(null), "enter number");
  });

  it("Sqrt Checking bin", function() {
    assert.equal(getSqrtCheckingBin(number2), getSqrtChecking(number2));
  });
  it("Sqrt Checking bin", function() {
    assert.equal(getSqrtCheckingBin(number10), getSqrtChecking(number10));
  });
  it("undefined and null", function() {
    assert.equal(getSqrtCheckingBin(null), "enter number");
  });
});

describe("get factorial of numbers", () => {
  const number2 = 2;
  const number10 = -10;

  it("is factorial of positive number ", function() {
    assert.equal(factorial(number2), 2);
  });
  it("is factorial of unpositive number", function() {
    assert.equal(factorial(number10), "enter positive number");
  });
  it("undefined and null", function() {
    assert.equal(factorial(null), "enter number");
  });
});

describe("get sum of numbers", () => {
  const number2 = 123;
  const number10 = -102;

  it("sum of three values ", function() {
    assert.equal(sumNumber(number2), 6);
  });
  it("sum of three values unpositive", function() {
    assert.equal(sumNumber(number10), 3);
  });
  it("undefined and null", function() {
    assert.equal(sumNumber(null), "enter number");
  });
});

describe("reverse number input", () => {
  const number2 = 123;
  const number10 = -102;

  it("reverse of three values ", function() {
    assert.equal(revers(number2), 321);
  });
  it("reverse of  unpositive numbers", function() {
    assert.equal(revers(number10), "enter positive number");
  });
  it("undefined and null", function() {
    assert.equal(revers(null), "enter number");
  });
});
///////////////////////////////////////////////////////////////////FUNC////////////////////////////////////////////////////////////////

describe("get day of week if you enter number", () => {
  const number2 = 2;
  const number10 = -102;

  it("valid day value ", function() {
    assert.equal(myGetDay(number2), "Tuesday");
  });
  it("uncorect value", function() {
    assert.equal(myGetDay(number10), "enter positive number");
  });
  it("undefined and null", function() {
    assert.equal(myGetDay(null), "enter number");
  });
  it("if enter array", function() {
    assert.equal(myGetDay([1, 2, 3]), "enter number");
  });
});

describe("get length between two spots", () => {
  const x1 = 1;
  const x2 = 2;
  const y1 = -1;
  const y2 = 3;

  it("length between two normal spots ", function() {
    assert.equal(getLengthBetweenTwoSpots(x1, x2, y1, y2), 2.24);
  });
  it("length between two normal numbers and strings ", function() {
    assert.deepEqual(getLengthBetweenTwoSpots("x1", "x2", y1, y2), NaN);
  });
  it("undefined and null", function() {
    assert.equal(getLengthBetweenTwoSpots(null, null, null, null), 0);
  });
});
