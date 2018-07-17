$(function(){
	$.ajax({
		url:"http://127.0.0.1/workall/yiwang/json/propaganda.json",
		type:"get",
		success:function(res){
			var oC=res.sorts
			var html="";
			for (var i = 0; i < oC.length; i++) {
				var dl=`<div class="items"><div class="imgbox"><img src="${oC[i].img}" alt=""></div><p style="margin-top: 15px;">${oC[i].Name}</p><p>${oC[i].Year}</p><p>${oC[i].Data}</p><h5 class="Price">${oC[i].Price}</h5></div>`;
				html+=dl;
			}
			$(".wrap").html(html)
		},
		error:function(err){
			// console.log(err)
		}
	})
	$(".works").hover(function(){
		$(".second").stop().slideDown()
	},function(){
		$(".second").stop().slideUp()
	})



	// var getH=$('.menu').offset().top;
	$(document).scroll(function(){
		var getT=$(this).scrollTop();
		// console.log(getT)
		if (getT>=80) {
			$('.menu').addClass('active');
		} else {
			$('.menu').removeClass('active');
		}
	})
	$('.btn').click(function(){
		$('html,body').animate({scrollTop:0});
		return false
	})
})