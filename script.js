function keyUp(e) {
    if (e.key === 'F12') {
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
    if (i == 1) {
        playSong();
    } else {
        pauseSong();
    }
});