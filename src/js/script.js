// src/js/script.js

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      const menuToggle = document.getElementById('menu-toggle');
      const navLinks = document.querySelector('.itens-nav');
  
      menuToggle.addEventListener('click', function() {
          navLinks.style.display = navLinks.style.display === 'none' || navLinks.style.display === '' ? 'flex' : 'none';
      });
  
      window.addEventListener('resize', function() {
          if (window.innerWidth > 800) {
              navLinks.style.display = 'flex';
          } else {
              navLinks.style.display = 'none';
          }
      });
    });
  }
  