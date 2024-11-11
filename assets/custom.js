/*
  Add here your own custom javascript codes
*/
document.querySelectorAll('.image-wrapper').forEach(function(card) {
  card.addEventListener('mouseenter', function() {
    setTimeout(function() {
      card.querySelector('.second').style.opacity = '0';
      card.querySelector('.third').style.opacity = '1';
    }, 3000); // 3 seconds delay
  });


});

