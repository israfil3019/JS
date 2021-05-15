const myClock = document.getElementById("clock");
const myDate = document.getElementById("date");

function myTime() {
  let rightNow = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  myDate.innerHTML = `${("0" + rightNow.getDate()).substr(-2)} / ${(
    "0" +
    (rightNow.getMonth() + 1)
  ).substr(-2)} / ${rightNow.getFullYear()}<br>${weekdays[rightNow.getDay()]}`;

  myClock.innerHTML = `${("0" + rightNow.getHours()).substr(-2)} : ${(
    "0" + rightNow.getMinutes()
  ).substr(-2)} : ${("0" + rightNow.getSeconds()).substr(-2)}`;
}

setInterval(myTime, 1000);
