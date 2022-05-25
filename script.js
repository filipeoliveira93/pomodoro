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
shortBreak.addEventListener("click", shortBreakFunc);
longBreak.addEventListener("click", longBreakFunc);

minutes.innerHTML = Math.floor(currentTime / 60);
seconds.innerHTML = currentTime % 60 > 9 ? currentTime % 60 : "0" + (currentTime % 60);

var playconditon = true;

function activate(domobject, functionadd, functionremove, string) {
	domobject.addEventListener("click", functionadd);
	domobject.removeEventListener("click", functionremove);
	domobject.innerHTML = string;
	console.log(string);
}

function numberverify() {
	minutes.innerHTML = Math.floor(currentTime / 60);
	seconds.innerHTML = currentTime % 60 > 9 ? currentTime % 60 : "0" + (currentTime % 60);
}

function timer() {
	console.log("play");
	if (currentTime > 0 && playconditon == true) {
		currentTime--;
		numberverify();
		setTimeout(timer, 1000);
	}
}

function playFunc() {
	playconditon = true;
	timer();
	activate(play, pauseFunc, playFunc, "pause");
}

function pauseFunc() {
	console.log("pause ativado");
	playconditon = false;
	activate(play, playFunc, pauseFunc, "pause");
}

function resetFunc() {
	currentTime = 1500;
	numberverify();
	playconditon = false
	activate(play, playFunc, pauseFunc, 'play');
}

function workFunc() {
	classrename(work, shortBreak, longBreak, "active");
	currentTime = 1500;
	console.log("work");
	numberverify();
	playconditon = false;
	activate(play, playFunc, pauseFunc,"play");
}

function classrename(domactive, domremove1, domremove2, classname) {
	domactive.classList.add(classname);
	domremove1.classList.remove(classname);
	domremove2.classList.remove(classname);
}

function shortBreakFunc() {
	classrename(shortBreak, longBreak, work, "active");
	activate(play, playFunc, pauseFunc,"play");
	currentTime = 300;
	console.log("shortBreak");
	numberverify();
	playconditon = false;
}

function longBreakFunc() {
	classrename(longBreak, shortBreak, work, "active");
	activate(play, playFunc, pauseFunc,"play");
	currentTime = 900;
	console.log("longBreak");
	numberverify();
	playconditon = false;
}

