const lavalUpVideo = document.getElementById("laval-up");
const turboVideo = document.getElementById("turbo-laval-up");
const lavalUpContainer = document.getElementById("laval-up-container");
const turboContainer = document.getElementById("turbo-container");
const lavalUpButton = document.getElementById("laval-up-button");
const turboButton = document.getElementById("turbo-button");
const currentLavalElement = document.getElementById("current-level");
const backdrop = document.getElementById("backdrop");
const disclaimer = document.getElementById("disclaimer");
const disclaimerButton = document.getElementById("disclaimer-button");
const exitButton = document.getElementById("exit-button");
const exitPrankContainer = document.getElementById("exit-prank-container");
const exitPrank = document.getElementById("exit-prank");

const updateLavalCount = (amount) => {
  let currentLavalCount = parseInt(localStorage.getItem("currentLaval")) || 0;
  currentLavalCount += amount;
  currentLavalElement.innerText = currentLavalCount;
  localStorage.setItem("currentLaval", currentLavalCount);
};

lavalUpButton.addEventListener("click", () => {
  turboContainer.classList.add("hidden");
  lavalUpContainer.classList.remove("hidden");
  turboVideo.pause();
  lavalUpVideo.currentTime = 0;
  lavalUpVideo.play();
  updateLavalCount(1);
});

turboButton.addEventListener("click", () => {
  const turboButtonBackground = document.getElementById("turbo-button-bg");
  const turboButtonContainer = document.getElementById(
    "turbo-button-container"
  );

  turboButtonContainer.classList.add("group");
  turboButton.disabled = true;
  turboButton.style.cursor = "not-allowed";

  turboButtonBackground.style.transition = "none";
  turboButtonBackground.style.width = "0";
  setTimeout(() => {
    turboButtonBackground.style.transition = "width 5s";
    turboButtonBackground.style.width = "100%";
  }, 0);

  setTimeout(() => {
    turboButton.disabled = false;
    turboButton.style.cursor = "pointer";
    turboButtonContainer.classList.remove("group");
  }, 5000);

  lavalUpContainer.classList.add("hidden");
  turboContainer.classList.remove("hidden");
  lavalUpVideo.pause();
  turboVideo.currentTime = 0;
  turboVideo.play();
  updateLavalCount(10);
});

disclaimerButton.addEventListener("click", () => {
  backdrop.classList.remove("hidden");
  disclaimer.classList.remove("scale-0");
  disclaimer.classList.remove("invisible");
  disclaimer.classList.add("scale-100");
});

exitButton.addEventListener("click", () => {
  backdrop.classList.remove("hidden");
  exitPrankContainer.classList.remove("hidden");
  turboVideo.pause();
  lavalUpVideo.pause();
  exitPrank.currentTime = 0;
  exitPrank.play();

  setTimeout(() => {
    backdrop.classList.add("hidden");
    exitPrankContainer.classList.add("hidden");
  }, 3000);
});

document.addEventListener("click", (e) => {
  if (e.target == backdrop && disclaimer.classList.contains("scale-100")) {
    backdrop.classList.add("hidden");
    disclaimer.classList.remove("scale-100");
    disclaimer.classList.add("scale-0");
    disclaimer.classList.add("invisible");
  }
});

currentLavalElement.innerText = localStorage.getItem("currentLaval") || 0;
