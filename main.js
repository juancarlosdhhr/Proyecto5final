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
import Formentor from './components/Formentor/Formentor';
import Born from './components/Born/Born';

// Función para renderizar el contenido según el hash
const render = () => {
  const container = document.querySelector('#app'); // Contenedor principal de la app
  const hash = window.location.hash || '#Novedades'; // Ruta predeterminada si no hay hash
  let component;

  // Seleccionamos qué componente cargar según el hash
  switch (hash) {
    case '#Formentor':
      component = Formentor;
      break;
    case '#Terramar':
      component = Terramar;
      break;
    case '#Tavascan':
      component = Tavascan;
      break;
    case '#Leon':
      component = Leon;
      break;
    case '#Born':
      component = Born;
      break;
    default:
      component = Novedades; // Página por defecto
  }

  container.innerHTML = ''; // Limpiar el contenedor
  component(); // Llamar al componente correspondiente
};

// Función para construir el sitio web
const buildWebsite = () => {
  // Llamamos a las funciones que inyectan los diferentes componentes
  Header();
  Slider();
  Hero();
  Footer();
  KingsLeague();
  Novedades();

  // Añadimos los listeners para cambiar el hash cuando se hace click en los botones
  document.querySelector("#btnFormentor").addEventListener("click", () => {
    window.location.hash = '#Formentor'; // Cambiar el hash para Formentor
  });
  document.querySelector("#btnTerramar").addEventListener("click", () => {
    window.location.hash = '#Terramar'; // Cambiar el hash para Terramar
  });
  document.querySelector("#btnTavascan").addEventListener("click", () => {
    window.location.hash = '#Tavascan'; // Cambiar el hash para Tavascan
  });
  document.querySelector("#btnLeón").addEventListener("click", () => {
    window.location.hash = '#Leon'; // Cambiar el hash para León
  });
  document.querySelector("#btnBorn").addEventListener("click", () => {
    window.location.hash = '#Born'; // Cambiar el hash para Born
  });
};

// Ejecutamos la función App para cargar todo en la página
document.addEventListener('DOMContentLoaded', () => {
  buildWebsite();
  render(); // Renderizamos la página según el hash inicial
});

// Escuchar el cambio de hash para renderizar el contenido correctamente
window.addEventListener('hashchange', render);








