$(function(){
	$(".frame-top").click(function(){
		$(".frame").stop().slideToggle();
		// $(".frame-two").stop().slideToggle();
		$(".tip-right1").stop().slideToggle();
	})
	$(".tip").click(function(){
		$(".tips").stop().slideToggle();
		$(".tip-right1").stop().slideToggle();
	})
	$.ajax({
		url:"http://127.0.0.1/workall/yiwang/json/lists.json",
		type:"get",
		success:function(res){
			var oC=res.sorts
			var html="";
			for (var i = 0; i < oC.length; i++) {
				var dl=`<div class="item"><div class="imgbox"><img src="${oC[i].img}" alt=""></div><p class="name">${oC[i].name}</p><p class="mate">${oC[i].mate}</p><p class="Price">${oC[i].Price}</p></div>`;
				html+=dl;
			}
			$(".wrap").html(html)
		},
		error:function(err){
			console.log(err)
		}
	})
	$(".bigimg").click(function(){
		window.location.href="../html/inform.html"
	})
})