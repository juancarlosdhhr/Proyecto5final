
import './Hero.css';

const Hero = () => {
  const heroContainer = document.getElementById('hero-container');

  // Asegúrate de que heroContainer existe antes de continuar
  if (!heroContainer) {
    console.error('El contenedor del Hero no existe.');
    return;
  }

  // Asignar el HTML como una cadena con autoplay y muted
  heroContainer.innerHTML = `
    <section class="hero">
      <video id="hero-video" autoplay loop muted controls>
        <source src="../../assets/Mercedes-Benz VISION AVTR.mp4" type="video/mp4">
        Tu navegador no soporta el video.
      </video>
      
      <div class="content">
        <h1>NUEVO MERCEDES AVATAR DESDE 99.900€¹</h1>
        <p>Movimiento inteligente, belleza extraordinaria</p>
        <p class="small-text">*Sujeto a financiación.</p>
        
        <a href="#condiciones" class="button">Ver oferta</a> 
      </div>
    </section>
  `;
};

export default Hero;
