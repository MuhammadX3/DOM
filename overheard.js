// /* Project 2 Js */

// let openBtn = document.getElementById("open-btn");
// let closeBtn = document.getElementById("close-btn");
// let mContainer = document.getElementById("modal-container");

// // Event Listener

// openBtn.addEventListener("click", function () {
//   mContainer.style.display = "block";
// });

// closeBtn.addEventListener("click", function () {
//   mContainer.style.display = "none";
// });

// window.addEventListener("click", function (e) {
//   if (e.target === mContainer) {
//     mContainer.style.display = "none";
//   }
// });

// /* Project 3 Js */

// const accordion = document.getElementsByClassName("content-container");

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

/* Project 4 Js */

const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

// Variables for time value

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch function

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = (document.getElementById("timer").innerHTML =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class='fa-solid fa-pause' id='pause'></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class='fa-solid fa-play' id='play'></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
});
