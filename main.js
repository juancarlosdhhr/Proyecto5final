import './style.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import KingsLeague from './components/KingsLeague/KingsLeague';
import Slider from './components/Slider/Slider';
import Novedades from './components/Novedades/Novedades';
import Formentor from './components/Formentor/Formentor';
import Terramar from './components/Terramar/Terramar';
import Tavascan from './components/Tavascan/Tavascan';
import Leon from './components/Leon/Leon';
import Born from './components/Born/Born';

const routes = {
  '#Novedades': Novedades,
  '#Formentor': Formentor,
  '#Terramar': Terramar,
  '#Tavascan': Tavascan,
  '#Leon': Leon,
  '#Born': Born,
};

const renderStaticComponents = () => {
  Hero();
  Novedades(); // Renderiza Novedades justo después del Hero
  KingsLeague();
  Slider();
};

const render = () => {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Limpia el contenedor principal

  renderStaticComponents(); // Renderiza componentes fijos

  const hash = window.location.hash || '#Novedades';
  const component = routes[hash];

  if (component && hash !== '#Novedades') {
    app.innerHTML = ''; // Limpia solo si estamos cambiando de sección
    component();
  }
};

const init = () => {
  Header();
  Footer();
  render(); // Renderiza todo el contenido inicial
  window.addEventListener('hashchange', render); // Detecta cambios de hash
};

document.addEventListener('DOMContentLoaded', init);
