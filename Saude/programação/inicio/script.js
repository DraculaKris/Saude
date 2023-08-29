$(document).ready(function() {
    var slides = $('.slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);
  
    function nextSlide() {
      slides.eq(currentSlide).css('transform', 'translateX(-100%)');
      currentSlide = (currentSlide + 1) % slides.length;
      slides.eq(currentSlide).css('transform', 'translateX(0)');
    }
  });