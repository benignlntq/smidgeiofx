/*
Author       : themes_mountain.
Template Name: TheOne - One Page Parallax Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/		
		
		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});		
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/			

		$('.bxslider').bxSlider({
			mode: 'vertical',
			speed: 2500,
			auto: true,
			controls: false,
			pager: false,
			minSlides: 1,
			maxSlides: 1
		});
		
		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */
		
		/*START TEAM JS*/	
		$("#team-slider").owlCarousel({
		   items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[980,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:true,
			navigation:false,
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TEAM JS*/
		
		/*START MIXITUP JS*/
			$('.work_all_item').mixItUp();
		/*END MIXITUP JS*/	

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/

		/*START TESTIMONIAL JS*/
			$("#testimonial-slider").owlCarousel({
				items: 1,
				autoPlay: false,
				navigation: false,
				itemsDesktop: [1199, 1],
				itemsDesktopSmall: [980, 1],
				itemsTablet: [768, 1],
				itemsTabletSmall: false,
				itemsMobile: [479, 1],
				pagination: true,
				autoHeight: true,
			});
		/*END TESTIMONIAL JS*/
		
		
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 5000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/	
				
	}); 	

	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */		
		
	/*START WOW ANIMATION JS*/
	 /* new WOW().init();	*/
	/*END WOW ANIMATION JS*/		
				
})(jQuery);


  

