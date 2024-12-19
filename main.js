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
import Cookies from './components/Cookies/Cookies.js';  // Importación de Cookies
import InicioSesion from './components/InicioSesion/InicioSesion.js';  // Importación de InicioSesion

import { cleanPage } from './utils/cleanPage.js';
import { linkPage } from './utils/linkPage.js';

// Función para ocultar o mostrar el Hero
const toggleHero = (show) => {
  const heroContainer = document.getElementById('hero-container');
  heroContainer.style.display = show ? 'block' : 'none'; // Muestra u oculta el Hero
};

// Renderizar la página principal
const renderHome = () => {
  const app = document.getElementById('app');
  cleanPage(app); // Limpia el contenido dinámico

  toggleHero(true); // Muestra el Hero en la página principal

  // Renderiza secciones principales
  Novedades();
  Slider();

  // Mostrar directamente las Condiciones
  Condiciones();  // Añadir directamente la sección de condiciones

  // Asignar eventos a los botones "Ver detalles"
  linkPage("#btnAvatar", () => {
    toggleHero(false);
    Avatar(); // Muestra la sección Avatar
  });
  linkPage("#btnSolaris", () => {
    toggleHero(false);
    Solaris(); // Muestra la sección Solaris
  });
  linkPage("#btnVortex", () => {
    toggleHero(false);
    Vortex(); // Muestra la sección Vortex
  });

  // Mostrar el formulario de Inicio de sesión al hacer clic
  linkPage("#btnInicioSesion", () => {
    toggleHero(false);  // Oculta el Hero
    InicioSesion();  // Mostrar el formulario de inicio de sesión
  });

  // Mostrar el mensaje de Cookies al hacer clic
  linkPage("#btnCookies", () => {
    toggleHero(false);  // Oculta el Hero
    Cookies();  // Mostrar el mensaje de cookies
  });
};

// Inicializar la página
const init = () => {
  Header();  // Muestra el Header
  Hero();    // Muestra el Hero
  Footer();  // Muestra el Footer
  renderHome();  // Renderiza el contenido principal
};

// Cuando el DOM esté completamente cargado, inicializamos la página
document.addEventListener("DOMContentLoaded", init);

export { renderHome, toggleHero };
