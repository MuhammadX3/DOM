let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let mContainer = document.getElementById("modal-container");

// // Event Listener

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
