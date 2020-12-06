jQuery(document).ready(function($) {
	var $wpAdminBar = $('#wpadminbar');
	var tabs_NavPosition;
	if( $('header').hasClass('sticky-header') ) {
		var	wraptab = jQuery('.main-menu-wrap').outerHeight();
	}else{
		var	wraptab =0;
	}
	if ( $wpAdminBar.length ) {
		wraptab = $wpAdminBar.height();
		if($('header').hasClass('sticky-header')) {
			var	wraptab = jQuery('.main-menu-wrap').outerHeight()+ $wpAdminBar.height();
		}
	}
	if ($('.main-menu-wrap').length) {
		tabs_NavPosition = jQuery('.main-menu-wrap').outerHeight() + jQuery('.iva_tabsWrap').outerHeight()-50;
	} else {
		tabs_NavPosition = jQuery('.iva_tabsWrap').outerHeight()-50;
	}
	jQuery('.iva_tabNav a').on('click', function( event ) {
		var $anchorid =jQuery(this);
		jQuery(".iva_tabsWrap ul li a").removeClass("current");
		jQuery(this).parent('li a').addClass("current");

		jQuery('html, body').stop().animate({
			scrollTop : jQuery(  $anchorid.attr( 'href' ) ).offset().top - tabs_NavPosition
		}, 500, 'easeInOutExpo');

		event.preventDefault();
	
	});
	if ($('.main-menu-wrap').length) {
		$(".iva_tabsWrap").sticky({ topSpacing: wraptab });
	} else {
		$(".iva_tabsWrap").sticky({ topSpacing: 0 });
	}
$(window).scroll(function() {
    var topdisplay  = $('.iva_tabsWrap').css('top');
 	var footdisplay = $('.content-bottom-wrapper').css('display');
    var scrolltoppx = $(this).scrollTop();
       if($(window).scrollTop() + $(window).height() > $(document).height() - jQuery("#footer").height() ) {
		jQuery('.iva_tabsWrap').hide();
       }else{
		jQuery('.iva_tabsWrap').show();
		}
  });
//jQuery(document).on( "scroll", iva_onScroll);
});

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
var $wpAdminBar = jQuery('#wpadminbar');
if( jQuery('header').hasClass('sticky-header') ) {
	var	wraptab = jQuery('.main-menu-wrap').outerHeight();
}else{
	var	wraptab =0;
}
if ( $wpAdminBar.length ) {
	wraptab = $wpAdminBar.height();
	if(jQuery('header').hasClass('sticky-header')) {
		var	wraptab = jQuery('.main-menu-wrap').outerHeight()+ $wpAdminBar.height();
	}
}
var sections = jQuery('.tab_section')
  , nav = jQuery('.iva_tabsWrap')
  , nav_height = nav.outerHeight() - wraptab;

jQuery(window).on('scroll', function () {
  var cur_pos = jQuery(this).scrollTop();
  
  sections.each(function() {
    var top = jQuery(this).offset().top - nav_height,
        bottom = top + jQuery(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('current');
      sections.removeClass('current');
      
      jQuery(this).addClass('current');
      nav.find('a[href="#'+jQuery(this).attr('id')+'"]').addClass('current');
    }
  });
});
