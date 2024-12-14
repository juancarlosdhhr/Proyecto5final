import './Footer.css';

const template = () => `
  <footer>
    <p>&copy; 2024 - Cupra</p>
  </footer>
`;

const Footer = () => {
  document.querySelector('footer').innerHTML = template();
};

export default Footer;
