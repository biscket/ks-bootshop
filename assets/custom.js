/*
  Add here your own custom javascript codes
*/
alert(0)
document.querySelectorAll(".image-wrapper").forEach(function (card) {
  card.addEventListener("mouseover", function () {
    card.querySelector(".first").style.marginLeft = "-100%";
    card.querySelector(".second").style.marginLeft = "0";
    card.querySelector(".first").style.transitionDelay = "1s";
    card.querySelector(".second").style.transitionDelay = "0s";
  });

  card.addEventListener("mouseout", function () {
    card.querySelector(".first").style.marginLeft = "0";
    card.querySelector(".second").style.marginLeft = "100%";
    card.querySelector(".first").style.transitionDelay = "0s";
    card.querySelector(".second").style.transitionDelay = "0s";
  });
});
