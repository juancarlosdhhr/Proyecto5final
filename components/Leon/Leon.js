import './Leon.css';

const template = () => `
  <section class="leon">
    <h2>CUPRA León</h2>
    <p>Detalles sobre el CUPRA León...</p>
    <a href="#Novedades">Volver a Novedades</a> <!-- Enlace para regresar -->
     <a href="#Leon">Ver más sobre CUPRA León</a>
  </section>
`;

const Leon = () => {
  document.querySelector('.content-container').innerHTML = template();
};

export default Leon;
