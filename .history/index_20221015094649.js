
var numberOfDrumButtons =  document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){
    
    document.querySelectorAll(".tom-1.mp3")[i].addEventListener("click", function(){

        var audio = new Audio('tom-1.mp3');
        audio.play();
    });
}



