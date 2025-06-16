// Open Modal
function openModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("mainVideo");
  modal.style.display = "flex";
  video.play();
  video.setAttribute("controls", true);
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("mainVideo");
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  video.removeAttribute("controls");
}

// Close on click outside
window.onclick = function (event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Autoplay all gallery videos (if any)
const galleryVideos = document.querySelectorAll(".gallery-content video");
galleryVideos.forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play();
});

// Confetti Setup
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
for (let i = 0; i < 300; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 1 + 1,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += c.d;
    if (c.y > canvas.height) {
      c.y = 0;
      c.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 30);
