/*
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#main").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, #main').animate({
      scrollTop: $(hash).offset().top
    }, 100, function(){
 
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
  });
  });
*/

  /*
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("workspace").on('click', function(event) {
  
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, #workspace').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    });
    });
*/

/*
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/

// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, main').animate({
//         scrollTop: $(hash).offset().top
//       }, 100, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//     });
//     });


/*
        $( window ).scroll( function() {
	if ( $( this ).scrollTop() > 1700 ) {
		$( '#workspace' ).fadeIn();
	} else {
		$( '#workspace' ).fadeOut();
	}
    } );

    $( '#workspace' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 200 );
	return false;
    } );

    $( window ).scroll( function() {
	if ( $( this ).scrollTop() > 1700 ) {
		$( '#contact' ).fadeIn();
	} else {
		$( '#contact' ).fadeOut();
	}
    } );

    $( '#contact' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 200 );
	return false;
    } );
    */

