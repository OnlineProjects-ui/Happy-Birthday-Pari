// Modal functionality for the main birthday video
const modal = document.getElementById("video-modal");
const video = document.getElementById("main-video");
const btn = document.getElementById("play-button");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  video.play();
  video.setAttribute("controls", true);
};

span.onclick = function () {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  video.removeAttribute("controls");
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
    video.removeAttribute("controls");
  }
};

// Loop all gallery videos
document.querySelectorAll(".gallery-grid video").forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play();
});
