
   function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops the function from running all together
    
    audio.currentTime = 0; //rewinds to start so you can tap multiple times
    audio.play();
    key.classList.add("playing");

    }

function removeTransition (e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown",playSound);