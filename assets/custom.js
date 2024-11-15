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
        firstImage.style.opacity = "0.8";

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
  document.getElementById("customModalTitle").innerHTML = title;
  document.getElementById("customModalPageContent").innerHTML = content;

  // Show the modal
  var myModal = new bootstrap.Modal(document.getElementById('customPageModal'), {
    keyboard: true
  });
  myModal.show();
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  function updateCartGoalSnippet() {
    fetch('/?section_id=cart-goal')
      .then(response => response.text())
      .then(data => {
        document.getElementById('cart-goal-container').innerHTML = data;
      })
      .catch(error => console.error('Error updating cart goal snippet:', error));
  }

  // Function to monitor cart changes
  function monitorCartChanges() {
    document.querySelectorAll('button, input, a').forEach(element => {
      element.addEventListener('click', function() {
        setTimeout(updateCartGoalSnippet, 1000); // Adjust timing as needed
      });
    });
  }

  //monitorCartChanges();
});
