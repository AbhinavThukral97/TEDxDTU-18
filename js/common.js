$(document).ready(function(){
	console.log("Running");
	var menu = 0;
	$('.hamburger').click(function(){
		console.log("Menu On");
		if(menu==0){
			$('.dark-screen').css('display','block');
			$('nav').animate({right:'0px'},500);
			//$('body').animate({right:'250px'},500);
			$('.dark-screen').animate({opacity:'1'},500);
			menu = 1;
		}
	});
	$('.dark-screen').click(function(){
		console.log("Menu Off");
		if(menu==1){
			$('nav').animate({right:'-250px'},500);
			//$('body').animate({right:'0px'},500);
			$('.dark-screen').animate({opacity:'0'},500);
			setTimeout(function(){
				$('.dark-screen').css('display','none');
			},500);
			menu = 0;
		}
	});
});