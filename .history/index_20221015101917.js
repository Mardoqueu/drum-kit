
var numberOfDrumButtons =  document.querySelectorAll(".drum").length;


for(var i = 0; i < numberOfDrumButtons; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "w":
                
                break;
        
            default:
                break;
        }
    });
}


  

