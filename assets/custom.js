/*
  Add here your own custom javascript codes
*/
setTimeout(function () {
  document
    .querySelectorAll(".product-card .image-wrapper")
    .forEach(function (card) {
      card.addEventListener("mouseenter", function () {    
        card.querySelector(".first").style.marginLeft = "-100%";
        card.querySelector(".second").style.marginLeft = "0";   
           card.querySelector(".second").style.opacity = "1";

        card.querySelector(".first").style.transitionDelay = "1s";
        card.querySelector(".second").style.transitionDelay = "0s";
      });

      card.addEventListener("mouseout", function () {
        card.querySelector(".first").style.marginLeft = "0";
        card.querySelector(".second").style.marginLeft = "100%";
        card.querySelector(".first").style.transitionDelay = "0s";
        card.querySelector(".second").style.transitionDelay = "0s";
        setTimeout(function () {
          card.querySelector(".second").style.opacity = "0";
        }, 2000);
      });
    });
}, 1000);
