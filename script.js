// Surprise Video Popup
const playBtn = document.getElementById("playVideo");
const videoPopup = document.getElementById("videoPopup");
const closePopup = document.getElementById("closePopup");

playBtn.addEventListener("click", () => {
  videoPopup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  videoPopup.style.display = "none";
  const video = videoPopup.querySelector("video");
  video.pause();
  video.currentTime = 0;
});

// Confetti Generator
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}
setInterval(createConfetti, 150);

// Reveal Animation for Images
const galleryImages = document.querySelectorAll(".gallery img");
window.addEventListener("scroll", () => {
  galleryImages.forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      img.classList.add("reveal");
    }
  });
});

// Background Music
const music = new Audio("song.mp3");
music.loop = true;
music.volume = 0.5;
document.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });
