$(document).ready(function() {
  $('.lightbox').click(function() {
    $('#lightbox').css('display', 'block');
    $('#lightbox-img').attr('src', $(this).attr('src'));
  });
  
  $('.close').click(function() {
    $('#lightbox').css('display', 'none');
  });
  
  $(window).click(function(event) {
    if (event.target.id === 'lightbox') {
      $('#lightbox').css('display', 'none');
    }
  });
});