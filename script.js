const modal = document.getElementById("video-modal");
const video = document.getElementById("main-video");
const btn = document.getElementById("play-button");
const closeBtn = document.getElementById("close-modal");

// Open Modal & Play Video
btn.onclick = () => {
  modal.style.display = "block";
  video.currentTime = 0;
  video.play();
};

// Close Modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  video.pause();
};

// Click outside to close
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    video.pause();
  }
};
