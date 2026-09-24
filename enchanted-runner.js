const startButton = document.querySelector("#start-button");
const game = document.querySelector("#game");
const player = document.querySelector("#player");

startButton.addEventListener("click", function() {

game.classList.remove("not-started");
game.classList.add("playing");

startButton.remove();
});

document.addEventListener("keydown", function(event) {

if (event.code === "Space") {

player.style.bottom = "150px";

setTimeout(function() {
player.style.bottom = "55px";
}, 500);

}

});