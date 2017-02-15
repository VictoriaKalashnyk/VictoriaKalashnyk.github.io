'use strict';

$(function (){
	
	/* ----- SEARCH ----- */
	$(".menu__icon").on("click", function() {
		$(this).toggleClass('active');
	});
	
	
	/* ----- ACCORDION ----- */
	$(".panel").on("click", function() {
		if ($(this).hasClass('active')) {
		    $(this).removeClass("active");
		    $(".panel i.accordion__pointer").removeClass("ion-chevron-up").addClass("ion-chevron-down");
		} else {
		    $(".panel i.accordion__pointer").removeClass("ion-chevron-up").addClass("ion-chevron-down");
		    $(this).find("i.accordion__pointer").removeClass("ion-chevron-down").addClass("ion-chevron-up");
		    $(".panel").removeClass("active");
		    $(this).addClass("active");
		}
	});
	$("i.accordion__pointer").bind('click',function(){return false;});
	$(".panel-body").bind('click',function(){return false;});
    
	// Custom Scrolling 
	$(".customScrollbar").mCustomScrollbar({
	    axis:"xy",
	    setHeight: 180,
	        scrollButtons:{
	            enable: true,
	            scrollAmount: 12
	        }, 
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
	
	
	/* ----- A FIXED CAP ----- */
/* 	$(".header").removeClass("default");
	$(window).scroll(function(){
	    if ($(this).scrollTop() > 800) {
			$(".header").addClass("default").fadeIn('fast');
		} else {
			$(".header").removeClass("default").fadeIn('fast');
		};
	}); */
	
	
	/* ----- SMOOTH SCROLLING ----- */
	var $page = $('html, body');
	$('.header a[href*="#"], .banner a[href*="#"]').click(function() {
	    $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});
	
	
	/* ----- GOOGLE MAPS ----- */
    google.maps.event.addDomListener(window, 'load', initialize);
	function initialize() {
		var mapOptions = {
			zoom: 12,
			center: new google.maps.LatLng(47.839040, 35.101729),
			scrollwheel: false
		};

		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);

		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(47.839040, 35.101729),
		    map: map,
			icon: 'image/map.png',
		    title: 'Find us here!'
		});
	}
	
	$("#map").css("height",$("#map").parent().parent().height() + "px");
	
	/* $('#myModal').on('shown.bs.modal', function () {
        initialize();
    }); */

	  

});



















