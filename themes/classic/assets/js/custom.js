$(document).ready(function(){
    $('input.form-control').each(function(){
        $(this)
            .focus(function(e){
                $(this).parents('.form-group').find('.form-control-label').addClass('has-value');
            })
            .focusout(function(e){
                if(!$(this).val()){
                    $(this).parents('.form-group').find('.form-control-label').removeClass('has-value');
                }
                
            });
    })
    
    prestashop.on('updatedAddressForm', function (event) {
        $('input.form-control').each(function(){
            $(this)
                .focus(function(e){
                    $(this).parents('.form-group').find('.form-control-label').addClass('has-value');
                })
                .focusout(function(e){
                    if(!$(this).val()){
                        $(this).parents('.form-group').find('.form-control-label').removeClass('has-value');
                    }
                    
                });
        })
    });
	
	$('#menu-icon') .click(function(){ 
		$(this).toggleClass('open-menu'); 
		var hClass = $(this).hasClass('open-menu');
		if(hClass){
			$(window).resize(function(){
				if($(window).width() < 1024)   
				{
					$(this).parents('body').css( 'overflow','hidden');
				}
			});
			
			$(this).parents('body') .find( '#mobile_menu_wrapper' ) .addClass('box-menu');
		}
		else
		{
			$(this).parents('body').css( 'overflow','visible');
			$(this).parents('body') .find( '#mobile_menu_wrapper' ) .removeClass('box-menu');
			
		}
	});	  
	$('.menu-close') .click(function(){
		$(this).parents('body').css( 'overflow','visible');
		$(this).parents('body') .find( '#mobile_menu_wrapper' ) .removeClass('box-menu');
		$(this).parents('body').find( '#menu-icon' ).removeClass('open-menu');
	});	
	if($('#header').length > 0){
		var headerSpaceH = $('#header .sticky-inner').outerHeight(true);
		$('#header .sticky-inner').before('<div class="headerSpace unvisible" style="height: '+headerSpaceH+'px;" ></div>'); 
		if($('.page-index').length > 0 && $('.sticky-inner.absolute-header').length > 0){
			$('.headerSpace').remove();
		} 	
	}	
	$(window).scroll(function() {
		var headerSpaceH = $('#header').outerHeight();
		var screenWidth = $(window).width();
		
		if ($(this).scrollTop() > headerSpaceH && screenWidth >= 1024 ){  
			  $(".use-sticky").find(".sticky-inner").addClass("scroll-menu"); 
			   $('.headerSpace').removeClass("unvisible");
		}
		else{
			 $(".use-sticky").find(".sticky-inner").removeClass("scroll-menu");
			 $(".headerSpace").addClass("unvisible");
		}
	});	
	$(".back-top").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.back-top').fadeIn();
		} else {
			$('.back-top').fadeOut();
		}
	});
	$('.back-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false; 
	});
	$('.product-accessoriesslide').on('init', function(event, slick, currentSlide){
		var slideToShow = $(this).find('.slick-active').length - 1;
		$(this).find('.slick-slide').removeClass('first-active').removeClass('last-active');
		$(this).find('.slick-active').eq(0).addClass('first-active');
		$(this).find('.slick-active').eq(slideToShow).addClass('last-active');
	});
	$('.product-accessoriesslide').not('.slick-initialized').slick({ 
	   slidesToShow: 5,
	   slidesToScroll: 1,
	   dots: false, 
	   arrows: true,  
	   responsive: [
		{breakpoint: 1199, settings: { slidesToShow: 4}},
		{breakpoint: 991, settings: { slidesToShow: 3}},
		{breakpoint: 767, settings: { slidesToShow: 2}},
		{breakpoint: 575, settings: { slidesToShow: 2}},
		{breakpoint: 359, settings: { slidesToShow: 1}}
		]
	});
	$('.product-accessoriesslide').on('afterChange', function(event, slick, currentSlide){
		var slideToShow = $(this).find('.slick-active').length - 1;
		$(this).find('.slick-slide').removeClass('first-active').removeClass('last-active');
		$(this).find('.slick-active').eq(0).addClass('first-active');
		$(this).find('.slick-active').eq(slideToShow).addClass('last-active');
	});
	$('.product-categoryslide').on('init', function(event, slick, currentSlide){
		var slideToShow = $(this).find('.slick-active').length - 1;
		$(this).find('.slick-slide').removeClass('first-active').removeClass('last-active');
		$(this).find('.slick-active').eq(0).addClass('first-active');
		$(this).find('.slick-active').eq(slideToShow).addClass('last-active');
	});
	$('.product-categoryslide').not('.slick-initialized').slick({ 
	   slidesToShow: 5,
	   slidesToScroll: 1,
	   dots: false, 
	   arrows: true,  
	   responsive: [
		{breakpoint: 1199, settings: { slidesToShow: 4}},
		{breakpoint: 991, settings: { slidesToShow: 3}},
		{breakpoint: 767, settings: { slidesToShow: 2}},
		{breakpoint: 575, settings: { slidesToShow: 2}},
		{breakpoint: 359, settings: { slidesToShow: 1}}
		]
	});
	$('.product-categoryslide').on('afterChange', function(event, slick, currentSlide){
		var slideToShow = $(this).find('.slick-active').length - 1;
		$(this).find('.slick-slide').removeClass('first-active').removeClass('last-active');
		$(this).find('.slick-active').eq(0).addClass('first-active');
		$(this).find('.slick-active').eq(slideToShow).addClass('last-active');
	});
})
