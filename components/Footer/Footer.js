import './Footer.css';

const template = () => `
  <footer class="footer">
    <div class="footer-content">
     
      <div class="footer-links">
        <a href="#about" class="footer-link">Sobre Mercedes</a>
        <a href="#contact" class="footer-link">Contacto</a>
        <a href="#privacy" class="footer-link">Política de Privacidad</a>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 - Mercedes-Benz. Todos los derechos reservados.</p>
      </div>
      <div class="footer-social">
        <a href="https://www.facebook.com/mercedesbenz" target="_blank" class="social-link">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/mercedesbenz" target="_blank" class="social-link">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/mercedesbenz" target="_blank" class="social-link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/mercedesbenz" target="_blank" class="social-link">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </footer>
`;

const Footer = () => {
  document.querySelector('footer').innerHTML = template();
};

export default Footer;
