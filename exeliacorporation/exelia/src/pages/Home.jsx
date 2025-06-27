import { Helmet } from 'react-helmet';
import '../css/LandingPage.css';

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Exelia Studio - Ayudamos a que tu marca crezca</title>
      <meta name="description" content="Creamos campañas de alto impacto visual y estrategias de crecimiento digital para marcas únicas." />
    </Helmet>


     <div className="landing-page">
      <section className="carousel full-width-section">
        <div className="carousel-track">
          <div className="carousel-item">
            <h3>Tu esfuerzo merece resultados reales</h3>
            <p>Estamos aquí para ayudarte a conseguirlos</p>
          </div>
          <div className="carousel-item">
            <h3>Sabemos lo difícil que es empezar y mantenerse</h3>
            <p>Por eso creamos soluciones para ti</p>
          </div>
          <div className="carousel-item">
            <h3>No tienes que hacerlo todo solo</h3>
            <p>Deja que te acompañemos con estrategia y acción</p>
          </div>
        </div>
      </section>

      <header className="hero">
        <h1>Exelia Studio<br></br>
          Creatividad con propósito
        </h1>
        <p>
          ¿Tienes un negocio, un talento o una idea con potencial?<br />
          Nosotros te ayudamos a que lo vea el mundo.
        </p>
       <button
          className="btn"
          style={{ border: 'none', outline: 'none' }}
          onClick={() =>
            window.open(
              "https://wa.me/610197239?text=Hola%20Exelia!%20Quiero%20trabajar%20contigo%20",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Quiero que mi marca crezca
        </button>
      </header>

      <section className="destinatarios">
        <div className="contenedor">
          <h2 className="titulo-seccion">Nuestra labor:</h2>
          <p>
          Sabemos que cuando estas empezando o creciendo, lo que necesitas es claridad para que tu marca brille con fuerza. No solo te ofrecemos servicios, sino que te acompañamos con criterio y alma, caminando juntos en cada paso. Nuestro compromiso es ayudarte a vender más y mostrar lo mejor de ti, porque trabajamos con personas reales, no solo con marcas.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="titulo-seccion">Exelia te ofrece:</h2>
        <div className="cards-container">
          <div className="card">
            <h3>📣 Publicidad que conecta</h3>
            <p>Campañas en Meta ads y Google ads diseñadas para atraer al público correcto.</p>
          </div>
          <div className="card">
            <h3>🌐 Webs y Automatización</h3>
            <p>Landing pages, webs profesionales, código QR ,automatización por WhatsApp para que tu marca trabaje sola.</p>
          </div>
          <div className="card">
            <h3>🎥 Contenido profesional y emocional</h3>
            <p>Reels, videos, fotos y piezas gráficas para crear tu contenido y formar tu comunidad.</p>
          </div>
          <div className="card">
            <h3>🎨 Identidad visual </h3>
            <p>Logotipos, tarjetas, marcas, diseños en 3D. Le damos forma a tu esencia.</p>
          </div>
          <div className="card">
            <h3>🧠 Formación y mentoría</h3>
            <p>Te damos herramientas para que entiendas, crezcas y decidas con confianza a la hora de exponer tu idea en el mercado.</p>
          </div>
          <div className="card">
            <h3>🛠️ Mantenimiento digital</h3>
            <p>Actualizamos y damos soporte continuo a tus redes sociales para mayor efectivadad.</p>
          </div>
        </div>
      </section>

      <section className="cta" id="contacto">
        <p>
          Mostramos tu marca con impacto y autenticidad.
        </p>
      </section>

      <a
        href="https://wa.me/610197239?text=Hola Exelia!%20Quiero%20trabajar%20contigo%20"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <img src={`${process.env.PUBLIC_URL}/img/whatsapp-icon.png`} alt="WhatsApp" />
      </a>
    </div>
    </>
  );
}
