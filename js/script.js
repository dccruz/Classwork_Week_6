//when the page is ready, do this 

$(document).ready(function() {
	// when the .button element is clicked, do this 
	$(".button_one").click(function(){
		$("div").hide();
	});
	$(".button_two").click(function(){
		$("div").show() 
	});


$(document).ready(function() {
	// when the .button element is clicked, do this 
	$(".button_three").click(function(){
		$( "#effect" ).toggleClass( "newClass", 1000 );
	})
});



