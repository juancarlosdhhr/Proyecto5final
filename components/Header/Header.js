

import './Header.css';

const template = () => `
  <header class="header">
    <div class="header-content">
      <img 
  src="../../assets/mercedeslogo.jpg" 
  alt="Cupra Logo" 
  class="logo" 
  id="logo"  />
      
      <nav class="nav-buttons">
        <!-- Agregar link para mostrar el mensaje de Cookies -->
        <button class="nav-button" id="btnCookies">Cookies</button> 
        
        <!-- Agregar link para mostrar el formulario de Inicio de sesión -->
        <button class="nav-button" id="btnInicioSesion">
          <i class="fa fa-user"></i>
        </button>
      </nav>
    </div>
  </header>
`;

const Header = () => {
  document.querySelector('header').innerHTML = template();

  // Agregar el evento al logo para recargar la página
  document.getElementById('logo').addEventListener('click', () => {
    location.reload(); // Recarga la página actual
    setTimeout(() => {
      document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    }, 100); // Pequeño retraso para esperar la recarga
  });
};

export default Header;
