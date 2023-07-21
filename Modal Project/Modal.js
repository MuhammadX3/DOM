/* Project 2 Js */

let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let mContainer = document.getElementById("modal-container");

// Event Listener

openBtn.addEventListener("click", function () {
  mContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  mContainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === mContainer) {
    mContainer.style.display = "none";
  }
});

/* Project 3 Js */

const accordion = document.getElementsByClassName("content-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
