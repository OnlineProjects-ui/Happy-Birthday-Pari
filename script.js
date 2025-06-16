// Modal video functionality
const modal = document.getElementById("video-modal");
const video = document.getElementById("main-video");
const btn = document.getElementById("play-button");
const span = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
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
