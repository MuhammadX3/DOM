/* Project 3 Js */

const accordion = document.getElementsByClassName("content-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
