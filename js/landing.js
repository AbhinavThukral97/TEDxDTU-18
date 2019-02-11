$(document).ready(function(){
	var countDownDate = new Date("Apr 20, 2018 9:00:00").getTime();
	var countDown = setInterval(function(){
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    	if(distance>0){
    		$('.days .number').html(days);
    		$('.hours .number').html(hours);
    		$('.mins .number').html(minutes);
    		$('.secs .number').html(seconds);
    	}	
	},1000);

    $('.down-arrow').click(function(){
        x = $('.about').offset().top;
        console.log(x);
        $('html,body').animate({scrollTop: x},500);
    });

    $('.more').click(function(){
        x = $('.countdown').offset().top;
        console.log(x);
        $('html,body').animate({scrollTop: x},500);
    });
});