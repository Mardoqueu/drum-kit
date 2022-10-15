
var numberOfDrumButtons =  document.querySelectorAll(".drum").length;
var audio = new Audio('tom-1.mp3');


for(var i = 0; i < numberOfDrumButtons; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        buttons.forEach(button => {
            button.addEventListener("click", () => {
              audio.play();
            });
          });
    
        //What to do when click detected.
    });
}



