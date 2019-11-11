// Получить строковое название дня недели по номеру дня.

function myGetDay(allDay) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let countWeek = Math.round(allDay / 7);
  let allDayInCountWeek = countWeek * 7;
  let notFullWeek = Math.abs(allDay - allDayInCountWeek);
  if (notFullWeek === 0) {
    let result = daysOfWeek[6];
    return result;
  }
  return daysOfWeek[notFullWeek - 1];
}

console.log(myGetDay(1));
// Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function getLengthBetweenTwoSpots(x1, y1, x2, y2) {
  let xAction = Math.pow(x2 - x1, 2);
  let yAction = Math.pow(y2 - y1, 2);
  let sumSqrtAction = Math.sqrt(xAction + yAction);
  console.log(sumSqrtAction);
}
getLengthBetweenTwoSpots(-2, 1, 6, -1);
