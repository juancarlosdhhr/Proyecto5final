import './Tavascan.css';

const template = () => `
  <section class="tavascan">
    <h2>CUPRA Tavascán</h2>
    <p>Nuestro primer SUV coupé eléctrico...</p>
    <a href="#Novedades">Volver a Novedades</a> <!-- Enlace para regresar -->
  </section>
`;

const Tavascan = () => {
  document.querySelector('.content-container').innerHTML = template();
};

export default Tavascan;
