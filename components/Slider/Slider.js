import './Slider.css';

const template = () => `
  <section class="slider">
    <h2 class="slider-title">Ventajas de los coches eléctricos e híbridos </h2>
    <div class="slider-wrapper">
      <div class="slider-container">
        <div class="slider-card">
          <img src="../../assets/slider1.jpg" alt="vista de pinos" class="slider-image" />
          <div class="slider-text-right">
            <h3>Energía más limpia</h3>
            <p>Reduce tu huella de carbono.</p>
          </div>
        </div>
        <div class="slider-card">
          <img src="../../assets/slider2.jpg" alt="Imagen aparcamientos" class="slider-image" />
          <div class="slider-text-right">
            <h3>Ahorra sobre la marcha</h3>
            <p>Disfruta de descuentos en aparcamiento y peajes. Ahorra más gracias al Plan MOVES y a la deducción fiscal sobre el IRPF.</p>
          </div>
        </div>
        <div class="slider-card">
          <img src="../../assets/slider3.jpg" alt="Imagen de taller mecanico" class="slider-image" />
          <div class="slider-text-right">
            <h3>Menor mantenimiento</h3>
            <p>En comparación con los vehículos de combustión interna tradicionales, los vehículos eléctricos requieren menos mantenimiento.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const Slider = () => {
  document.getElementById('app').innerHTML += template();
};

export default Slider;
