import '../css/Services.css';
import { Helmet } from 'react-helmet';

export default function Services() {
  const services = [
    {
      title: "Publicidad",
      includes: [
        "Sitio web responsivo",
        "Optimización SEO básica",
        "Integración con redes sociales",
        "Formulario de contacto funcional",
      ],
      price: "100€",
      message: "Hola Exelia, estoy interesado/a en el servicio de Publicidad. ¿Podrías contarme más?"
    },
    {
      title: "Webs y Automatización",
      includes: [
        "Gestión de campañas en Instagram y Facebook",
        "Informes semanales de rendimiento",
        "Diseño de anuncios publicitarios",
      ],
      price: "80€",
      message: "Hola Exelia, quiero más información sobre el servicio de Webs y Automatización."
    },
    {
      title: "Contenido Profesional",
      includes: [
        "Tienda online personalizada",
        "Pasarela de pago integrada",
        "Gestión de productos y stock",
        "Diseño atractivo y funcional",
      ],
      price: "150€",
      message: "Hola Exelia, me interesa el servicio de Contenido profesional. ¿Me das más detalles?"
    },
    {
      title: "Identidad Visual",
      includes: [
        "Logo profesional",
        "Manual de marca básico",
        "Paleta de colores y tipografías",
        "Diseño de tarjetas digitales",
      ],
      price: "90€",
      message: "Hola Exelia, quiero saber más sobre el servicio de Identidad visual."
    },
    {
      title: "Formación y Mentoría",
      includes: [
        "Calendario de publicaciones",
        "Contenido gráfico semanal",
        "Estrategia de crecimiento orgánico",
      ],
      price: "70€",
      message: "Hola Exelia, me interesa la Formación y Mentoría. ¿Podemos hablar?"
    },
    {
      title: "Mantenimiento Digital",
      includes: [
        "Asesoría en automatización y digitalización",
        "Revisión de procesos actuales",
        "Recomendaciones tecnológicas",
      ],
      price: "60€",
      message: "Hola Exelia, quisiera más info sobre el Mantenimiento digital. ¡Gracias!"
    },
  ];


  const whatsappLink = "https://wa.me/34610197239?text=Hola%20Exelia,%20quiero%20más%20info%20sobre%20sus%20servicios!";

  return (
    <>
      <Helmet>
        <title>Servicios | Exelia Studio</title>
        <meta
          name="description"
          content="Descubre nuestros servicios: publicidad, automatización, diseño web y más para hacer crecer tu negocio."
        />
      </Helmet>

      <section className="services-section">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-includes">
                {service.includes.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
              <p className="service-price">Total: {service.price}</p>
              <a
                className="service-button"
                href={`https://wa.me/34610197239?text=${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Saber más
              </a>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}
