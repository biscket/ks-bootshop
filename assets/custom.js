/*
  Add here your own custom javascript codes
*/
document.querySelectorAll('.product-card').forEach(function(card) {
  card.addEventListener('mouseover', function() {
      card.querySelector('.first').style.opacity = '0';
      card.querySelector('.second').style.opacity = '1';
      //card.querySelector('.third').style.opacity = '1';
  });

  card.addEventListener('mouseout', function() {
    card.querySelector('.first').style.opacity = '1';
    card.querySelector('.second').style.opacity = '0';
    //card.querySelector('.third').style.opacity = '0';
  });
});

