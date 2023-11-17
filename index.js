var togglebtn = document.getElementById("navbar-toggle"); // Use the correct ID
var nav = document.querySelector(".navlinks");
var links = document.querySelectorAll(".navlinks li");


var typed = new Typed(".input", {
    strings:["Content Creator","Frontend Developer"],
    typeSpeed: 3,
    backSpeed: 90,
    loop: true
});

(function($) {
    $(function() {
  
      // Open and close nav
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        $(this).toggleClass('active');
      });
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when selecting another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    });
})(jQuery);
