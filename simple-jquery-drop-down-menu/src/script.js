/* $(function() { // Dropdown toggle
$('.dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();
});

$(document).click(function(e) 
{ 
var target = e.target; 
if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
//{ $('.dropdown').hide(); }
  { $('.dropdown').slideUp(); }
});
}); */
$(document).ready(function () {
  $(".dropdown").hide();
  $(".dropdown-toggle").hover(function () {
    // over
    $(".dropdown").slideDown();
  }, function () {
    // out
    $(".dropdown").slideUp();
  });
})