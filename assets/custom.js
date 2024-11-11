/*
  Add here your own custom javascript codes
*/
document.querySelectorAll(".product-card").forEach(function (card) {
  card.addEventListener("mouseover", function () {
    setTimeout(function () {
      card.querySelector(".first").style.marginLeft = "-100%";
      card.querySelector(".second").style.marginLeft = "0";
      //card.querySelector('.third').style.opacity = '1';
    }, 3000);
  });

  card.addEventListener("mouseout", function () {
    card.querySelector(".first").style.marginLeft = "0";
    card.querySelector(".second").style.marginLeft = "100%";
    //card.querySelector('.third').style.opacity = '0';
  });
});
