// get elemnts for Mobile menu
const mobileMenuBtn = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

// active ho jae on click
mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling  navigation links k liye
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// jb f Form submission ho ga then this condition will apply
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const formData = new FormData(contactForm);
  const formValues = Object.fromEntries(formData);

  //  send the form data
  console.log("Form submitted:", formValues);

  // Reset form ho jaega
  contactForm.reset();

  // Show success message on alert
  alert("Thank you for your message! We will get back to you soon.");
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe all features and pricing cards
document.querySelectorAll(".feature, .pricing-card").forEach((element) => {
  observer.observe(element);
});
