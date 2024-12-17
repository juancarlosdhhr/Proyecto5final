import './Tavascan.css';


const template = () => `
  <section class="tavascan">
    <h2>CUPRA Tavascán</h2>
    <p>Un SUV híbrido sumamente emocional y electrificado.</p>
    <a href="#Novedades">Volver a Novedades</a>
  </section>
`;

const Tavascan = () => {
  document.getElementById('app').innerHTML = template();
};

export default Tavascan;
