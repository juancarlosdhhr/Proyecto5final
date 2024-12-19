import './style.css';


import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';
import Slider from './components/Slider/Slider.js';
import Novedades from './components/Novedades/Novedades.js';
import Avatar from './components/Avatar/Avatar.js';
import Vortex from './components/Vortex/Vortex.js';
import Solaris from './components/Solaris/Solaris.js';
import Condiciones from './components/Condiciones/Condiciones.js';  
import Cookies from './components/Cookies/Cookies.js';  
import InicioSesion from './components/InicioSesion/InicioSesion.js';  

import { cleanPage } from './utils/cleanPage.js';
import { linkPage } from './utils/linkPage.js';


const toggleHero = (show) => {
  const heroContainer = document.getElementById('hero-container');
  heroContainer.style.display = show ? 'block' : 'none'; 
};


const renderHome = () => {
  const app = document.getElementById('app');
  cleanPage(app); 

  toggleHero(true); 

 
  Novedades();
  Slider();

 
  Condiciones();  


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

  
  linkPage("#btnInicioSesion", () => {
    toggleHero(false);  
    InicioSesion();  
  });

 
  linkPage("#btnCookies", () => {
    toggleHero(false);  
    Cookies();  
  });
};


const init = () => {
  Header();  
  Hero();    
  Footer();  
  renderHome();  
};


document.addEventListener("DOMContentLoaded", init);

export { renderHome, toggleHero };
