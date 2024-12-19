import './Cookies.css';

const Cookies = () => {
  const app = document.getElementById('app');
  app.innerHTML += `
    <section class="cookies">
      <div class="cookies-container">
        <h2>Uso de Cookies</h2>
        <p>
          Usamos cookies para mejorar tu experiencia en nuestra página web. Al continuar navegando, aceptas el uso de cookies.
        </p>
        <div class="buttons">
          <button id="btnAccept" class="accept-button">Aceptar</button>
          <button id="btnReject" class="reject-button">Rechazar</button>
        </div>
      </div>
    </section>
  `;

  // Acción para aceptar cookies
  document.getElementById('btnAccept').addEventListener('click', () => {
    document.querySelector('.cookies').style.display = 'none'; // Ocultar el mensaje de cookies
  });

  // Acción para rechazar cookies
  document.getElementById('btnReject').addEventListener('click', () => {
    document.querySelector('.cookies').style.display = 'none'; // Ocultar el mensaje de cookies
  });
};

export default Cookies;
