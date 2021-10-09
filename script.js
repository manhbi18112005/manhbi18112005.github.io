function keyUp(e) {

    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.key === 'F12') {
        // call your function to do the thing
        alert("BRUH, don't try to steal our website.")
    }
}
// register the handler 
document.addEventListener('keyup', keyUp, false);
var i = 1;
const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');
function loadSong() {
    audio.src = `bgm.mp3`;
}

function playSong() {
    audio.play();
    i--;
    console.log("Played Music!")
}

function pauseSong() {
    audio.pause();
    i++;
    console.log("Paused Music!")
}

playBtn.addEventListener('click', () => {
    if (i==1) {
        playSong();
    } else {
        pauseSong();
    }
});