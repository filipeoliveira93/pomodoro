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
seconds.innerHTML =
	currentTime % 60 > 9 ? currentTime % 60 : "0" + (currentTime % 60);

var playconditon = true;

function changeImg(object, caminhoimg) {
	// console.log(object);
	let img = document.querySelector(object);
	img.src = caminhoimg;
}

function activate(domobject, functionadd, functionremove, string) {
	domobject.addEventListener("click", functionadd);
	domobject.removeEventListener("click", functionremove);
	// domobject.innerHTML = string;
	console.log(string);
}

let progressValue = 0;
let progressEndValue = 100;
let add = progressEndValue/currentTime;


function numberverify() {
	minutes.innerHTML = Math.floor(currentTime / 60);
	seconds.innerHTML =
		currentTime % 60 > 9 ? currentTime % 60 : "0" + (currentTime % 60);
}

function timer() {
	console.log("play");
	if (currentTime > 0 && playconditon == true) {
		currentTime--;
		progressValue += add;
		numberverify();
		progressbar.style.background = `conic-gradient(
			#3eff68 ${progressValue * 3.6}deg,
			#ff3a54 ${progressValue * 3.6}deg)`;
			
		setTimeout(timer, 1000);
	}
}

function playFunc() {
	playconditon = true;
	timer();
	activate(play, pauseFunc, playFunc, "pause");
	changeImg(".playPause", "assets/pause.png");
}

function pauseFunc() {
	console.log("pause ativado");
	playconditon = false;
	activate(play, playFunc, pauseFunc, "pause");
	changeImg(".playPause", "assets/play.png");
}

function resetFunc() {
	currentTime = 1500;
	numberverify();
	playconditon = false;
	activate(play, playFunc, pauseFunc, "play");
}

function classrename(domactive, domremove1, domremove2, classname) {
	domactive.classList.add(classname);
	domremove1.classList.remove(classname);
	domremove2.classList.remove(classname);
}

function workFunc() {
	classrename(work, shortBreak, longBreak, "active");
	currentTime = 1500;
	console.log("work");
	numberverify();
	playconditon = false;
	activate(play, playFunc, pauseFunc, "play");
}
function shortBreakFunc() {
	classrename(shortBreak, longBreak, work, "active");
	activate(play, playFunc, pauseFunc, "play");
	currentTime = 300;
	console.log("shortBreak");
	numberverify();
	playconditon = false;
}

function longBreakFunc() {
	classrename(longBreak, shortBreak, work, "active");
	activate(play, playFunc, pauseFunc, "play");
	currentTime = 900;
	console.log("longBreak");
	numberverify();
	playconditon = false;
}

let progressbar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");





// let progress= setInterval( () =>
// {
//     progressValue ++;
//     // valueContainer.textContent = `${progressValue}`;
//     progressbar.style.background = `conic-gradient(
//         #3eff68 ${progressValue * 3.6}deg,
//         #ff3a54 ${progressValue * 3.6}deg)`;
//     if(progressValue == progressEndValue)
//     {
// 		progressbar.style.background = '#ff3a54'
//         clearInterval(progress)
//     }

// }, speed);

function acervo(nome) {
	let colecao = {
		nome: nome,
		numerodelivros: (numerodelivros = 0),
		livros: [],
		addLivro: function (livro) {
			this.livros.push(livro);
		},
		listarlivros: function () {
			for (let i = 0; i < this.livros.length; i++) {
				console.log(this.livros[i]);
				numerodelivros++;
			}
		},
	};
	return colecao;
}


// let biblioteca = {
// 	nome : "Biblioteca",
// 	livros : [],
// 	numerodelivros: 0,
// 	addLivro: function(livro) {
// 		this.livros.push(livro);
// 		this.numerodelivros++;
// 	},
// 	listarlivros: function() {
// 		for( let i of this.livros) {
// 			console.log(i);
// 		}
// 	}
// }

// biblioteca.addLivro("O Senhor dos Anéis");
// biblioteca.addLivro("O Hobbit");
// biblioteca.addLivro("Harry Potter e o Prizioneiro de Askaban");

// console.log(biblioteca.listarlivros());
// console.log(biblioteca.numerodelivros);
