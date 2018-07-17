$(function(){
	//顶部作品部分鼠标移入自动显示效果
	$(".works").hover(function(){
		$(".second").stop().slideDown()
	},function(){
		$(".second").stop().slideUp()
	})

	//菜单栏固定效果
	var getH=$('.menu').offset().top;
	$(document).scroll(function(){
		var getT=$(this).scrollTop();
		
		if (getT-getH>=0) {
			$('.menu').addClass('active1');
		} else {
			$('.menu').removeClass('active1')
		}
	})


	//开始效果
	$('.now-right').hover(function(){
		$('.now-right-color').stop().animate({
			'width':'500px',
			'transition':'all 15s'
		})
		$('.now-right-font').css({
			'transform':'translateX(40px)',
			'transition':'all .5s'
		})
	},function(){
			$('.now-right-color').stop().animate({
			'width':'0',
			'transition':'all 15s'
		})
			$('.now-right-font').css({
			'transform':'translateX(-10px)',
			'transition':'all .5s'
		})
	})



	$(".bot").click(function(){
		window.location.href="html/xiangqing.html"
	})


	//轮播图
	$(function(){
		var timer
		var index=0;
		var imgLength=$(".item").length;
		function changeImg(){
			//检测右边界
			if(index>imgLength-1){
				index=0;
			}
			//检测左边界
			if(index<0){
				index=imgLength-1;
			}
			$(".item").eq(index).css({
				"opacity":"1",
				"transition":"all 2s"
			}).siblings().css({
				"opacity":"0",
				"transition":"all 2s"
			})
			if (index==imgLength-1) {
				$(".circle span").eq(0).addClass('current').siblings().removeClass('current');
			}
			//设置小圆点的样式
			$(".circle span").eq(index).addClass('current').siblings().removeClass('current');
			//给小圆点添加点击事件
			$(".circle span").click(function(){
				index=$(this).index();
				changeImg();
			})
		}
		function autoPlay(){
				timer=setInterval(function(){
				index++;
				changeImg();
			},2000)
		}
		$(".circle span").mouseenter(function(){
			index=$(this).index();
			clearInterval(timer);
			changeImg()
		})
		$(".circle span").mouseleave(function(){
			autoPlay()
		})
	})

	$(".imgs").click(function(){
		window.location.href="html/propaganda.html"
	})

	$('.nav li').click(function(){
			$(this).addClass('active').siblings().removeClass('active')
		});
	
})