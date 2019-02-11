$(document).ready(function(){
	console.log("Login Running");
	var tab = 0;
	$('.register-form').css('display','none');
	
	$('.login-tab').click(function(){
		if(tab==1){
			tab = 0;
			$('.login-tab').removeClass('disabled-tab');
			$('.register-tab').addClass('disabled-tab');
			$('.login-form').css('display','block');
			$('.register-form').css('display','none');
		}
	});

	$('.register-tab').click(function(){
		if(tab==0){
			tab = 1;
			$('.login-tab').addClass('disabled-tab');
			$('.register-tab').removeClass('disabled-tab');
			$('.login-form').css('display','none');
			$('.register-form').css('display','block');
		}
	});
});