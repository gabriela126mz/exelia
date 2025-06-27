import '../css/Services.css';
import { Helmet } from 'react-helmet';

export default function Services() {
  const services = [
    {
      title: "Webs y Automatización",
      includes: [
        "Web adaptable a cualquier pantalla",
        "Optimización SEO y SEM",
        "Landing page moderna y efectiva",
        "Formulario de contacto funcional",
        "Dominio y hosting",
      ],
      price: "600€",
      message: "Hola Exelia, estoy interesado/a en el servicio de Publicidad. ¿Podrías contarme más?"
    },
    {
      title: "Creación de videos y anuncios",
      includes: [
        "Gestión de campañas Meta Ads , Google Ads,  Tik Tok Ads, Youtube Ads",
        "Informes semanales de rendimiento publicitarios",
        "Diseño de anuncios publicitarios",
      ],
      price: "250€",
      message: "Hola Exelia, quiero más información sobre el servicio de Webs y Automatización."
    },
    {
      title: "Contenido Profesional",
      includes: [
        "Planificación y guionización semanal",
        "Edición profesional con efectos y música de tendencia",
        "Adaptaciones por formato (stories, carruseles, reels)",
        "Creación de Reels, videos, fotos y piezas gráficas",
      ],
      price: "300€",
      message: "Hola Exelia, me interesa el servicio de Contenido profesional. ¿Me das más detalles?"
    },
    {
      title: "Identidad Visual",
      includes: [
        "Identidad y branding estratégico profesional",
        "Paleta de colores y tipografías",
        "Diseño de tarjetas digitales",
        "Plantillas gráficas base para redes o presentaciones"
      ],
      price: "250€",
      message: "Hola Exelia, quiero saber más sobre el servicio de Identidad visual."
    },
    
    {
      title: "Formación y Mentoría",
      includes: [
        "Diagnóstico comercial inicial",
        "Capacitación en técnicas de venta dinámica",
        "Revisión y mejora de procesos",
        "Diagnóstico comercial inicial",
        "Soporte por WhatsApp",
      ],
      price: "350€",
      message: "Hola Exelia, me interesa la Formación y Mentoría. ¿Podemos hablar?"
    },
    {
      title: "Consultoría Digital",
      includes: [
        "Asesoría en automatización y digitalización",
        "Revisión de procesos actuales",
        "Recomendaciones tecnológicas",
      ],
      price: "99€",
      message: "Hola Exelia, quisiera más info sobre Consultoría digital. ¡Gracias!"
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
              <p className="service-price">Desde: {service.price}</p>
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
