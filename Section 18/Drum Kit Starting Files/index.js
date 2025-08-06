document.querySelector(".set").addEventListener("click", handleClick)

function handleClick(event) {
    if (event.target.tagName === "BUTTON") {
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    }
    
}

