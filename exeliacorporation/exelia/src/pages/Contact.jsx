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
          <p><strong>Teléfono:</strong> +34 610 197 239</p>
          <p><strong>Email:</strong> <a href="mailto:exeliastore@gmail.com">exeliastore@gmail.com</a></p>
        </div>

        {/* Tarjeta para Gabriela */}
        <div className="contact-card">
          <h3>Gabriela</h3>
          <p><strong>Teléfono:</strong> +34 692 2092 04</p>
          <p><strong>Email:</strong> <a href="mailto:exeliastore@gmail.com">exeliastore@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
