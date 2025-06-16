document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("playButton");
  const span = document.getElementsByClassName("close")[0];
  const mainVideo = document.getElementById("mainVideo");
  const backgroundMusic = document.getElementById("backgroundMusic");

  // Play main video on button click
  btn.onclick = function () {
    modal.style.display = "flex";
    mainVideo.play();
    backgroundMusic.pause();
  };

  // Close modal on X
  span.onclick = function () {
    modal.style.display = "none";
    mainVideo.pause();
    mainVideo.currentTime = 0;
    backgroundMusic.play();
  };

  // Close modal if clicked outside the video
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      mainVideo.pause();
      mainVideo.currentTime = 0;
      backgroundMusic.play();
    }
  };

  // Start background music
  backgroundMusic.volume = 0.5;
  backgroundMusic.play().catch(() => {
    // Autoplay might be blocked; wait for user interaction
    document.addEventListener('click', () => backgroundMusic.play(), { once: true });
  });
});
