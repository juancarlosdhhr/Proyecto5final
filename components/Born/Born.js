import './Born.css';


const template = () => `
  <section class="born">
    <h2>CUPRA Born</h2>
    <p>Un SUV híbrido sumamente emocional y electrificado.</p>
    <a href="#Novedades">Volver a Novedades</a>
  </section>
`;

const Born = () => {
  document.getElementById('app').innerHTML = template();
};

export default Born;




