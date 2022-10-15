
var numberOfDrumButtons =  document.querySelectorAll(".drum").length;
var audio = new Audio('tom-1.mp3');


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});



