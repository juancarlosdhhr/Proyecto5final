import { renderHome, toggleHero } from '../../main.js';
import { cleanPage } from '../../utils/cleanPage.js';
import './Solaris.css';

const Solaris = () => {
  const app = document.getElementById('app');
  cleanPage(app); // Limpia el contenido dinámico
  toggleHero(false); // Ocultar el Hero

  app.innerHTML = `
    <section class="solaris-details">
      
      <img src="../../assets/portadamercedesSolaris.jpg" alt="Mercedes Solaris" class="car-image"/>
      <p class="car-description">
        El Mercedes Solaris fusiona la elegancia con tecnología de vanguardia. Un diseño futurista 
        combinado con energía sostenible lo convierten en un coche revolucionario.
      </p>
      <ul class="car-features">
        <li>Puertas con apertura vertical</li>
        <li>Diseño aerodinámico optimizado</li>
        <li>Autonomía eléctrica de hasta 800 km</li>
      </ul>
      <p class="car-curiosity">
        Curiosidad: El Solaris cuenta con paneles solares integrados que mejoran su eficiencia energética.
      </p>
      
      <div class="additional-section">
        <img src="../../assets/puertasmercedesSolaris.jpg" alt="Puertas Mercedes Solaris" class="car-subimage"/>
        <p class="car-subdescription">
          Las puertas del Mercedes Solaris son un verdadero espectáculo visual. Su apertura vertical tipo 
          "alas de gaviota" facilita el acceso al interior, además de ofrecer un diseño icónico y exclusivo.
        </p>
      </div>

      <div class="additional-section">
        <img src="../../assets/diseñomercedesSolaris.jpg" alt="Diseño aerodinámico Solaris" class="car-subimage"/>
        <p class="car-subdescription">
          El diseño aerodinámico del Solaris está optimizado para reducir la resistencia al aire, permitiendo
          una mayor eficiencia y estabilidad en carretera. Cada línea y curva está pensada para maximizar el rendimiento.
        </p>
      </div>

      <button id="backToNovedades" class="back-button">Volver a Novedades</button>
    </section>
  `;

  document.getElementById('backToNovedades').addEventListener('click', () => {
    renderHome();
    setTimeout(() => {
      document.getElementById('novedades').scrollIntoView({ behavior: 'smooth' });
    }, 50);
  });
};

export default Solaris;
