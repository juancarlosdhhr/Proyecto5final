import { cleanPage } from './cleanPage.js';

export const linkPage = (selector, page) => {
  const link = document.querySelector(selector);
  if (link) {
    link.addEventListener('click', () => {
      const app = document.getElementById('app');
      cleanPage(app); // Limpia el contenedor principal
      page(); // Renderiza la página correspondiente
    });
  }
};
