let data = [2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 4, 123, 12];

// Найти минимальный элемент массива
function getMinValue(value) {
  let min = value[0];

  for (let i = 0; i < value.length; i++) {
    if (value[i] < min) {
      min = value[i];
    }
  }
  return min;
}
console.log(getMinValue(data), "min number in array");

// Найти максимальный элемент массива
function getMaxValue(value) {
  let max = value[0];

  for (let i = 0; i < value.length; i++) {
    if (value[i] > max) {
      max = value[i];
    }
  }
  return max;
}
console.log(getMaxValue(data), "max number in array");

// Найти индекс минимального элемента массива
function getMinValueIndex(value) {
  let min = value[0];

  for (let i = 0; i < value.length; i++) {
    if (value[i] < min) {
      min = value[i];
    }
  }
  for (let i = 0; i < value.length; i++) {
    if (min === value[i]) {
      return i;
    }
  }
}
console.log(getMinValueIndex(data), "min number index");
// Найти индекс максимального элемента массива
function getMaxValueIndex(value) {
  let max = value[0];

  for (let i = 0; i < value.length; i++) {
    if (value[i] > max) {
      max = value[i];
    }
  }
  for (let i = 0; i < value.length; i++) {
    if (max === value[i]) {
      return i;
    }
  }
}
console.log(getMaxValueIndex(data), "max number index");

// Посчитать сумму элементов массива с нечетными индексами
function getSummOddElements(value) {
  let sum = 0;
  for (let i = 1; i < value.length; i += 2) {
    let item = value[i];
    sum += item;
  }
  return sum;
}
console.log(getSummOddElements(data));

// Сделать реверс массива (массив в обратном направлении)
function myReversArray(value) {
  let reverseArray = [];
  for (let i = 0; i < value.length; i++) {
    reverseArray[i] = value[value.length - 1 - i];
  }
  return reverseArray;
}
console.log(myReversArray(data), "revArray");

// Посчитать количество нечетных элементов массива
function getCountOddElements(value) {
  let count = 0;
  for (let i = 1; i <= value.length; i += 2) {
    console.log(i);
    count += 1;
  }
  return count;
}
console.log(getCountOddElements(data), "count");

// Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
function getReverseHalfArray(value) {
  let lengthArray = (value.length - 1) / 2;
  let lastLengthArray = value.length - lengthArray;
  let firstHalf = value.splice(0, lengthArray);
  let secondHalf = value.splice(-lastLengthArray, lastLengthArray);
  let firstHalfReverse = myReversArray(firstHalf);
  let secondHalfReverse = myReversArray(secondHalf);
  return console.log([...firstHalfReverse, ...secondHalfReverse]);
}
getReverseHalfArray(data);

// Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
let data1 = [2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 4, 123, 12];
let data2 = [10, 15, 20, 30, 12, 2, 4, 56, 0];

function bubleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
function selectionSort(value) {
  let lastIndex = value.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    let indexMin = i;
    for (let j = i + 1; j < lastIndex; j++) {
      if (value[indexMin] > value[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [value[i], value[indexMin]] = [value[indexMin], value[i]];
    }
  }
  return value;
}
function inserSort(value) {
  for (let i = 1; i < value.length; i++) {
    const current = value[i];
    while (i > 0 && value[i - 1] > current) {
      value[i] = value[i - 1];
      i--;
    }
    value[i] = current;
  }
  return value;
}

console.log(bubleSort(data1), "buble sort");
console.log(selectionSort(data1), "selection sort");
console.log(inserSort(data2), "insert sort");

// Отсортировать массив (Quick, Merge, Shell, Heap)
