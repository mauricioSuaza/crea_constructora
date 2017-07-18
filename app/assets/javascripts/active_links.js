// HTML document is loaded

$(window).on("load", function() {


  var last  = window.location.pathname;

  if (last == "/"){
    $( ".link-nav" ).removeClass( "actived" );
    $(".link-nav:eq( 0 )").addClass("actived");
  } else if (last == "/about") {
    $( ".link-nav" ).removeClass( "actived" );
    $(".link-nav:eq( 1 )").addClass("actived");

  } else if (last == "/services") {
    $( ".link-nav" ).removeClass( "actived" );
    $(".link-nav:eq( 2 )").addClass("actived");

  } else if (last == "/projects") {
    $( ".link-nav" ).removeClass( "actived" );
    $(".link-nav:eq( 3 )").addClass("actived");
  } else if (last == "/contact") {
    $( ".link-nav" ).removeClass( "actived" );
    $(".link-nav:eq( 4 )").addClass("actived");
  }
});
