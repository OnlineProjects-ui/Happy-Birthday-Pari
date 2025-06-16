document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("playButton");
  const span = document.getElementsByClassName("close")[0];
  const mainVideo = document.getElementById("mainVideo");
  const backgroundMusic = document.getElementById("backgroundMusic");

  btn.onclick = function () {
    modal.style.display = "flex";
    mainVideo.play();
    backgroundMusic.pause();
  };

  span.onclick = function () {
    modal.style.display = "none";
    mainVideo.pause();
    mainVideo.currentTime = 0;
    backgroundMusic.play();
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      mainVideo.pause();
      mainVideo.currentTime = 0;
      backgroundMusic.play();
    }
  };

  backgroundMusic.volume = 0.5;
  backgroundMusic.play().catch(() => {
    document.addEventListener('click', () => backgroundMusic.play(), { once: true });
  });

  // Optional confetti (just placeholder if needed)
  // For full confetti effects use external JS plugin or canvas confetti
});
