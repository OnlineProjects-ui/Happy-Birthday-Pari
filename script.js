function playVideo() {
  document.getElementById("videoPopup").style.display = "block";
  document.getElementById("birthdayVideo").play();
}

function closeVideo() {
  const popup = document.getElementById("videoPopup");
  popup.style.display = "none";
  const video = document.getElementById("birthdayVideo");
  video.pause();
  video.currentTime = 0;
}

// 🎊 Confetti Script
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 100 + 50,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.lineWidth = c.r / 2;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 4);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach((c, i) => {
    c.tiltAngle += 0.1;
    c.y += Math.cos(c.d) + 2 + c.r / 2;
    c.x += Math.sin(c.tiltAngle) * 2;
    c.tilt = Math.sin(c.tiltAngle) * 15;

    if (c.y > confettiCanvas.height) {
      c.y = -10;
      c.x = Math.random() * confettiCanvas.width;
    }
  });
}

function animateConfetti() {
  drawConfetti();
  requestAnimationFrame(animateConfetti);
}

createConfetti();
animateConfetti();
