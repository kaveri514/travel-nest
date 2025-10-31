// Smooth scroll to sections
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form handler
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});

// Book Now button
document.getElementById("book-now").addEventListener("click", () => {
  alert("Redirecting to booking page...");
});
