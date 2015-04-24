$(document).ready(function(){
	$(".circulo-externo").hover(function(){
		$(".circle-text").toggleClass("hidden");
		$(".circulo-hover").toggleClass("hidden");
	});
});

// navbar

$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	if (prueba > 499) {
		$(".navbar").addClass("scroll");
		$(".navbar-brand").removeClass("hidden");

	}
		else if (prueba < 499) {
		$(".navbar").removeClass("scroll");
		$(".navbar-brand").addClass("hidden");

	}
});