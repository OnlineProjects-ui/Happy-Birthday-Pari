// Modal logic for main birthday video
const modal = document.getElementById("videoModal");
const video = document.getElementById("mainVideo");
const button = document.querySelector(".play-btn");
const closeBtn = document.querySelector(".close");

// When button is clicked, show modal and play video
button.onclick = function () {
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play();
  video.setAttribute("controls", true);
};

// When close button is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  video.removeAttribute("controls");
};

// Click outside modal to close
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
    video.removeAttribute("controls");
  }
};

// Loop & autoplay all clips
document.querySelectorAll(".clips video").forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play();
});
