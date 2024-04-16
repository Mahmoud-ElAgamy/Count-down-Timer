let countDownDate = new Date().setSeconds(new Date().getSeconds() + 30);

let timerInterval;

const daysElem = document.getElementById("days"),
  hoursElem = document.getElementById("hours"),
  minutesElem = document.getElementById("minutes"),
  secondsElem = document.getElementById("seconds"),
  timerRunningContent = document.getElementById("timer-running"),
  timerEndContent = document.getElementById("timer-end");

const formatTime = (time, string) => {
  return time > 1
    ? `<span>${time}</span>${string}s`
    : `<span>${time}</span>${string}`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countDown = new Date(countDownDate).getTime();
  const difference = (countDown - now) / 1000;

  if (difference < 1) endCountDown();

  let days = Math.trunc(difference / (60 * 60 * 24));
  let hours = Math.trunc((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.trunc((difference % (60 * 60)) / 60);
  let seconds = Math.trunc(difference % 60);

  daysElem.innerHTML = formatTime(days, "day");
  hoursElem.innerHTML = formatTime(hours, "hour");
  minutesElem.innerHTML = formatTime(minutes, "minute");
  secondsElem.innerHTML = formatTime(seconds, "second");
};

const endCountDown = () => {
  clearInterval(timerInterval);
  timerRunningContent.classList.add("invisible");
  timerEndContent.classList.add("visible");
};

startCountdown();
timerInterval = setInterval(() => {
  startCountdown();
}, 1000);
