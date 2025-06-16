// Modal functionality for the main birthday video const modal = document.getElementById("video-modal"); const video = document.getElementById("main-video"); const btn = document.getElementById("play-button"); const span = document.querySelector(".close");

btn.addEventListener("click", () => { modal.style.display = "flex"; video.setAttribute("controls", true); video.currentTime = 0; video.play(); });

span.addEventListener("click", () => { modal.style.display = "none"; video.pause(); video.currentTime = 0; video.removeAttribute("controls"); });

window.addEventListener("click", (event) => { if (event.target === modal) { modal.style.display = "none"; video.pause(); video.currentTime = 0; video.removeAttribute("controls"); } });

// Ensure all clips autoplay and loop const clips = document.querySelectorAll(".clips video"); clips.forEach((clip) => { clip.loop = true; clip.muted = true; clip.play();

// Ensure replay on load fail clip.addEventListener("ended", () => clip.play()); });

