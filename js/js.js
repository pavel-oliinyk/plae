$(document).ready(function(){
  $('.slider').slick({
      arrows:true,
       nextArrow: '.right-arrow',
       prevArrow: '.left-arrow',
       draggable:false,
       infinite:false,
 		speed: 500,
 		 asNavFor: '.count-list',
  		 fade: true,
  		  dots:false,
  		  adaptiveHeight: true

  });
   $('.count-list').slick({
   	 arrows:false,
      dots:false,
       infinite:false,
       slidesToShow:1,
        fade: true,
         asNavFor: '.slider',
  });

   $('a[href^="#"]').on('click',function(e){
   	e.preventDefault();


   	var target = this.hash;
   	var $target = $(target);

   	$('html,body').animate({
   		'scrollTop':$target.offset().top
   	},1000,'swing', function(){
   		window.location.hash = target;
   	});
   });

   
     $('.nav-menu a').click(function(){
			$(this).parent().addClass('active_link').siblings().removeClass('active_link')	
		})

});




