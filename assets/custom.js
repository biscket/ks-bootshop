// product card show the secondary image
setTimeout(() => {
  document.querySelectorAll(".product-card .image-wrapper").forEach(card => {
    const firstImage = card.querySelector(".first");
    const secondImage = card.querySelector(".second");

    if (secondImage) {
      const showSecondaryImage = () => {
        firstImage.style.transitionDelay = "1s";
        secondImage.style.transitionDelay = "0s";

        firstImage.style.marginLeft = "-100%";
        firstImage.style.opacity = "0";

        secondImage.style.marginLeft = "0";
        secondImage.style.opacity = "1";
      };

      const hideSecondaryImage = () => {
        firstImage.style.transitionDelay = "0s";
        secondImage.style.transitionDelay = "0s";

        firstImage.style.marginLeft = "0";
        firstImage.style.opacity = "1";

        secondImage.style.marginLeft = "100%";
        secondImage.style.opacity = "0";
      };

      card.addEventListener("mouseenter", showSecondaryImage);
      card.addEventListener("mouseleave", hideSecondaryImage);

      card.addEventListener("touchstart", showSecondaryImage);
      card.addEventListener("touchend", hideSecondaryImage);
    }
  });
}, 1000);


function openModal(title, content) {
  // Set the modal title and content
  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalPageContent").innerHTML = content;

  // Show the modal
  var myModal = new bootstrap.Modal(document.getElementById('pageModal'), {
    keyboard: true
  });
  myModal.show();
  return false;
}

