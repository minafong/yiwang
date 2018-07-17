window.onload=function(){
	//获取左边的元素
	var oLeft=document.querySelector(".left");
	var oMc=document.querySelector(".mc");
	var oGray=document.querySelector(".gray");
	//获取右边的元素
	var oRight=document.querySelector(".right");
	var oBigImg=document.querySelector(".bigImg");
	//蒙层上添加鼠标滑动事件
	oMc.onmousemove=function(evt){
		//做事件对象的兼容
		var e=evt||window.event;
		//定义变量存储小灰框的X坐标
		var grayX=e.offsetX-oGray.offsetWidth/2;
		var grayY=e.offsetY-oGray.offsetHeight/2;
		//检测上下边界
		if (grayY<0) {
			grayY=0;
		}else if (grayY>oMc.offsetHeight-oGray.offsetHeight) {
			grayY=oMc.offsetHeight-oGray.offsetHeight
		}
		//检测左右边界
		if (grayX<0) {
			grayX=0;
		}else if (grayX>oMc.offsetWidth-oGray.offsetWidth) {
			grayX=oMc.offsetWidth-oGray.offsetWidth
		}
		//设置小灰框的位置
		oGray.style.top=grayY+"px";
		oGray.style.left=grayX+"px";
		//求运动比例
		blx=grayX/(oMc.offsetWidth-oGray.offsetWidth);
		bly=grayY/(oMc.offsetHeight-oGray.offsetHeight);
		//设置大图运动实时坐标
		oBigImg.style.left=-blx*(oBigImg.offsetWidth-oRight.offsetWidth)+"px";
		oBigImg.style.top=-bly*(oBigImg.offsetHeight-oRight.offsetHeight)+"px";
	}
}