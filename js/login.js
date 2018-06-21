$(function(){
	var height = $(document).height();
	
	$(window).resize(function(){
		
		if($(document).height() < height){
			$("body").css({
				background:"#008fff"
			})
			$('.footer_sure').css({
				bottom:'-500px'
			})
		}else{
			$("body").css({
				
				background:"url(img/login.png) center bottom no-repeat #008fff "
				
			})
			 $(".footer_sure").css({
			  	bottom: '0.266666rem'
			 });
		}
	})
})
