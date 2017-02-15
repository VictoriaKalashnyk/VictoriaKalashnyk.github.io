'use strict';
	
var slides = document.getElementsByClassName('slider__block');
var currentSlide = 0;
var next = document.getElementsByClassName('slider__nav_next');
var prev = document.getElementsByClassName('slider__nav_prev');
var dots = document.getElementsByClassName('dot__link');
var slideInterval = setInterval(nextSlide, 5000);

function timeSlide() {
    var time = document.getElementById('time');
    var interval = document.getElementById('result');
    interval.innerHTML = time.value; 
    interval = time.value;
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
}

function nextSlide() {
	goToSlide(currentSlide + 1);
}

function prevSlide() {
	goToSlide(currentSlide - 1);
}

function dotSlide(n) {
	goToSlide(n);
}

function goToSlide(n) {
	slides[currentSlide].className = 'slider__block';
	dots[currentSlide].className = 'dot__link';
	currentSlide = (n + slides.length)%slides.length;
	slides[currentSlide].className = 'slider__block showing';
	dots[currentSlide].className = 'dot__link active';	
}








$(function (){
	/* TASK */
	$('.task__link').click(function(){
		$('.task__content').toggleClass('visible');
	});
	
	/* appearance */
	$(".appearance").click(function(e) {
		e.preventDefault();
		$(".appearance").removeClass('selected');
		$(this).addClass('selected');
		var title = $(this).attr('title');
		$(".slider").removeClass().addClass('slider');
		$(".slider").addClass(title);
	});
	
	/* $( "#slider" ).slider({
        value: 5000,
        min: 1000,
        max: 10000,
        step: 1000,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value + " ms" );
        }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) + " ms" ); */

});
	   
