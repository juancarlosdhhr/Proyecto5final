


import './Novedades.css';

const template = () => `
  <section class="novedades">
    <h2>Novedades</h2>
    <div class="novedades-container">
      <div class="novedad-card">
        <img src="https://i.infocar.ua/i/12/7142/1200x800.jpg" alt="CUPRA Formentor" class="novedad-image" />
      <h3>Nuevo CUPRA Formentor</h3>
        <button onclick="window.location.hash='#Formentor'">Ver detalles</button>
      </div>
      <div class="novedad-card">
      <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/cupra-terramar.jpg" alt="CUPRA Terramar" class="novedad-image" />
        <h3>Nuevo CUPRA Terramar</h3>
        <button onclick="window.location.hash='#Terramar'">Ver detalles</button>
      </div>
      <div class="novedad-card">
       <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/cupra-tavascan.jpg" alt="CUPRA Tavascán" class="novedad-image" />
        <h3>Nuevo CUPRA Tavascan</h3>
        <button onclick="window.location.hash='#Tavascan'">Ver detalles</button>
      </div>
      <div class="novedad-card">
       <img src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/three-cards-highlights/x-large/leon-cupra.jpg" alt="CUPRA León" class="novedad-image" />
        <h3>Nuevo CUPRA Leon</h3>
        <button onclick="window.location.hash='#Leon'">Ver detalles</button>
      </div>
      <div class="novedad-card">
      <img src="https://noticias.coches.com/wp-content/uploads/2024/02/Cupra-Born-VZ-2024-1.jpeg" alt="CUPRA Born" class="novedad-image" />
        <h3>Nuevo CUPRA Born</h3>
        <button onclick="window.location.hash='#Born'">Ver detalles</button>
      </div>
    </div>
  </section>
`;

const Novedades = () => {
  const app = document.getElementById('app'); // Contenedor dinámico principal
  app.innerHTML += template();
};

export default Novedades;




