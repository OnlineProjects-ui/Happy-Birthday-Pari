// Modal functionality for the main birthday video
const modal = document.getElementById("videoModal");
const video = document.getElementById("mainVideo");
const playBtn = document.querySelector(".play-btn");
const closeBtn = document.querySelector(".close");

playBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play();
  video.setAttribute("controls", true);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  video.removeAttribute("controls");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
    video.removeAttribute("controls");
  }
});

// Autoplay clips
document.querySelectorAll(".clips video").forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play();
});
