let workTime = 25;
let breakTime = 5;
let timeInterval;
let isWorking = true;
let isPaused = false;

const updateDisplay = (minutes, seconds) => {
  const display = document.getElementById("timer-display");
  display.textContent = `${minutes.toString().padStart(1, "00")}:${seconds
    .toString()
    .padStart(1, "00")}`;
};

const startTimer = () => {
  if (!isPaused) {
    const totalSeconds = isWorking ? workTime * 60 : breakTime * 60;
    let secondsRemaining = totalSeconds;

    timeInterval = setInterval(() => {
      const minutes = Math.floor(secondsRemaining / 60);
      const seconds = secondsRemaining % 60;
      updateDisplay(minutes, seconds);

      if (secondsRemaining === 0) {
        document.getElementById("alarm").play();
        clearInterval(timeInterval);
        isWorking = !isWorking;
        startTimer();
      } else {
        secondsRemaining--;
      }
    }, 1000);
  }
};

const pauseTimer = () => {
  clearInterval(timeInterval);
  isPaused = true;
};

const resetTimer = () => {
  clearInterval(timeInterval);
  isPaused = false;
  isWorking = true;
  updateDisplay(workTime, "00");
};

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
