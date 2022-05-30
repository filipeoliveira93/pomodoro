let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let play = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let progress = document.querySelector(".progress-circle");
let pulse = document.querySelector(".pulse");
let work = document.querySelector(".work");
let shortBreak = document.querySelector(".shortBreak");
let longBreak = document.querySelector(".longBreak");


work.addEventListener("click", () => {modefunc(1500, 'work')})
shortBreak.addEventListener("click", () => {modefunc(300, 'shortBreak')})
longBreak.addEventListener("click", () => {modefunc(900, 'longBreak')})

function showNumber(time) {
	minutes.innerHTML = Math.floor(time / 60);
	seconds.innerHTML = time % 60 > 9 ?  time % 60 : "0" + time % 60;																
}

// let color-mode = ''

let progressValue = 0;
let progressEndValue = 100;
var time = 10;
let add = progressEndValue/time;
var interval;


function modefunc(valuetime, mode) {
	time = valuetime;

	console.log(time);
	add = progressEndValue/time;
	if (interval) {
		resetFunc(mode);
	}
	play.addEventListener("click", playfunc);
	reset.addEventListener("click", () => {resetFunc(mode)});
	
	// pause.addEventListener("click", pausefunc());
	// reset.addEventListener("click", resetfunc());
	showNumber(time);
}
modefunc(1500, 'work');	
console.log(time);

function playfunc() {
	console.log(interval)
	interval = setInterval(function() {
		time--;
		showNumber(time);
		progressValue += add;
		pulse.style.animation = `pulse 1s ease infinite`;
		progress.style.background = `conic-gradient(
			#3e98ff ${progressValue * 3.6}deg,
			#ff3a54 ${progressValue * 3.6}deg)`;
		if (time <= 0) {									
			clearInterval(interval);
		}
	}, 1000);
	play.removeEventListener("click", playfunc);
	play.addEventListener("click", pausefunc);
	changeImg('.playPause', 'assets/pause.png');

}

function changeImg(object, caminhoimg) {
	// console.log(object);
	let img = document.querySelector(object);
	img.src = caminhoimg;
}

function pausefunc() {
	console.log("pause");
	clearInterval(interval);
	pulse.style.animation = `none`;
	play.removeEventListener("click", pausefunc);
	play.addEventListener("click", playfunc);
	changeImg('.playPause', 'assets/play.png');

}

function resetFunc(mode) {
	
	console.log(time);

	if (mode === "work") {
		time = 1500;
	}
	else if (mode === "shortBreak") {
		time = 300;
	}
	else if (mode === "longBreak") {
		time = 900;
	}
	console.log(time);
	
	progressValue = 0;
	showNumber(time);
	clearInterval(interval);
	pulse.style.animation = `none`;
	progress.style.background = `conic-gradient(
		#3e98ff ${progressValue * 3.6}deg,
		#ff3a54 ${progressValue * 3.6}deg)`;
	play.addEventListener("click", playfunc);
	changeImg('.playPause', 'assets/play.png');
}

