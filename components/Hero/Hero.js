
import './Hero.css';

const template = () => `
  <section class="hero">
    <video autoplay muted loop>
      <source src="https://www.cupraofficial.es/content/dam/countries/es/cupra-website/new-home/hero/video/cupra-formentor-pa-obsesion-edit.mp4" type="video/mp4">
      Tu navegador no soporta el formato de video.
    </video>
    <div class="gradient-overlay"></div>
    <div class="content">
      <h1>NUEVO CUPRA FORMENTOR POR 31.900€¹</h1>
      <p>Lo que tú sientes se llama obsesión</p>
      <p class="small-text">*Sujeto a financiación.</p>
      <a href="#Novedades" class="button">Ver oferta</a>
    </div>
  </section>
`;

const Hero = () => {
  document.getElementById('app').innerHTML += template();
};

export default Hero;