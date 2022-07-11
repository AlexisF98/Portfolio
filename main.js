$(document).ready(function(){
	var altura = $('.nav-bar').offset().top;      /*guardamos altura entre borde superior y barra de navegacion*/
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){     /*aca decimos que si el scroll es mayor que altura, agregamos la clase menu-fixed, y en caso contrario, removemos clase menu-fixed*/
			$('.nav-bar').addClass('menu-fixed');
		} else {
			$('.nav-bar').removeClass('menu-fixed');
		}
	}); 

});