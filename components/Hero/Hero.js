
import './Hero.css';

const Hero = () => {
  const heroContainer = document.getElementById('hero-container');

 
  if (!heroContainer) {
    console.error('El contenedor del Hero no existe.');
    return;
  }


  heroContainer.innerHTML = `
    <section class="hero">
      <video id="hero-video" autoplay loop>
        <source src="../../assets/Mercedes-Benz VISION AVTR.mp4" type="video/mp4">
        Tu navegador no soporta el video.
      </video>
      <button id="mute-button" class="mute-button">🔊</button>
      <div class="gradient-overlay"></div>
      <div class="content">
        <h1>NUEVO MERCEDES AVATAR DESDE 99.900€¹</h1>
        <p>Movimiento inteligente, belleza extraordinaria</p>
        <p class="small-text">*Sujeto a financiación.</p>
        
        <a href="#condiciones" class="button">Ver oferta</a> 
      </div>
    </section>
  `;

  const video = document.getElementById('hero-video');
  
};

export default Hero;
