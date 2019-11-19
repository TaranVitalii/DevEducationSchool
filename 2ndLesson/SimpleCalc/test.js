describe("actions from calc", () => {
  const x1 = 1;
  const x2 = 2;
  const y1 = -1;
  const y2 = 3;

  it("plus", function() {
    assert.equal(plus(x1, x2), 3);
  });
  it("plus another data", function() {
    assert.equal(plus(undefined, null), "enter correct data");
  });
  it("subtraction", function() {
    assert.equal(subtraction(x2, x1), 1);
  });
  it("subtraction another data", function() {
    assert.equal(subtraction(undefined, null), "enter correct data");
  });
  it("multiplication", function() {
    assert.equal(multiplication(x1, x2), 2);
  });
  it("multiplication", function() {
    assert.equal(multiplication(y1, x2), -2);
  });
  it("multiplication another data", function() {
    assert.equal(multiplication(undefined, null), "enter correct data");
  });
  it("division", function() {
    assert.equal(division(y2, x1), 3);
  });
  it("division another data", function() {
    assert.equal(division(undefined, null), "enter correct data");
  });
});

describe("test entry values from input  ", () => {
  it("normal plus string", () => {
    assert.equal(myEqual("5+5"), true);
  });
  it("normal division string", () => {
    assert.equal(myEqual("5/5"), true);
  });
  it("normal subtraction string", () => {
    assert.equal(myEqual("5-5"), true);
  });
  it("normal multiplication string", () => {
    assert.equal(myEqual("5*5"), true);
  });
  it("does not work plus string", () => {
    assert.equal(myEqual("dfs5+as5"), false);
  });
  it("does not work division string", () => {
    assert.equal(myEqual("as5/5"), false);
  });
  it("does not work subtraction string", () => {
    assert.equal(myEqual("5-5as"), false);
  });
  it("does not work multiplication string", () => {
    assert.equal(myEqual("sa5*5"), false);
  });
  it("another value", () => {
    assert.equal(myEqual(undefined), false);
  });
  it("missing value", () => {
    assert.equal(myEqual(""), false);
  });
});

describe("test write func", () => {
  it("func test write  normal value", () => {
    let value = "some text";
    document.form.textview.value = "";

    writeInInput(value);
    assert.equal(document.form.textview.value, value);
  });
  it("func test if entrance value === undefined", () => {
    let value = undefined;
    document.form.textview.value = "";

    assert.equal(writeInInput(value), false);
  });
});

describe("delete from input value", () => {
  it(" delete last element in func entrance data", () => {
    let value = "some text";
    document.form.textview.value = value;

    deleteInInput(value);

    assert.equal(document.form.textview.value, "some tex");
  });
  it(" delete last element in func entrance data, after a few click", () => {
    let value = "some text";
    document.form.textview.value = value;

    deleteInInput();
    deleteInInput();
    deleteInInput();

    assert.equal(document.form.textview.value, "some t");
  });
  it(" if entry value clear", () => {
    document.form.textview.value = "";

    deleteInInput();

    assert.equal(document.form.textview.value, "");
  });
});

describe("clear input from calc", () => {
  it(" clear all data in input ", () => {
    let value = "some text";
    document.form.textview.value = value;

    cleanInCalcInput();

    assert.equal(document.form.textview.value, "");
  });
  it(" clear all data in input if value clear", () => {
    let value = "";
    document.form.textview.value = value;

    cleanInCalcInput();

    assert.equal(document.form.textview.value, "");
  });
});

describe("insert in  input data from button calc", () => {
  it(" insert in  input data ", () => {
    let value = "some text";
    document.form.textview.value = "";

    insertInCalc(value);

    assert.equal(document.form.textview.value, value);
  });
  it("insert in input data from a few click on button", () => {
    let value = "some text";
    document.form.textview.value = "";

    insertInCalc(value);
    insertInCalc(" and numbers");

    assert.equal(document.form.textview.value, "some text and numbers");
  });
  it("insert in input udefined data", () => {
    let value = undefined;
    document.form.textview.value = "";

    assert.equal(insertInCalc(value), false);
  });
  it("insert in input clear data", () => {
    document.form.textview.value = "";

    assert.equal(insertInCalc(""), false);
  });
});

// describe("click handler equal", function() {
//   let sandbox;

//   before(() => {
//     sandbox = sinon.createSandbox();
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   it("click handler equal should be called once", function() {
//     const stub = sandbox.stub(window, "clickHandlerEqual");
//     let equalElement = document.querySelector("[data-equal]");

//     equalElement.click();

//     sandbox.assert.calledOnce(stub);
//   });

//   // it("click handler equal should be called twice", function() {
//   //   myAPI.hello();
//   //   myAPI.hello();
//   //   sandbox.assert.calledTwice(myAPI.hello);
//   // });
// });
