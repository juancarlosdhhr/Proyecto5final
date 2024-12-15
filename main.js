import './style.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import KingsLeague from './components/KingsLeague/KingsLeague';
import Novedades from './components/Novedades/Novedades';
import Slider from './components/Slider/Slider';
import Hero from './components/Hero/Hero';
import Terramar from './components/Terramar/Terramar';
import Tavascan from './components/Tavascan/Tavascan';
import Leon from './components/Leon/Leon'; // Importar componente Leon
import Formentor from './components/Formentor/Formentor'; // Importar Formentor
import Born from './components/Born/Born'; // Importar Born
import Condiciones from './components/Condiciones/Condiciones';

const buildWebsite = () => {
  // Llamamos a las funciones que inyectan los diferentes componentes
  Header();
  Slider();
  Hero();
  Footer();
  KingsLeague();
  Condiciones();

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

  if (hash === '#Formentor') { // Nuevo caso para Formentor
    renderPage(Formentor);
  } else if (hash === '#Terramar') {
    renderPage(Terramar);
  } else if (hash === '#Tavascan') {
    renderPage(Tavascan);
  } else if (hash === '#Born') { // Nuevo caso para Born
    renderPage(Born);
  } else if (hash === '#León') { // Asegúrate de que coincida con el hash del enlace
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
