let video;
let display;
let p = document.getElementById("play");
let ps = document.getElementById("pause");
let s = document.getElementById("stop");

window.onload = function() {
	video = document.getElementById("videoPlayer");
};

p.addEventListener("click", () => {
    video.play();
})

ps.addEventListener("click", () => {
    video.pause();
})

s.addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;
})


let previous_button = document.getElementById("previous_button");
let next_button = document.getElementById("next_button");

previous_button.addEventListener("click", () => {
    video.currentTime -= 10;
});

next_button.addEventListener("click", () => {
    video.currentTime += 10;
});

