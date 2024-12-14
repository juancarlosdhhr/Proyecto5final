import './Slider.css';

const template = () => `
  <section class="slider">
    <h2>Modelos CUPRA</h2>
    <div class="slider-container">
      <div class="slider-card">
        <img src="path_to_model_image1.jpg" alt="Formentor" class="slider-image" />
        <h3>Formentor</h3>
        <p>Híbrido enchufable, Híbrido, Gasolina, Diesel</p>
        <p>Por 31.900€¹</p>
        <button>Ver oferta</button>
      </div>
      <div class="slider-card">
        <img src="path_to_model_image2.jpg" alt="Terramar" class="slider-image" />
        <h3>Terramar</h3>
        <p>Híbrido enchufable, Híbrido, Gasolina</p>
        <p>Por 38.400€²</p>
        <button>Ver oferta</button>
      </div>
      <div class="slider-card">
        <img src="path_to_model_image3.jpg" alt="León" class="slider-image" />
        <h3>León</h3>
        <p>Híbrido enchufable, Híbrido, Gasolina</p>
        <p>Por 28.990€³</p>
        <button>Ver oferta</button>
      </div>
    </div>
  </section>
`;

const Slider = () => {
  document.querySelector('.slider-container').innerHTML = template();
};

export default Slider;
