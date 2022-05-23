let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let play = document.querySelector('.start');
let pause = document.querySelector('.pause');
let currentTime = 1500;

minutes.innerHTML = Math.floor(currentTime / 60);
seconds.innerHTML = currentTime % 60 > 9 ? currentTime % 60 : '0' + currentTime % 60;

play.addEventListener('click', playFunc);
pause.addEventListener('click', pauseFunc);

function playFunc() {
    setInterval(() => {
        currentTime--;
        minutes.innerHTML = Math.floor(currentTime / 60);
        seconds.innerHTML = currentTime % 60 > 9 ? currentTime % 60 : '0' + currentTime % 60;
    }, 1000);
}

function pauseFunc() {
    clearInterval(playFunc);
}