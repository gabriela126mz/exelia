import { Link } from 'react-router-dom';
import './css/Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-content">
        <img id="logo" src={`${process.env.PUBLIC_URL}/img/logo1b.png`} alt="Logo" />
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/services">Servicios</Link>
          <Link to="/about">Sobre nosotros</Link>
          <Link to="/contact">Contacto</Link>
          {/* <Link to="/landingpage">Perfil</Link> */}
        </div>
      </div>
    </nav>
  );
}
