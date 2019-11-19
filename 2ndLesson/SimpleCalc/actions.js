function renderEvent() {
  let itemElement = document.querySelectorAll("[data-item]");
  let mainElement = document.querySelector("[data-back]");
  let removeElement = document.querySelector("[data-remove]");
  let equalElement = document.querySelector("[data-equal]");

  itemElement.forEach(item =>
    item.addEventListener("click", clickHandlerNumber)
  );
  mainElement.addEventListener("click", clickHandlerBack);
  removeElement.addEventListener("click", clickHandlerRemove);
  equalElement.addEventListener("click", clickHandlerEqual);
}

function clickHandlerNumber(e) {
  let value = document.form.textview.value;
  let item = e.target.closest("[data-item]").getAttribute("data-item");
  if (item === "+" || item === "-" || item === "*" || item === "/") {
    const action = value.match(/\D/g);
    if (!!action) {
      myEqual(value);
    }
  }
  if (item) {
    insertInCalc(item);
  }
}

function clickHandlerActions(e) {
  let value = document.form.textview.value;

  let item = e.target.closest("[data-actions]").getAttribute("data-actions");
  if (!action) {
    myEqual(value);
    insertInCalc(item);
  } else {
    insertInCalc(item);
  }
}

function clickHandlerBack(e) {
  let back = e.target.closest("[data-back]").getAttribute("data-back");
  if (back) {
    deleteInInput();
  }
}

function clickHandlerRemove(e) {
  let remove = e.target.closest("[data-remove]").getAttribute("data-remove");
  if (remove) {
    cleanInCalcInput();
  }
}
function clickHandlerEqual(e) {
  let remove = e.target.closest("[data-equal]").getAttribute("data-equal");
  if (remove) {
    let value = document.form.textview.value;
    myEqual(value);
  }
}

renderEvent();

function insertInCalc(num) {
  if (!num) return false;
  document.form.textview.value = document.form.textview.value + num;
}

function cleanInCalcInput() {
  document.form.textview.value = "";
}
function deleteInInput() {
  let value = document.form.textview.value;
  document.form.textview.value = value.substring(0, value.length - 1);
}

function writeInInput(data) {
  if (!data) return false;
  document.form.textview.value = `${data}`;
}

function myEqual(value) {
  if (!value) {
    return false;
  }
  if (value.indexOf("+") != -1) {
    let statement = value.split("+");
    let a = +statement[0];
    let b = +statement[1];
    let sourceValue = plus(a, b);
    if (!isNaN(b) && !isNaN(a)) {
      writeInInput(sourceValue);
      return true;
    } else {
      return false;
    }
  } else if (value.indexOf("-") != -1) {
    let statement = value.split("-");
    let a = +statement[0];
    let b = +statement[1];
    let sourceValue = subtraction(a, b);
    if (!isNaN(b) && !isNaN(a)) {
      writeInInput(sourceValue);
      return true;
    } else {
      return false;
    }
  } else if (value.indexOf("*") != -1) {
    let statement = value.split("*");
    let a = +statement[0];
    let b = +statement[1];
    let sourceValue = multiplication(a, b);
    if (!isNaN(b) && !isNaN(a)) {
      writeInInput(sourceValue);
      return true;
    } else {
      return false;
    }
  } else if (value.indexOf("/") != -1) {
    let statement = value.split("/");
    let a = +statement[0];
    let b = +statement[1];
    let sourceValue = division(a, b);
    if (!isNaN(b) && !isNaN(a)) {
      writeInInput(sourceValue);
      return true;
    } else {
      return false;
    }
  }
}

function plus(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "enter correct data";
  }
}
function subtraction(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "enter correct data";
  }
}
function multiplication(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    return "enter correct data";
  }
}
function division(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a / b;
  } else {
    return "enter correct data";
  }
}
