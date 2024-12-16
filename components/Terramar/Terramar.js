import './Terramar.css';
import Novedades from '../Novedades/Novedades';

const template = () => `
  <section class="terramar">
    <h2>CUPRA Terramar</h2>
    <p>Detalles sobre el CUPRA Terramar...</p>
    <a href="#Novedades">Volver a Novedades</a> <!-- Enlace para regresar -->
     <a href="#Terramar">Ver más sobre CUPRA Terramar</a>
  </section>
`;

const Terramar = () => {
  document.querySelector('.content-container').innerHTML = template();
};

export default Terramar;
