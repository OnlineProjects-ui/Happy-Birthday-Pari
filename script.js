// Main video modal logic
const modal = document.getElementById("videoModal");
const video = document.getElementById("mainVideo");
const btn = document.querySelector(".play-btn");
const span = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play();
});

span.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
});

// Ensure clips autoplay, muted, loop
document.querySelectorAll(".clips video").forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.autoplay = true;
  clip.playsInline = true;
  clip.play().catch(() => {});
});
