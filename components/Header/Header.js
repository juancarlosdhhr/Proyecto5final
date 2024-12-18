

import './Header.css';

const template = () => `
  <header class="header">
    <div class="header-content">
      <img 
        src="../../assets/mercedeslogo.jpg" 
        alt="Cupra Logo" 
        class="logo" 
      />
      <nav class="nav-buttons">
        <button class="nav-button">Ofertas</button>
        <button class="nav-button">Configurador</button>
        <button class="nav-button">Cookies</button>
        <button class="nav-button">
          <i class="fa fa-user"></i>
        </button>
      </nav>
    </div>
  </header>
`;

const Header = () => {
  document.querySelector('header').innerHTML = template();
};

export default Header;