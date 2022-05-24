let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let play = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let currentTime = 1500;
let work = document.querySelector(".work");
let shortBreak = document.querySelector(".shortBreak");
let longBreak = document.querySelector(".longBreak");

play.addEventListener("click", playFunc);
reset.addEventListener("click", resetFunc);
work.addEventListener("click", workFunc);
// shortBreak.addEventListener("click", shortBreakFunc);
// longBreak.addEventListener("click", longBreakFunc);

minutes.innerHTML = Math.floor(currentTime / 60);
seconds.innerHTML = currentTime % 60 > 9 ? currentTime % 60 : "0" + (currentTime % 60);

var playconditon = true;

function ativPlay() {
	play.addEventListener("click", playFunc);
	play.removeEventListener("click", pauseFunc);
	play.innerHTML = "play";
}
function ativPause() {
	play.removeEventListener("click", playFunc);
	play.addEventListener("click", pauseFunc);
	play.innerHTML = "pause";
}

function numberverify() {
	minutes.innerHTML = Math.floor(currentTime / 60);
	seconds.innerHTML =
		currentTime % 60 > 9 ? currentTime % 60 : "0" + (currentTime % 60);
}

function timer() {
	console.log("play");
	if (currentTime > 0 && playconditon == true) {
		currentTime--;
		numberverify();
		setTimeout(timer, 1000);
	}
}

function pauseFunc() {
	console.log("pause ativado");
	playconditon = false;
	ativPlay();
}

function playFunc() {
	playconditon = true;
	timer();
	ativPause();
}

function resetFunc() {
	currentTime = 1500;
	numberverify();
	playconditon = false;
	ativPlay();
}

function workFunc() {
	work.classList.add("active");
	shortBreak.classList.remove("active");
	longBreak.classList.remove("active");
	currentTime = 1500;
    console.log("work");
	numberverify();
	playconditon = false;
	ativPlay();
}

function shortBreakFunc() {
    work.classList.remove("active");
    shortBreak.classList.add("active");
    longBreak.classList.remove("active");
    currentTime = 300;
    console.log("shortBreak");
    numberverify();
    playconditon = false;
    ativPlay();
}

function longBreakFunc() {
    work.classList.remove("active");
    shortBreak.classList.remove("active");
    longBreak.classList.add("active");
    currentTime = 900;
    console.log("longBreak");
    numberverify();
    playconditon = false;
    ativPlay();
}




