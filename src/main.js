// Import our custom CSS
import './styles/main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});
