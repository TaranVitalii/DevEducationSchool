// Получить строковое название дня недели по номеру дня.

function myGetDay(allDay) {
  if (allDay < 0) {
    return "enter positive number";
  } else if (!allDay) {
    return "enter number";
  }
  if (typeof allDay === "number") {
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
  } else {
    return "enter number";
  }
}

console.log(myGetDay(1));
// Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function getLengthBetweenTwoSpots(x1, y1, x2, y2) {
  let xAction = Math.pow(x2 - x1, 2);
  let yAction = Math.pow(y2 - y1, 2);
  let sumSqrtAction = Math.sqrt(xAction + yAction);
  return +sumSqrtAction.toFixed(2);
}
getLengthBetweenTwoSpots(-2, 1, 6, -1);
