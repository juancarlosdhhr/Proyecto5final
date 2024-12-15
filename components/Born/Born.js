import './Born.css';

const template = () => `
  <section class="born">
    <h2>CUPRA Born</h2>
    <p>Detalles sobre el CUPRA Born...</p>
    <a href="#Novedades">Volver a Novedades</a> <!-- Enlace para regresar -->
     <a href="#Born">Ver más sobre CUPRA Born</a>
  </section>
`;

const Born = () => {
  document.querySelector('.content-container').innerHTML = template();
};

export default Born;
