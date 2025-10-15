import "./Principal.css";
import heroImg from "../assets/foto1.jpg";

export default function Principal() {
  return (
    <main className="home">
      {/* === HERO === */}
      <section className="hero-full">
        <img src={heroImg} alt="Transporte de ganado" className="hero-media" />
        <div className="hero-gradient" />

        <div className="hero-inner">
          <h1>
            Transporte de Ganado<br />Confiable y Seguro
          </h1>
          <p>
            Operación nacional, bienestar animal y monitoreo en tiempo real para que tu envío
            llegue a tiempo y en óptimas condiciones.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="/contacto">Cotizar Envío</a>
            <a className="btn-ghost" href="/flota">Ver Flota</a>
          </div>
        </div>

        <svg
          className="hero-divider"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,60 Q360,20 720,50 T1440,40 L1440,120 L0,120 Z" fill="#f5f0e6" />
        </svg>
      </section>

      {/* === SERVICIOS === */}
      <section className="services section">
        <h2 className="h2">Nuestros Servicios</h2>
        <p className="section-subtitle">Soluciones integrales para el transporte de ganado</p>
        
        <div className="service-grid">
          <article className="service-card">
            <div className="service-icon">🚛</div>
            <h3>Transporte Especializado</h3>
            <p>
              Logística completa y manejo especializado para traslado de ganado con vehículos adaptados y certificados.
            </p>
          </article>
          
          <article className="service-card">
            <div className="service-icon">📍</div>
            <h3>Monitoreo GPS</h3>
            <p>
              Ruteo inteligente y monitoreo en tiempo real con puntos de control estratégicos para máxima seguridad.
            </p>
          </article>
          
          <article className="service-card">
            <div className="service-icon">🐄</div>
            <h3>Bienestar Animal</h3>
            <p>
              Protocolos certificados de bienestar animal y seguridad durante todo el recorrido, con personal capacitado.
            </p>
          </article>
        </div>
      </section>

      {/* === PROCESO === */}
      <section className="process section">
        <h2 className="h2">Cómo Funciona</h2>
        <p className="section-subtitle">Proceso simple y transparente</p>
        
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Solicita Cotización</h3>
            <p>Completa el formulario con los detalles de tu envío y recibe una cotización inmediata.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Planificación</h3>
            <p>Nuestro equipo diseña la ruta óptima y coordina todos los detalles del transporte.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Transporte</h3>
            <p>Recogemos tu ganado y lo transportamos con seguimiento GPS en tiempo real.</p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Entrega</h3>
            <p>Entrega segura en destino con documentación completa y confirmación.</p>
          </div>
        </div>
      </section>

      {/* === MÉTRICAS === */}
      <section className="stats-wrap">
        <div className="stats container">
          <div className="stat">
            <span className="kpi">3417+</span>
            <span className="lbl">Traslados Realizados</span>
          </div>
          <div className="stat">
            <span className="kpi">95%</span>
            <span className="lbl">Satisfacción del Cliente</span>
          </div>
          <div className="stat">
            <span className="kpi">24/7</span>
            <span className="lbl">Monitoreo Continuo</span>
          </div>
          <div className="stat">
            <span className="kpi">15+</span>
            <span className="lbl">Años de Experiencia</span>
          </div>
        </div>
      </section>

      {/* === POR QUÉ ELEGIRNOS === */}
      <section className="why-us section">
        <h2 className="h2">Por Qué Elegirnos</h2>
        <p className="section-subtitle">Tu tranquilidad es nuestra prioridad</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <div className="feature-content">
              <h3>Cobertura Nacional</h3>
              <p>Operamos en todo el territorio con rutas establecidas y socios locales confiables.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <div className="feature-content">
              <h3>Certificaciones</h3>
              <p>Cumplimos con todas las normativas de transporte y bienestar animal vigentes.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <div className="feature-content">
              <h3>Flota Moderna</h3>
              <p>Vehículos especializados equipados con tecnología de punta para máximo confort.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <div className="feature-content">
              <h3>Personal Experto</h3>
              <p>Conductores capacitados en manejo de ganado y protocolos de seguridad.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <div className="feature-content">
              <h3>Seguro Incluido</h3>
              <p>Todos nuestros envíos están cubiertos por seguro de transporte de mercancía.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <div className="feature-content">
              <h3>Atención 24/7</h3>
              <p>Soporte constante y seguimiento en tiempo real durante todo el trayecto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para transportar tu ganado?</h2>
          <p>Obtén una cotización personalizada sin compromiso</p>
          <div className="cta-actions">
            <a className="btn-primary-large" href="/contacto">
              Solicitar Cotización
            </a>
            <a className="btn-outline" href="tel:+506123456789">
              📞 Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}