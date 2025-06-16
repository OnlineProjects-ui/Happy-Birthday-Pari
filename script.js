const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const video = document.getElementById("surpriseVideo");

btn.onclick = function () {
  modal.style.display = "block";
  video.play();
};

span.onclick = function () {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
};
