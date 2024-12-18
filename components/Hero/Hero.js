
import './Hero.css';

const Hero = () => {
  const heroContainer = document.getElementById('hero-container');

  heroContainer.innerHTML = `
    <section class="hero">
      <video id="hero-video" autoplay loop playsinline>
        <source src="public/assets/Mercedes-Benz VISION AVTR.mp4" type="video/mp4">
        Tu navegador no soporta el video.
      </video>
      <div class="gradient-overlay"></div>
      <div class="content">
        <h1>NUEVO MERCEDES AVATAR DESDE 99.900€¹</h1>
        <p>Movimiento inteligente, belleza extraordinaria</p>
        <p class="small-text">*Sujeto a financiación.</p>
        <a href="#novedades" class="button">Ver oferta</a>
      </div>
    </section>
  `;
};

export default Hero;
