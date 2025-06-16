// Modal functionality for the main birthday video
const modal = document.getElementById("videoModal");
const video = document.getElementById("mainVideo");
const btn = document.querySelector(".play-btn");
const closeBtn = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "block";
  video.play();
  video.setAttribute("controls", true);
};

closeBtn.onclick = function () {
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

// Loop all clips in the gallery
document.querySelectorAll(".gallery-grid video").forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play().catch(() => {});
});
