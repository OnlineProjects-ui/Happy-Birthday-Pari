// Modal functionality for the main birthday video
const modal = document.getElementById("videoModal");
const video = document.getElementById("mainVideo");
const btn = document.querySelector(".play-btn");
const span = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
  video.play();
  video.setAttribute("controls", true);
});

span.addEventListener("click", () => {
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

// Autoplay all video clips
document.querySelectorAll(".clips video").forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play();
});

// Confetti effect
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 150 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height - canvas.height,
  r: Math.random() * 6 + 4,
  d: Math.random() * 50 + 20,
  color: `hsl(${Math.random() * 360}, 100%, 70%)`,
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += Math.cos(c.d / 10) + 2;
    c.x += Math.sin(c.d / 15);
    if (c.y > canvas.height) {
      confetti[i] = {
        x: Math.random() * canvas.width,
        y: -10,
        r: c.r,
        d: c.d,
        color: c.color,
      };
    }
  });
  requestAnimationFrame(drawConfetti);
}
drawConfetti();
