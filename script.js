// Modal functionality for the main birthday video
const modal = document.getElementById("videoModal");
const video = document.getElementById("mainVideo");
const playBtn = document.querySelector(".play-btn");
const closeBtn = document.querySelector(".close");

// Open modal and play video
playBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play().catch((err) => {
    console.warn("Autoplay failed:", err);
  });
  video.setAttribute("controls", true);
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  video.removeAttribute("controls");
});

// Click outside video closes modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
    video.removeAttribute("controls");
  }
});

// Autoplay all clip videos
document.querySelectorAll(".clips video").forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play().catch(() => {
    clip.muted = true;
    clip.play();
  });
});
