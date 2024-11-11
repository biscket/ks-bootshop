/*
  Add here your own custom javascript codes
*/
document.querySelectorAll(".product-card").forEach(function (card) {
  card.addEventListener("mouseover", function () {
    card.querySelector(".first").style.marginLeft = "-100%";
    card.querySelector(".second").style.marginLeft = "0";
    card.querySelector(".first").style.transitionDelay = "1s";
    card.querySelector(".second").style.transitionDelay = "0";

    //card.querySelector('.third').style.opacity = '1';
  });

  card.addEventListener("mouseout", function () {
    card.querySelector(".first").style.marginLeft = "0";
    card.querySelector(".second").style.marginLeft = "100%";
    card.querySelector(".first").style.transitionDelay = "0";
    card.querySelector(".second").style.transitionDelay = "0";
    //card.querySelector('.third').style.opacity = '0';
  });
});
