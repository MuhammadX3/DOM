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

// Variables for times

let seconds = 0;
let minutes = 0;
let hours = 0;

// Stop Watch Function

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

  let displayTimer = (document.getElementById("timer").innerText =
    hours + ":" + minutes + ":" + seconds);
}

stopWatch();
