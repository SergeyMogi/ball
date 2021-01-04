startbtn.addEventListener("click", function(){
	ball.style.animation = "bounce 0.9s infinite";
	
});
stopbtn.addEventListener("click", function(){
	ball.style.animation = "";

});

greenball.addEventListener("click", function(){
	ball.style.background = "#009933";

});

redball.addEventListener("click", function(){
	ball.style.background = "#ff0000";

});

blueball.addEventListener("click", function(){
	ball.style.background = "#0000ff";

});