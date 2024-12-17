import './Leon.css';


const template = () => `
  <section class="leon">
    <h2>CUPRA León</h2>
    <p>Un SUV híbrido sumamente emocional y electrificado.</p>
    <a href="#Novedades">Volver a Novedades</a>
  </section>
`;

const Leon = () => {
  document.getElementById('app').innerHTML = template();
};

export default Leon;
