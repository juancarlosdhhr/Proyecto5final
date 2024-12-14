import './style.css'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import KingsLeague from './components/KingsLeague/KingsLeague';
import Novedades from './components/Novedades/Novedades';
import Slider from './components/Slider/Slider';
import Hero from './components/Hero/Hero';

const buildWebsite = () => {
  // Llamamos a las funciones que inyectan los diferentes componentes
  Header();
  Slider();
  Hero();
  Footer();
  KingsLeague();
  Novedades();
};

// Ejecutamos la función App para cargar todo en la página
buildWebsite();
