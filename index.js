// document.querySelectorAll(".drum").forEach(function(button){
//     button.addEventListener("click", function() {
//         alert("I got clicked!");

// // })

// })



var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
    
}

document.addEventListener("keypress", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});



function playSound(key) {
        

    switch (key) {

        case "w":
            var music = new Audio("./sounds/tom-1.mp3");
             music.play();
        break;

        case "a":
            var music = new Audio("./sounds/tom-2.mp3");
             music.play();
        break;

        case "s":
            var music = new Audio("./sounds/tom-3.mp3");
             music.play();
        break;

        case "d":
            var music = new Audio("./sounds/tom-4.mp3");
             music.play();
        break;

        case "j":
            var music = new Audio("./sounds/snare.mp3");
             music.play();
        break;

        case "k":
            var music = new Audio("./sounds/crash.mp3");
             music.play();
        break;

        case "l":
            var music = new Audio("./sounds/kick-bass.mp3");
             music.play();
        break;

        default:
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    
}
