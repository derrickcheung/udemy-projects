document.querySelector(".set").addEventListener("click", handleClick)

function handleClick(event) {
    if (event.target.tagName === "BUTTON") {
        alert("I got clicked");
    }
    
}

