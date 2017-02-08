'use strict';

/* ----- SLIDER ----- */
/* var slideIndex = 1;
showSlides(slideIndex); 

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("title__slide");
	var dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active"; */
	
	/* setInterval(function() { 
		currentSlide(n);
	}, 5000);  */

	
/* } */










$(function (){
    
	/* ----- ACCORDION ----- */
	$('.panel').click(function (){
	    $(this).toggleClass('active');
	});
	
	/* ----- TIMER ----- */
	$(window).bind('scroll.once', function(){ 
	   timer(); 
	});
	
	function timer() {
		
	    $.Tween.propHooks.number = {
			get: function ( tween ){
				var num = tween.elem.innerHTML.replace(/^[^\d-]+/, '');
				return  parseFloat(num) || 0;
			},
			set: function( tween ) {
				var opts = tween.options;
				tween.elem.innerHTML = (opts.prefix || '')
				+ tween.now.toFixed(opts.fixed || 0)
				+ (opts.postfix || '');
			}
		};
		
		$('#projects').animate({ number: 42 }, 'slow');
		$('#client').delay(500).animate({ number: 123 }, 'slow');
		$('#winner').delay(1000).animate({ number: 15 }, 'slow');
		$('#cup').delay(1500).animate({ number: 99 }, 'slow');
		$('#members').delay(2000).animate({ number: 24 }, 'slow');
	   $(window).unbind('scroll.once')
	};
	
	/* ----- SLIDER ----- */
    $(".carousel").carousel({
        interval: 5000
    })
	
	/* ----- A FIXED CAP ----- */
	$(".header").removeClass("default");
	$(window).scroll(function(){
	    if ($(this).scrollTop() > 900) {
			$(".header").addClass("default").fadeIn('fast');
		} else {
			$(".header").removeClass("default").fadeIn('fast');
		};
	});
	
	/* ----- SMOOTH SCROLLING ----- */
	var $page = $('html, body');
	$('.header a[href*="#"], .banner a[href*="#"]').click(function() {
	    $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});

});



















