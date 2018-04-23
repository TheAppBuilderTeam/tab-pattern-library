$(document).ready(function(){

  // Mobile navigation
  $('#navigation__mobile__icon').on( "click", function( event ) {
		$('.navigation__mobile').addClass( "visible" );
  });
  $('#menu__close').on( "click", function( event ) {
    $('.navigation__mobile').removeClass( "visible" );
  });

});
