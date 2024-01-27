//your JS code here. If required.
const Buttons = document.querySelectorAll(".btn");
const StopBtn = document.querySelector(".stop");

Buttons.forEach(x =>{
	x.addEventListener("click",() =>{
		const Audio = x.querySelector("audio");
		Audio.play();
	});
});

StopBtn.addEventListener("click",() =>{
	const Audios = document.querySelectorAll("audio");
	Audios.forEach(y,() =>{
		y.pause();
	});
});