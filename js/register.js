window.onload=function(){
	var oUser=document.getElementById("user")
	var oP=document.getElementById("phone");
	var oIput1=document.getElementById("input1");
	var oT=document.querySelector(".tip")
	var oBtn=document.querySelector(".btn")
	oUser.onclick=function(){
		oP.style.transform="translateY(-20px)";
		oP.style.fontSize="12px";
		oP.style.transition="all 1s";
		oP.style.color="#cf680a";
		oIput1.focus();
		// oIput1.style.borderBottom="rotateY(90deg)"
		oIput1.style.borderBottom="2px solid #cf680a"
		// oIput1.style.transformOrigin="(100px 100px)"
		// oIput1.style.transition="all 1s";	
	}
	var oUser1=document.getElementById("user1")
	var oP1=document.getElementById("phone1");
	var oIput2=document.getElementById("input2");
	oUser1.onclick=function(){
		oP1.style.transform="translateY(-20px)";
		oP1.style.fontSize="12px";
		oP1.style.transition="all 1s";
		oP1.style.color="#cf680a";
		oIput2.focus();
		oIput2.style.borderBottom="2px solid #cf680a";	
	}
	oBtn.onclick=function(){
		var val=oIput1.value;
		var reg=/(^1(3|5|8|4|6|7|8)\d{9}$)|(^[A-Za-z0-9_]{6,12}@(sina|qq|163).(cn|com$))/g;
		var flag=reg.test(val);
		if (flag) {
			oT.style.display="none";
		}else{
			oT.style.display="block";
			oIput1.value="";
		}
	}
}
$(function(){
	$(".btn").click(function(){
		var nPhone = $(".input1").val();
		var nPsd  = $(".input2").val();
		// console.log(nPsd)
		$.ajax({
			url:`https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=${nPhone}&passwd=${nPsd}`,
			type:"post",
			success:function(res){
				var code = res.code
				console.log(res)
				if( code == 200 ){
					$(".tips").html( res.msg );
					$(".tips").css({
						"color":"green",
						"fontSize":"24px"
					});
					window.location.href="http://127.0.0.1/workall/yiwang/html/login.html";
				}else if( code == 202 ){
					$(".tips").html( res.msg );
					$(".tips").css({
						"color":"red",
						"fontSize":"24px"
					});
				}
			},
			error:function(err){
				console.log(err)
			}

		})
	})
})