//Find the things we need from the webpage
const startButton = document.querySelector("#start-button");
const game = document.querySelector("#game");

//Start the game when button is clicked 
startButton.addEventListener("click", function() {

  //Change the game's state
  game.classList.remove("not-started");
  game.classList.add("playing");

  //Hide the start button
  startButton.remove();
});