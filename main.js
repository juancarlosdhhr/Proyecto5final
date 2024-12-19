import './style.css';

// Importamos componentes
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';
import Slider from './components/Slider/Slider.js';
import Novedades from './components/Novedades/Novedades.js';
import Avatar from './components/Avatar/Avatar.js';
import Vortex from './components/Vortex/Vortex.js';
import Solaris from './components/Solaris/Solaris.js';
import Condiciones from './components/Condiciones/Condiciones.js';  // Importación de Condiciones

import { cleanPage } from './utils/cleanPage.js';
import { linkPage } from './utils/linkPage.js';

// Función para ocultar o mostrar el Hero
const toggleHero = (show) => {
  const heroContainer = document.getElementById('hero-container');
  heroContainer.style.display = show ? 'block' : 'none';
};

// Renderizar la página principal
const renderHome = () => {
  const app = document.getElementById('app');
  cleanPage(app); // Limpia el contenido dinámico
  toggleHero(true); // Muestra el Hero

  // Renderiza secciones principales
  Novedades();
  Slider();

  // Mostrar directamente las Condiciones
  Condiciones();  // Añadir directamente la sección de condiciones

  // Asignar eventos a los botones "Ver detalles"
  linkPage("#btnAvatar", () => {
    toggleHero(false);
    Avatar();
  });
  linkPage("#btnSolaris", () => {
    toggleHero(false);
    Solaris();
  });
  linkPage("#btnVortex", () => {
    toggleHero(false);
    Vortex();
  });
};

// Inicializar la página
const init = () => {
  Header();
  Hero();
  Footer();
  renderHome();
};

document.addEventListener("DOMContentLoaded", init);

export { renderHome, toggleHero };
