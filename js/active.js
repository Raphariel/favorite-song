function setActiveButton(buttonId) {
  // Remove active class from all buttons
  const allButtons = document.querySelectorAll(".active-button");
  allButtons.forEach((button) => {
    button.classList.remove("active-button");
  });

  // Add active class to the clicked button
  const clickedButton = document.getElementById(buttonId);
  clickedButton.classList.add("active-button");
}

//  function setActiveButton(buttonId) {
//    var buttons = document.querySelectorAll(".active-button");
//    buttons.forEach((button) => button.classList.remove("active-button"));
//    var activeButton = document.getElementById(buttonId);
//    activeButton.classList.add("active-button");
//  }
