$(function() {

			$('#musician-1 .member-description').hover(function() {
					$('#musician-1 .mem-socials').css('display', 'block');
			}, function() {
					$('#musician-1 .mem-socials').css('display', 'none');
			});

			$('#musician-2 .member-description').hover(function() {
					$('#musician-2 .mem-socials').css('display', 'block');
			}, function() {
					$('#musician-2 .mem-socials').css('display', 'none');
			});

			$('#musician-3 .member-description').hover(function() {
					$('#musician-3 .mem-socials').css('display', 'block');
			}, function() {
					$('#musician-3 .mem-socials').css('display', 'none');
			});			

			$('.members-carousel').owlCarousel({
					loop: true, 
					nav: true,
					navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					items: 1,
			});

			$('.concerts-carousel').owlCarousel({
					loop: true,
					nav: true,
					navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					items: 1,					
			});
			


			//preloader is here
			$('.preloader').fadeOut();


});
