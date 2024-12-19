
import './Hero.css';

const Hero = () => {
  const heroContainer = document.getElementById('hero-container');

  // Asegúrate de que heroContainer existe antes de continuar
  if (!heroContainer) {
    console.error('El contenedor del Hero no existe.');
    return;
  }

  // Asignar el HTML como una cadena
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
        <!-- Cambié el href para ir a la sección Condiciones -->
        <a href="#condiciones" class="button">Ver oferta</a> 
      </div>
    </section>
  `;

  const video = document.getElementById('hero-video');
  const muteButton = document.getElementById('mute-button');

  // Verificar si el botón y el video están cargados
  console.log('Botón de mute encontrado:', muteButton);
  console.log('Video encontrado:', video);

  // Reproducir video con sonido y manejar errores
  video.muted = false;
  video.play().catch(() => {
    video.muted = true;
    muteButton.textContent = '🔇';
  });

  // Función de mute/desmute
  muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? '🔇' : '🔊';
  });
};

export default Hero;
