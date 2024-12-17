import './Terramar.css';


const template = () => `
  <section class="terramar">
    <h2>CUPRA Terramar</h2>
    <p>Un SUV híbrido sumamente emocional y electrificado.</p>
    <a href="#Novedades">Volver a Novedades</a>
  </section>
`;

const Terramar = () => {
  document.getElementById('app').innerHTML = template();
};

export default Terramar;
