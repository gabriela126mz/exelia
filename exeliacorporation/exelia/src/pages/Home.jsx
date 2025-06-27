import { Helmet } from 'react-helmet';
import '../css/LandingPage.css';
//landingpage
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Exelia Studio - Inicio</title>
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
        <a href="#contacto" className="btn">Quiero que mi marca crezca</a>
      </header>

      <section className="destinatarios">
        <div className="contenedor">
          <h2 className="titulo-seccion">Nuestra labor:</h2>
          <p className="descripcion-seccion">
            Ayudamos a <span className="destacado">emprendedores</span>,
            <span className="destacado"> artistas</span>,
            <span className="destacado"> negocios locales</span>,
            <span className="destacado"> profesionales</span>,
            <span className="destacado"> influencers</span> y
            <span className="destacado"> marcas emergentes</span> a vender más y mostrarse mejor.
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
            <p>Landing pages, webs profesioales, código QR ,automatización por WhatsApp para que tu marca trabaje sola.</p>
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
        href="https://wa.me/692209204?text=Hola!%20Quiero%20trabajar%20contigo%20"
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
