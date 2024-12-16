
import './Novedades.css';

import Formentor from '../Formentor/Formentor';
import Tavascan from '../Tavascan/Tavascan';
import Terramar from '../Terramar/Terramar';
import Leon from '../Leon/Leon';
import Born from '../Born/Born';

const template = () => `
  <section class="novedades">
    <h2>NOVEDADES</h2>
    <div class="novedades-container">
      <div class="novedad-card">
        <img src="https://i.infocar.ua/i/12/7142/1200x800.jpg" alt="CUPRA Formentor" class="novedad-image" />
        <h3>Nuevo CUPRA Formentor</h3>
        <p>Un SUV híbrido sumamente emocional y electrificado.</p>
        <button id="btnFormentor">Ver detalles</button> <!-- Botón para redirigir -->
      </div>

      <div class="novedad-card">
        <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/cupra-terramar.jpg" alt="CUPRA Terramar" class="novedad-image" />
        <h3>Nuevo CUPRA Terramar</h3>
        <p>Un SUV híbrido sumamente emocional y electrificado.</p>
        <button id="btnTerramar">Ver detalles</button> <!-- Botón para redirigir -->
      </div>

      <div class="novedad-card">
        <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/cupra-tavascan.jpg" alt="CUPRA Tavascán" class="novedad-image" />
        <h3>Nuevo CUPRA Tavascán</h3>
        <p>Nuestro primer SUV coupé eléctrico.</p>
        <button id="btnTavascan">Ver detalles</button> <!-- Botón para redirigir -->
      </div>

      <div class="novedad-card">
        <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/leon-cupra.jpg" alt="CUPRA León" class="novedad-image" />
        <h3>Nuevo CUPRA León</h3>
        <p>Un hilo rojo que conecta con nuestro nuevo modelo.</p>
        <button id="btnLeón">Ver detalles</button> <!-- Botón para redirigir -->
      </div>

      <div class="novedad-card">
        <img src="https://noticias.coches.com/wp-content/uploads/2024/02/Cupra-Born-VZ-2024-1.jpeg" alt="CUPRA Born" class="novedad-image" />
        <h3>Nuevo CUPRA Born</h3>
        <p>Un hilo rojo que conecta con nuestro nuevo modelo.</p>
        <button id="btnBorn">Ver detalles</button> <!-- Botón para redirigir -->
      </div>
    </div>
  </section>
`;

const Novedades = () => {
  document.querySelector('.novedades-container').innerHTML = template();

  // Agregar eventos a los botones para cambiar el hash y navegar
  document.getElementById('btnFormentor').addEventListener('click', () => {
    window.location.hash = '#Formentor';  // Cambiar el hash para redirigir a la página de Formentor
  });
  document.getElementById('btnTerramar').addEventListener('click', () => {
    window.location.hash = '#Terramar';  // Cambiar el hash para redirigir a la página de Terramar
  });
  document.getElementById('btnTavascan').addEventListener('click', () => {
    window.location.hash = '#Tavascan';  // Cambiar el hash para redirigir a la página de Tavascán
  });
  document.getElementById('btnLeón').addEventListener('click', () => {
    window.location.hash = '#Leon';  // Cambiar el hash para redirigir a la página de León
  });
  document.getElementById('btnBorn').addEventListener('click', () => {
    window.location.hash = '#Born';  // Cambiar el hash para redirigir a la página de Born
  });
};

export default Novedades;
