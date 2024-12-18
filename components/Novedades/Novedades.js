


import './Novedades.css';
import Avatar from '../Avatar/Avatar.js';
import Solaris from '../Solaris/Solaris.js';
import Vortex from '../Vortex/Vortex.js';

const Novedades = () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="novedades" id="novedades">
      <h2>NOVEDADES</h2>
      <div class="novedades-container">
        <div class="novedad-card">
          <img src="../../assets/Avatarnovedades.jpg" alt="Avatar" />
          <h3>Nuevo Mercedes Avatar</h3>
          <button id="btnAvatar">Ver detalles</button>
        </div>
        <div class="novedad-card">
          <img src="https://okdiario.com/coolthelifestyle/img/2023/06/27/mercedes-vision-one-eleven-202395587-1686842653_1-1024x744.jpeg" alt="Solaris" />
          <h3>Nuevo Mercedes Solaris</h3>
          <button id="btnSolaris">Ver detalles</button>
        </div>
        <div class="novedad-card">
          <img src="public/Vortexnovedades.jpg" alt="Vortex" />
          <h3>Nuevo Mercedes Vortex</h3>
          <button id="btnVortex">Ver detalles</button>
        </div>
      </div>
    </section>
  `;

  document.getElementById('btnAvatar').addEventListener('click', Avatar);
  document.getElementById('btnSolaris').addEventListener('click', Solaris);
  document.getElementById('btnVortex').addEventListener('click', Vortex);
};

export default Novedades;
