$(function() {
  $('.slide').each(function() {
    var $slides = $(this).find('img'),
        slideCount = $slides.length,
        slideId = 0; 
  
    $slides.eq(slideId).fadeIn();
    setInterval(showNextSlide, 3000);

    function showNextSlide() {
      var nextId = (slideId + 1) % slideCount;
  
      $slides.eq(slideId).fadeOut();
      $slides.eq(nextId).fadeIn();
  
      slideId = nextId;
    }
  });
})