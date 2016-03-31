  $(document).ready(function () {
  	$(".div_toggle").click(function () {
  		$(".div_hidden").slideToggle('normal');
  		var text =  $(this).find("span").html() == 'Згорнути' ? 'Розгорнути' : 'Згорнути';
  		$(this).find("span").html(text);
  		$(this).hasClass('close') ? $(this).removeClass('close')  : $(this).addClass('close') 
  		return false
  	});

  	$("#owl-demo").owlCarousel({

  		autoPlay: 3000,
  		items : 4,
  		itemsDesktop : [1400,4],
    	itemsDesktopSmall : [980,3],
    	itemsTablet: [768,2],
    	itemsMobile : [479,1],
  		
  		
  		navigation : true,
  		navigationText : ["",""],

  	});

  	$('.popup').magnificPopup({
  		type: 'image'
  // other options
});
  });