import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Exelia. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/" className="footer-link">Política de privacidad</a>
          <a href="/" className="footer-link">Términos de servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
