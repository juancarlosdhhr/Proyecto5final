import { renderHome, toggleHero } from '../../main.js';
import { cleanPage } from '../../utils/cleanPage.js';
import './Vortex.css';

const Vortex = () => {
  const app = document.getElementById('app');
  cleanPage(app); 
  toggleHero(false); 

  app.innerHTML = `
    <section class="vortex-details">
      
      <img src="../../assets/Vortexportada.jpg" alt="Mercedes Vortex" class="car-image"/>
      <p class="car-description">
        El Mercedes Vortex redefine el concepto de coche deportivo eléctrico. Con líneas agresivas y 
        tecnología avanzada, ofrece una experiencia de conducción inigualable.
      </p>
      <ul class="car-features">
        <li>Motor eléctrico de alto rendimiento</li>
        <li>0 a 100 km/h en 2.5 segundos</li>
        <li>Diseño inspirado en la aerodinámica de aviones supersónicos</li>
      </ul>
      <p class="car-curiosity">
        Curiosidad: El Mercedes Vortex utiliza materiales ultraligeros para optimizar su rendimiento y eficiencia.
      </p>
      
      <div class="additional-section">
        <img src="../../assets/ruedasVortex.jpg" alt="Ruedas Mercedes Vortex" class="car-subimage"/>
        <p class="car-subdescription">
          Las ruedas del Mercedes Vortex cuentan con un diseño revolucionario de múltiples radios. No solo mejoran
          la aerodinámica, sino que también integran sistemas de refrigeración activa para el máximo rendimiento.
        </p>
      </div>

      <div class="additional-section">
        <img src="../../assets/interiorVortex.jpg" alt="Interior Mercedes Vortex" class="car-subimage"/>
        <p class="car-subdescription">
          El interior del Vortex es una obra maestra tecnológica. Con una pantalla panorámica que abarca todo el salpicadero
          y sistemas de inteligencia artificial, ofrece un control intuitivo y una experiencia futurista al volante.
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

export default Vortex;
