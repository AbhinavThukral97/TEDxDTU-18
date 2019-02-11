$(document).ready(function(){

	$('.mydash').click(function(){
		$('.tab').removeClass('current');
		$('section').removeClass('active');
		$('.mydash').addClass('current');
		$('.dashboard').addClass('active');
	});
	$('.ques').click(function(){
		$('.tab').removeClass('current');
		$('section').removeClass('active');
		$('.ques').addClass('current');
		$('.question').addClass('active');
	});
	$('.setting').click(function(){
		$('.tab').removeClass('current');
		$('section').removeClass('active');
		$('.setting').addClass('current');
		$('.settings').addClass('active');
	});

	$('.pay').click(function(){
		$('.tab').removeClass('current');
		$('section').removeClass('active');
		$('.pay').addClass('current');
		$('.payment').addClass('active');
	});

});