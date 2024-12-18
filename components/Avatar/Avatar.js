import { renderHome, toggleHero } from '../../main.js';
import { cleanPage } from '../../utils/cleanPage.js';
import './Avatar.css';

const Avatar = () => {
  const app = document.getElementById('app');
  cleanPage(app); // Limpia el contenido dinámico
  toggleHero(false); // Ocultar el Hero

  app.innerHTML = `
    <section class="avatar-details">
      
      <img src="../../assets/portadamercedesAVTR.jpg" alt="Mercedes AVTR" class="car-image"/>
      <p class="car-description">
        Inspirado en la película "Avatar", el Mercedes AVATAR combina tecnología avanzada con un diseño futurista.
        Este modelo eléctrico redefine la movilidad sostenible.
      </p>
      <ul class="car-features">
        <li>Batería orgánica sin metales raros</li>
        <li>Autonomía de 700 km</li>
        <li>Interfaz neuronal para controlar el vehículo</li>
      </ul>
      <p class="car-curiosity">
        Curiosidad: El Mercedes AVTR no tiene volante. En su lugar, responde a gestos y señales neuronales.
      </p>
      
      <div class="additional-section">
        <img src="../../assets/ruedasmercedesAVTR.jpg" alt="Ruedas Mercedes AVTR" class="car-subimage"/>
        
        <p class="car-subdescription">
          Las ruedas del Mercedes AVTR están inspiradas en la naturaleza. Diseñadas con un patrón biomimético,
          permiten movimientos laterales de hasta 30°, mejorando la maniobrabilidad y eficiencia.
        </p>
      </div>

      <div class="additional-section">
        <img src="../../assets/asientosmercedesAVTR.jpg" alt="Interior Mercedes AVTR" class="car-subimage"/>
        
        <p class="car-subdescription">
          Los asientos están fabricados con materiales reciclados y cuentan con una ergonomía avanzada.
          El sistema de iluminación ambiental se ajusta automáticamente para optimizar el confort.
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

export default Avatar;
