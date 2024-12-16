import './Tavascan.css';
import Novedades from '../Novedades/Novedades';

const template = () => `
  <section class="tavascan">
    <h2>CUPRA Tavascan</h2>
    <p>Detalles sobre el CUPRA Tavascan...</p>
    <a href="#Novedades">Volver a Novedades</a> <!-- Enlace para regresar -->
     <a href="#Tavascan">Ver más sobre CUPRA Tavascan</a>
  </section>
`;

const Tavascan = () => {
  document.querySelector('.content-container').innerHTML = template();
};

export default Tavascan;
