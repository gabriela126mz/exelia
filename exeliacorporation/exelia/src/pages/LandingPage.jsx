import React from 'react';
import '../css/LandingPage.css';

export default function LandingPage() {
  return (
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
          <h2 className="titulo-seccion">¿A quién va dirigido?</h2>
          <p className="descripcion-seccion">
            Ayudamos a <span className="destacado">emprendedores</span>,
            <span className="destacado"> artistas</span>,
            <span className="destacado"> negocios locales</span>,
            <span className="destacado"> profesionales</span> y
            <span className="destacado"> marcas emergentes</span> a vender más y mostrarse mejor.
          </p>
        </div>
      </section>

      <section>
        <h2>¿Qué hacemos por ti?</h2>
        <div className="cards-container">
          <div className="card">
            <h3>📣 Publicidad que conecta</h3>
            <p>Campañas en Meta y Google diseñadas para atraer al público correcto.</p>
          </div>
          <div className="card">
            <h3>🌐 Webs & Automatización</h3>
            <p>Landing pages y automatización por WhatsApp para que tu marca trabaje sola.</p>
          </div>
          <div className="card">
            <h3>🎥 Contenido profesional y emocional</h3>
            <p>Reels, videos, fotos y piezas gráficas que cuentan tu historia.</p>
          </div>
          <div className="card">
            <h3>🎨 Identidad visual completa</h3>
            <p>Logo, tarjetas, branding. Le damos forma a tu esencia.</p>
          </div>
          <div className="card">
            <h3>🧠 Formación & mentoría</h3>
            <p>Te damos herramientas para que entiendas, crezcas y decidas con confianza.</p>
          </div>
          <div className="card">
            <h3>🛠️ Mantenimiento digital</h3>
            <p>Actualizamos y damos soporte continuo para tu tranquilidad.</p>
          </div>
        </div>
      </section>

      <section className="cta" id="contacto">
        <p>
          Tu marca no necesita perfección. Necesita ser vista. Nosotros te ayudamos a mostrarla.
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
  );
}
