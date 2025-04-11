import '../css/Home.css';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-banner">
        <img src="./img/fondo.png" alt="Banner principal" />
      </div>

      <div className="home-container">
        <div className="card">
          <h2>CAPACITACIÓN DE VENTAS</h2>
          <p> Potencia tus ventas una formación intensiva en técnicas de alto impacto, neuroventas y cierre efectivo.</p>
        </div>

        <div className="card">
          <h2>DISEÑO PUBLICITARIO</h2>
          <p>Creamos contenido visual impactante para redes sociales, videos y más, adaptado a las necesidades de tu negocio.</p>
        </div>

        <div className="card">
          <h2>FREELANCE</h2>
          <p>Exelia te ofrece la libertad de trabajar freelance, generando ingresos globales y alcanzando tus sueños.</p>
        </div>
      </div>
    </div>
  );
}
