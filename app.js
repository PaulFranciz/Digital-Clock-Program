const clock = document.getElementById("clock");

function updateDigitalClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  timeString = `${hours}:${minutes}:${seconds} ${meridem}`;
  clock.textContent = timeString;
}

updateDigitalClock();
setInterval(updateDigitalClock, 1000);
