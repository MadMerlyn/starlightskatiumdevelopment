//Index for carousel loop, need a better method
var slideIndex = 0
//Set initial opacity to 0 to make slides appear in order
$('.ss-hero').css("opacity", "0");
//Mobile nav button open drawer
$('#nav-button').click(function() {
	$('#main-nav').animate({width: '90vw'}, 200, "linear")
});
//drawer close button
$('#navclose').click(function() {
	$('#main-nav').animate({width: '0'}, 200, "linear")
});
//Function to handle switch between mobile and desktop
(function($) {
	function mediaSize() {
		if (window.matchMedia('(min-width: 768px)').matches) {
			$("#nav-button").hide();
			$("#navclose").hide();
			$("#main-nav").width('auto');
		}else{
			$("#nav-button").show();
			$("#navclose").show();
			$("#main-nav").width(0);
		}
	};
	mediaSize();
	window.addEventListener('resize', mediaSize, false);
})(jQuery);
//Main carousel function, infinite loop
function carousel() {
	var i, x = $('.ss-hero');
	for (i = 0; i < x.length; i++) {
		x[i].style.opacity = "0";
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1}
	x[slideIndex-1].style.opacity = "1";
	setTimeout(carousel, 4500); //Change image interval in ms
}
carousel();
//Spin in the call to action button
$('#partyCTA').addClass('spin no-mobile');