jQuery(function($){
	$(document).on("click", ".spinButton", function(e){
		e.preventDefault();

		$(".loader-frame").fadeIn(200);
		$(".dogface").fadeOut(200);

		window.setTimeout(function(){
			$(".loader-frame").fadeOut(400);
		}, 6000);

		window.setTimeout(function(){
			$(".dogface").fadeIn(400);
		}, 5400);
	});
});
// $('.spinButton').on('click', 'function');

// function addStyle (
// 	$(.logo).addClass(.logo)
// 	)







// // .preload
// // .logo 
// // .loader-frame
// // .loader1
// // .loader2
// // .loader1 
// // .loader2