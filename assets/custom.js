// product card show the secondary image
setTimeout(() => {
  document.querySelectorAll(".product-card .image-wrapper").forEach(card => {
    const firstImage = card.querySelector(".first");
    const secondImage = card.querySelector(".second");

    if (secondImage) { 
      card.addEventListener("mouseenter", () => {
        firstImage.style.transitionDelay = "1s";
        secondImage.style.transitionDelay = "0s";

        firstImage.style.marginLeft = "-100%";
        firstImage.style.opacity = "0";

        secondImage.style.marginLeft = "0";
        secondImage.style.opacity = "1";
      });

      card.addEventListener("mouseleave", () => {
        firstImage.style.transitionDelay = "0s";
        secondImage.style.transitionDelay = "0s";

        firstImage.style.marginLeft = "0";
        firstImage.style.opacity = "1";

        secondImage.style.marginLeft = "100%";
        secondImage.style.opacity = "0";
      });
    }
  });
}, 1000);
