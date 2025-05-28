import '../css/Home.css';

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-banner">
        <img src={`${process.env.PUBLIC_URL}/img/fondo.png`} alt="Banner principal" />
      </div>

      <div className="home-container">
        <div className="card">
          <h2>DOMINA EL ARTE DE VENDER</h2>
          <p> Potencia tus ventas con una formación intensiva en técnicas de alto impacto y cierre efectivo.</p>
        </div>

        <div className="card">
          <h2>IMAGEN QUE VENDE</h2>
          <p>Creamos contenido visual impactante para redes sociales y más, adaptado a las necesidades de tu negocio.</p>
        </div>

        <div className="card">
          <h2>TRABAJA DESDE CASA</h2>
          <p>Exelia te ofrece la libertad de trabajar freelance, generando ingresos globales y alcanzando tus sueños.</p>
        </div>
      </div>
    </div>
  );
}
