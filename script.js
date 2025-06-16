const modal = document.getElementById("video-modal");
const video = document.getElementById("main-video");
const playBtn = document.getElementById("play-button");
const closeBtn = document.querySelector(".close");

playBtn.onclick = () => {
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play();
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
};
