import './InicioSesion.css';

const InicioSesion = () => {
  const app = document.getElementById('app');
  app.innerHTML += `
    <section class="inicio-sesion">
      <div class="login-container">
        <h2>Iniciar sesión</h2>
        <form id="loginForm">
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required placeholder="Introduce tu correo" />

          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" required placeholder="Introduce tu contraseña" />

          <button type="submit" class="login-button">Iniciar sesión</button>
        </form>
        <p class="forgot-password"><a href="#">¿Olvidaste tu contraseña?</a></p>
      </div>
    </section>
  `;

  
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Iniciando sesión...');
    
  });
};

export default InicioSesion;
