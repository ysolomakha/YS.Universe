window.onload = function() {
  var today = new Date();
  var daysToSunday = 7 - today.getDay();
  if (daysToSunday === 7) {
    daysToSunday = 0;
  }
  alert("До найближчої неділі залишилось " + daysToSunday + " днів.");

  var monthLink = document.getElementById("month-link");
monthLink.onclick = function() {
  var today = new Date();
  var monthNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
  var monthIndex = today.getMonth();
  var monthName = monthNames[monthIndex];
  alert("Поточний місяць: " + monthName);
  return false;
};
};

 
var intervalId;

function showDate() {
  var now = new Date();
  var dateElem = document.getElementById("date");
  dateElem.innerHTML = now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear();
}

function showTime() {
  var dateElem = document.getElementById("date");
  var now = new Date();
  dateElem.innerHTML = "Current time: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

function startInterval() {
  showTime(); 
  intervalId = setInterval(showTime, 1000); 
}

function stopInterval() {
  clearInterval(intervalId); 
  showDate(); 
}

showDate(); 


function greenOverlay(img) {
  img.style.filter = "brightness(75%) saturate(2) sepia(100%) hue-rotate(60deg)";
}

function removeOverlay(img) {
  img.style.filter = "none";
}
