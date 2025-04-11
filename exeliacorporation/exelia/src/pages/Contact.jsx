import '../css/Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contáctanos</h2>
      <p className="intro-text">
        ¡Estamos aquí para ayudarte! Si tienes alguna pregunta o necesitas más información sobre nuestros servicios, no dudes en contactarnos. Te responderemos lo antes posible.
      </p>

      <div className="contact-info">
        {/* Tarjeta para Mario */}
        <div className="contact-card">
          <h3>Mario</h3>
          <p><strong>Teléfono:</strong> +34 666 666 666</p>
          <p><strong>Email:</strong> <a href="mailto:mario@exelia.com">mario@exelia.com</a></p>
        </div>

        {/* Tarjeta para Gabriela */}
        <div className="contact-card">
          <h3>Gabriela</h3>
          <p><strong>Teléfono:</strong> +34 222 222 222</p>
          <p><strong>Email:</strong> <a href="mailto:gabriela@exelia.com">gabriela@exelia.com</a></p>
        </div>
      </div>

     
    </div>
  );
}
