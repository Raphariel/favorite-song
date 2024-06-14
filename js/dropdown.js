function openDescription(
  mediaPath,
  descriptionId,
  otherDescriptionId,
  troubleSpotId,
  timingId,
  desktopId
) {
  if (mediaPath.endsWith(".png")) {
    showImage(mediaPath);
  } else {
    changeVideo(mediaPath);
  }
  openToggleDescription(
    descriptionId,
    otherDescriptionId,
    troubleSpotId,
    timingId,
    desktopId
  );
}

function showImage(imagePath) {
  var videoPlayer = document.getElementById("videoPlayer");
  var imageElement = document.getElementById("imageElement");
  videoPlayer.classList.add("hidden");
  imageElement.src = imagePath;
  imageElement.classList.remove("hidden");
}

function changeVideo(videoPath) {
  var videoPlayer = document.getElementById("videoPlayer");
  var videoSource = document.getElementById("videoSource");
  var imageElement = document.getElementById("imageElement");
  imageElement.classList.add("hidden");
  videoSource.src = videoPath;
  videoPlayer.load();
  videoPlayer.classList.remove("hidden");
}

function openToggleDescription(
  descriptionId,
  otherDescriptionId,
  troubleSpotId,
  timingId,
  desktopId
) {
  var descriptionElement = document.getElementById(descriptionId);
  var otherDescriptionElement = document.getElementById(otherDescriptionId);
  var troubleSpotElement = document.getElementById(troubleSpotId);
  var timingElement = document.getElementById(timingId);
  var desktopElement = document.getElementById(desktopId);

  descriptionElement.classList.toggle("hidden");
  otherDescriptionElement.classList.add("hidden");
  troubleSpotElement.classList.add("hidden");
  timingElement.classList.add("hidden");
  desktopElement.classList.add("hidden");
}