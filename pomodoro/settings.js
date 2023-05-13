const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
  startBtn.style.transform = "scale(1)";
  clearTimeout(initial);
  setProgress(0);
  minDiv.textContent = 0;
  secDiv.textContent = 0;
  startBtn.disabled = false;
});

pauseBtn.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }

  if (paused) {
    paused = false;
    initial = setTimeout("decremenT()", 60);
    pauseBtn.textContent = "Pause"
    pauseBtn.classList.remove("resume")
  } else {
    clearTimeout(initial);
    pauseBtn.textContent = "Resume";
    pauseBtn.classList.add("resume");
    paused = true;
  }
});
