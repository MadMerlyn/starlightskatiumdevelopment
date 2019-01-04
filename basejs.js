const mq = window.matchMedia("(min-width: 768px)");
var slideIndex = 0
var logoWidth = 0

//Functions for mobile navigation
function navcontent () {
	if (mq.matches) {
		document.getElementById("nav-button").style.display = "none";
		document.getElementById("navclose").style.display = "none";
		document.getElementById("main-nav").style.width = "100%";	
	}else{
		document.getElementById("nav-button").style.display = "block";
		document.getElementById("navclose").style.display = "block";
		document.getElementById("main-nav").style.width = "0";
	}
}

function openNav() {
	if (!(mq.matches)) {
		document.getElementById("main-nav").style.width = "90vw";
	}
}

function closeNav() {
	if (!(mq.matches)) {
		document.getElementById("main-nav").style.width = "0";
	}
}

function carousel() {
	var i;
	var x = document.getElementsByClassName("ss-hero");
	for (i = 0; i < x.length; i++) {
		x[i].style.opacity = "0";
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1}
	x[slideIndex-1].style.opacity = "1";
	setTimeout(carousel, 4500); //Change image interval in ms
}

setTimeout(function() {
	document.getElementById('partyCTA').className = "spin";
}, 500);

carousel();
navcontent();
mq.addListener(navcontent);