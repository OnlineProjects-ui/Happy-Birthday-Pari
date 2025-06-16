function openModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("mainVideo");

  modal.style.display = "flex";
  video.currentTime = 0;

  video.play().catch((err) => {
    console.warn("Autoplay failed, muting video.", err);
    video.muted = true;
    video.play();
  });
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("mainVideo");

  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

// Autoplay all clips
document.querySelectorAll(".clips video").forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play().catch(() => {
    clip.muted = true;
    clip.play();
  });
});
