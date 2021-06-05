const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");

function getHour() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  hour.innerText = `${hours}`;
}

function getMinute() {
  const date = new Date();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  minute.innerText = `${minutes}`;
}

getHour();
getMinute();
setInterval(getHour, 1000);
setInterval(getMinute, 1000);
