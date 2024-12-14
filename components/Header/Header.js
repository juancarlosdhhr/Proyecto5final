

import './Header.css';

const template = () => `
  <header>
  <section>
          <div class="header-content">
            <img src="https://static.vecteezy.com/system/resources/previews/020/500/024/non_2x/cupra-logo-brand-car-symbol-with-name-white-design-spanish-automobile-illustration-with-black-background-free-vector.jpg" alt="Cupra Logo" class="logo" />
          </div>
          <div>
            <nav class="nav-buttons">
              <button class="nav-button">Ofertas</button>
              <button class="nav-button">Configurador</button>
              <button class="nav-button">Cookies</button>
              <button class="nav-button"><i class="fa fa-user"></i></button>
            </nav>
          </div>
        </header>
`;

const Header = () => {
  document.querySelector('header').innerHTML = template();
};

export default Header;
