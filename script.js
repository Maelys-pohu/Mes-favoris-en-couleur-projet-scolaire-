const playAndPause = document.querySelectorAll(".playAndPause");

playAndPause.forEach((audioDiv) => {
  const playButton = audioDiv.querySelector("#play-button");
  const pauseButton = audioDiv.querySelector("#pause-button");
  const stopButton = audioDiv.querySelector("#stop-button");
  const track = audioDiv.querySelector("audio");
  const volume = audioDiv.querySelector("#volume");
  const volumeValue = audioDiv.querySelector("#volume-value");
  const elapsed = audioDiv.querySelector("#elapsed");
  const duration = audioDiv.querySelector("#track");

  playButton.addEventListener("click", function () {
    track.play();
    track.volume = volume.value;
    pauseButton.style.display = "initial";
    stopButton.style.display = "initial";
    this.style.display = "none";
  });

  pauseButton.addEventListener("click", function () {
    track.pause();
    playButton.style.display = "initial";
    this.style.display = "none";
  });

  stopButton.addEventListener("click", function () {
    track.pause();
    track.currentTime = 0;
    playButton.style.display = "initial";
    pauseButton.style.display = "none";
    this.style.display = "none";
  });

  track.addEventListener("timeupdate", function () {
    duration.value = this.currentTime;
    elapsed.textContent = buildDuration(this.currentTime);
  });

  duration.addEventListener("input", function () {
    elapsed.textContent = buildDuration(this.value);
    track.currentTime = this.value;
  });

  volume.addEventListener("input", function () {
    track.volume = this.value;
    volumeValue.textContent = this.value * 100 + "%";
  });

  function buildDuration(duration) {
    let minutes = Math.floor(duration / 60);
    let reste = duration % 60;
    let secondes = Math.floor(reste);
    secondes = String(secondes).padStart(2, "0");
    return minutes + ":" + secondes;
  }
});
