// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Function to handle scroll events
function handleScroll() {
  document.querySelectorAll("section").forEach((section) => {
    if (isInViewport(section)) {
      section.classList.remove("hidden");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Initially hide all sections except the first one
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.classList.add("hidden");
    }
  });

  // Add scroll event listener for smooth transitions when scrolling
  window.addEventListener("scroll", handleScroll);

  // Initial check on page load
  handleScroll();

  // Existing code for pricing boxes
  const pricingBoxes = document.querySelectorAll(".pricing-box");

  pricingBoxes.forEach((box) => {
    const glowBorder = box.querySelector(".glow-border");

    box.addEventListener("mouseenter", () => {
      glowBorder.style.boxShadow = "0 0 15px rgba(74, 144, 226, 0.5)";
    });

    box.addEventListener("mouseleave", () => {
      glowBorder.style.boxShadow = "none";
    });
  });
});
