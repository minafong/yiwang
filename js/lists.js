$(function(){
	$(".works").hover(function(){
		$(".second").stop().slideDown()
	},function(){
		$(".second").stop().slideUp()
	})

	
	var getH=$('.menu').offset().top;
	$(document).scroll(function(){
		var getT=$(this).scrollTop();
		
		if (getT-getH>=0) {
			$('.menu').addClass('active');
		} else {
			$('.menu').removeClass('active')
		}
	})
})