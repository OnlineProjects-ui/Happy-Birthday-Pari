// Modal functionality for the main birthday video
const modal = document.getElementById("videoModal");
const video = document.getElementById("mainVideo");
const btn = document.getElementById("play-button");
const span = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
  video.setAttribute("controls", true);
  video.currentTime = 0;

  // Force video to play, fallback if autoplay is blocked
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      video.muted = true;
      video.play();
    });
  }
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

// Loop and autoplay all clips
const clips = document.querySelectorAll(".clips video");
clips.forEach((clip) => {
  clip.loop = true;
  clip.muted = true;
  clip.play();

  // Ensure it restarts if somehow ends
  clip.addEventListener("ended", () => clip.play());
});
