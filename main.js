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

const buildWebsite = () => {
  // Llamamos a las funciones que inyectan los diferentes componentes
  Header();
  Slider();
  Hero();
  Footer();
  KingsLeague();
  Novedades();

  // Añadimos los listeners para los botones
  document.querySelector("#Formentor").addEventListener("click", () => Formentor());
  document.querySelector("#Terramar").addEventListener("click", () => Terramar());
  document.querySelector("#Tavascan").addEventListener("click", () => Tavascan());
  document.querySelector("#Leon").addEventListener("click", () => Leon());
  document.querySelector("#Born").addEventListener("click", () => Born());
};

// Ejecutamos la función App para cargar todo en la página
buildWebsite();











