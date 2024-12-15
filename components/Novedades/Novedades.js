
import './Novedades.css';

const template = () => `
  <section class="novedades">
  
    <h2>NOVEDADES</h2>
    <div class="novedades-container">
     <div class="novedad-card">
        <img src="https://i.infocar.ua/i/12/7142/1200x800.jpg" alt="CUPRA Tavascán" class="novedad-image" alt="CUPRA Terramar" class="novedad-image" />
        <h3>Nuevo CUPRA Formentor</h3>
        <p>Un SUV híbrido sumamente emocional y electrificado.</p>
      </div>
    <div class="novedad-card">
        <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/cupra-terramar.jpg" alt="CUPRA Tavascán" class="novedad-image" alt="CUPRA Terramar" class="novedad-image" />
        <h3>Nuevo CUPRA Terramar</h3>
        <p>Un SUV híbrido sumamente emocional y electrificado.</p>
      </div>
      <div class="novedad-card">
        <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/cupra-tavascan.jpg" />
        <h3>Nuevo CUPRA Tavascán</h3>
        <p>Nuestro primer SUV coupé eléctrico.</p>
      </div>
      <div class="novedad-card">
        <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/leon-cupra.jpg" alt="CUPRA León" class="novedad-image" />
        <h3>Nuevo CUPRA León</h3>
        <p>Un hilo rojo que conecta con nuestro nuevo modelo.</p>
      </div>
       <div class="novedad-card">
        <img src="https://noticias.coches.com/wp-content/uploads/2024/02/Cupra-Born-VZ-2024-1.jpeg" alt="CUPRA León" class="novedad-image" />
        <h3>Nuevo CUPRA Born</h3>
        <p>Un hilo rojo que conecta con nuestro nuevo modelo.</p>
      </div>
    </div>
  </section>
`;

const Novedades = () => {
  document.querySelector('.novedades-container').innerHTML = template();
};

export default Novedades;
