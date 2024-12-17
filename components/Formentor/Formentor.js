// Formentor.js
import './Formentor.css';

const template = () => `
  <section class="formentor">
    <!-- Contenido específico del Formentor -->
    <h2>CUPRA Formentor</h2>
    <p>Detalles sobre el CUPRA Formentor...</p>
    <a href="#Novedades">Volver a Novedades</a>
  </section>
`;

const Formentor = () => {
  document.getElementById('app').innerHTML += template();
};

export default Formentor;

