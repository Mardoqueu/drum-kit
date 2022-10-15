
var numberOfDrumButtons =  document.querySelectorAll(".drum").length;


for(var i = 0; i < numberOfDrumButtons; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();  
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();  
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();  
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();  
                break;
            default:
                break;
        }
    });
}


  

