import './Terramar.css';

const template = () => `
  <section class="terramar">
    <h2>CUPRA Terramar</h2>
    <p>Detalles sobre el CUPRA Terramar...</p>
    <a href="#Novedades">Volver a Novedades</a> <!-- Enlace para regresar -->
  </section>
`;

const Terramar = () => {
  document.querySelector('.content-container').innerHTML = template();
};

export default Terramar;
