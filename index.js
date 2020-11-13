for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick); //no '()' for call back function 'handleClick' becausefunction should be called only when button is clicked.
}

//   Detect button click on webpage

function handleClick(){
     
    playSound(this.innerHTML);
    addAnimation(this.innerHTML);
    
}

//   Detect keypress 

document.addEventListener("keypress", function(event) {
	
    playSound(event.key);
    addAnimation(event.key);

});

// Function to play sound

function playSound(key) {

	switch(key){
        case 'w': var elementAudio = 'sounds/tom-1.mp3';
                  break;
        case 'a': var elementAudio = 'sounds/tom-2.mp3';
                  break;
        case 's': var elementAudio = 'sounds/tom-3.mp3';
                  break;
        case 'd': var elementAudio = 'sounds/tom-4.mp3';
                  break;
        case 'j': var elementAudio = 'sounds/kick-bass.mp3';
                  break;
        case 'k': var elementAudio = 'sounds/snare.mp3';
                  break;
        case 'l': var elementAudio = 'sounds/crash.mp3';
                  break;
        default : exit(0);
    }
    var audioElement = new Audio(elementAudio);
    audioElement.play();

}


// ad animation to the buttons which are clicked

function addAnimation(buttonClicked) {

	document.querySelector("."+buttonClicked).add("pressed");

	setTimeout(function (){
		document.querySelector("."+buttonClicked).remove("pressed");
	}, 100);
}