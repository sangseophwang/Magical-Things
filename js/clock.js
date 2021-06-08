const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const days = document.querySelector(".days");

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

function getDays() {
  const date = new Date();
  const weekName = new Array("일", "월", "화", "수", "목", "금", "토");
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const yoil = String(weekName[date.getDay()]);

  days.innerText = `${month}월 ${day}일 ${yoil}요일`;
}

getHour();
getMinute();
getDays();
setInterval(getHour, 1000);
setInterval(getMinute, 1000);
setInterval(getDays, 1000);
