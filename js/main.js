$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    $([document.documentElement, document.body]).animate({
      scrollTop: $($(this).attr("href")).offset().top
  }, 800);
  });
});