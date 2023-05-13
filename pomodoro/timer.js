const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const minDiv = document.querySelector(".mins");
const secDiv = document.querySelector(".secs");

const startBtn = document.querySelector(".start");

localStorage.setItem("btn", "focus");

let initial, totalSecs, perc, paused, mins, seconds;

startBtn.addEventListener("click", () => {
  let btn = localStorage.getItem("btn");

  if (btn === "focus") {
    mins = +localStorage.getItem("focusTime") || 1;
  } else {
    mins = +localStorage.getItem("breakTime") || 1;
  }

  seconds = mins * 60;
  totalSecs = mins * 60;
  setTimeout(decremenT(), 60);
  startBtn.style.transform = "scale(0)";
  paused = false;
});

function decremenT() {
  startBtn.disabled = true;
  minDiv.textContent = Math.floor(seconds / 60);
  secDiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  
  if (circle.classList.contains("danger")) {
    circle.classList.remove("danger");
  }

  if (seconds > 0) {
    perc = Math.ceil(((totalSecs - seconds) / totalSecs) * 100);
    setProgress(perc);
    seconds--;
    initial = window.setTimeout("decremenT()", 1000);

    if (seconds < 10) {
      circle.classList.add("danger");
    }
  } else {
    mins = 0;
    seconds = 0;
    bell.play();
    let btn = localStorage.getItem("btn");
    startBtn.disabled = false;
    
    if (btn === "focus") {
      startBtn.textContent = "Start Break";
      startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
    } else {
      startBtn.classList.remove("break");
      startBtn.textContent = "Start Focus";
      localStorage.setItem("btn", "focus");
    }
    startBtn.style.transform = "scale(1)";
  }
}
