// Keep track of the currently playing audio
var currentlyPlayingAudio = null;

// Function to stop the currently playing audio
function stopCurrentlyPlayingAudio() {
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
    }
}

// Event listeners for button clicks
var buttons = document.querySelectorAll(".drum");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Stop the currently playing audio (if any)
        stopCurrentlyPlayingAudio();

        var buttonKey = this.innerHTML;
        makeSound(buttonKey);
        buttonAnimation(buttonKey);
    });
});

// Event listener for key presses
document.addEventListener("keydown", function(event) {
    // Stop the currently playing audio (if any)
    stopCurrentlyPlayingAudio();

    var key = event.key.toLowerCase(); // Convert to lowercase for case-insensitivity
    makeSound(key);
    buttonAnimation(key);
});

// Function to play sound based on key/button clicked
function makeSound(key) {
    switch (key) {
        case "w":
            currentlyPlayingAudio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            currentlyPlayingAudio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            currentlyPlayingAudio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            currentlyPlayingAudio = new Audio("./sounds/crash.mp3");
            break;
        case "j":
            currentlyPlayingAudio = new Audio("./sounds/pedro.mp3");
            break;
        case "k":
            currentlyPlayingAudio = new Audio("./sounds/oye.mp3");
            break;
        case "l":
            currentlyPlayingAudio = new Audio("./sounds/PUNEET.mp3");
            break;
        default:
            // If key doesn't match, do nothing
            return;
    }
    currentlyPlayingAudio.play();
}

// Function to handle button animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
