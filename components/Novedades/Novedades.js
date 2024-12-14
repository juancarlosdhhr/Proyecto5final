
import './Novedades.css';

const template = () => `
  <section class="novedades">
    <h2>Novedades</h2>
    <div class="novedades-container">
      <div class="novedad-card">
        <img src="path_to_image1.jpg" alt="CUPRA Terramar" class="novedad-image" />
        <h3>Nuevo CUPRA Terramar</h3>
        <p>Un SUV híbrido sumamente emocional y electrificado...</p>
      </div>
      <div class="novedad-card">
        <img src="path_to_image2.jpg" alt="CUPRA Tavascán" class="novedad-image" />
        <h3>Nuevo CUPRA Tavascán</h3>
        <p>Nuestro primer SUV coupé eléctrico.</p>
      </div>
      <div class="novedad-card">
        <img src="path_to_image3.jpg" alt="CUPRA León" class="novedad-image" />
        <h3>Nuevo CUPRA León</h3>
        <p>Un hilo rojo que conecta con nuestro nuevo modelo.</p>
      </div>
    </div>
  </section>
`;

const Novedades = () => {
  document.querySelector('.novedades-container').innerHTML = template();
};

export default Novedades;
