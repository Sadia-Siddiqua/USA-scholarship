// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Create a button for Dark Mode Toggle
  const toggleButton = document.createElement('button');
  toggleButton.innerText = 'Toggle Dark Mode';
  toggleButton.classList.add('dark-mode-toggle');
  document.body.appendChild(toggleButton);

  // Add event listener to the Dark Mode button
  toggleButton.addEventListener('click', () => {
      // Toggle dark-mode class on the body
      document.body.classList.toggle('dark-mode');
      
      // Toggle dark-mode class on sections for smoother transitions
      const sections = document.querySelectorAll('header, .hero, section, footer');
      sections.forEach(section => section.classList.toggle('dark-mode'));
  });

  // Optional: Add form validation for contact form
  const contactForm = document.querySelector('form');
  if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent default form submission
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const message = document.getElementById('message').value.trim();

          if (!name || !email || !message) {
              alert('Please fill out all fields.');
          } else if (!validateEmail(email)) {
              alert('Please enter a valid email address.');
          } else {
              alert('Thank you! Your message has been sent.');
              contactForm.reset(); // Reset form after submission
          }
      });
  }

  // Email validation function
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});