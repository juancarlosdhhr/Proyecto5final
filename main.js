import './style.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import KingsLeague from './components/KingsLeague/KingsLeague';
import Novedades from './components/Novedades/Novedades';
import Slider from './components/Slider/Slider';
import Hero from './components/Hero/Hero';
import Terramar from './components/Terramar/Terramar';
import Tavascan from './components/Tavascan/Tavascan';
import Leon from './components/Leon/Leon';

const buildWebsite = () => {
  // Llamamos a las funciones que inyectan los diferentes componentes
  Header();
  Slider();
  Hero();
  Footer();
  KingsLeague();

  // Renderizamos la sección de novedades inicialmente
  Novedades();

  // Detectamos cambios en el hash de la URL
  window.addEventListener('hashchange', handleHashChange);

  // Si el hash está presente cuando se carga la página, cargamos la página correspondiente
  if (window.location.hash) {
    handleHashChange();
  }
};

// Función que maneja el cambio de hash
const handleHashChange = () => {
  const hash = window.location.hash;

  if (hash === '#Terramar') {
    renderPage(Terramar);
  } else if (hash === '#Tavascan') {
    renderPage(Tavascan);
  } else if (hash === '#Leon') {
    renderPage(Leon);
  } else {
    Novedades(); // Mostrar novedades si no hay hash
  }
};

// Función que renderiza la página indicada
const renderPage = (component) => {
  // Limpiamos el contenedor
  document.querySelector('.content-container').innerHTML = '';
  
  // Llamamos al componente que queremos mostrar
  component();
};

// Ejecutamos la función App para cargar todo en la página
buildWebsite();
