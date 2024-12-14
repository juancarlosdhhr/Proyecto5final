import './Leon.css';

const template = () => `
  <section class="leon">
    <h2>CUPRA León</h2>
    <p>Un hilo rojo que conecta con nuestro nuevo modelo...</p>
    <a href="#Novedades">Volver a Novedades</a> <!-- Enlace para regresar -->
  </section>
`;

const Leon = () => {
  document.querySelector('.content-container').innerHTML = template();
};

export default Leon;
