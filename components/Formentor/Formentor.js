import './Formentor.css';
import Novedades from '../Novedades/Novedades';

const template = () => `
  <section class="formentor">
    <h2>CUPRA Formentor</h2>
    <p>Detalles sobre el CUPRA Formentor...</p>
    <a href="#Novedades">Volver a Novedades</a> <!-- Enlace para regresar -->
     <a href="#Formentor">Ver más sobre CUPRA León</a>
  </section>
`;

const Formentor = () => {
  document.querySelector('.content-container').innerHTML = template();
};

export default Formentor;
