function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-title">
        <p>LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-container">

        <div className="contact-text">
          <h3>Let's build something together!</h3>

          <p>
            I am always interested in learning new technologies,
            working on projects and connecting with other developers.
          </p>

          <div className="contact-details">
            <p>📧 korpenishant0405@gmail.com</p>
            <p>📍 Surat Gujrat, INDIA</p>
          </div>
        </div>

        <div className="social-links">

          {/* ===== GITHUB ===== */}
          <a
            href="https://github.com/korpenishant11-cloud"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <span>🐙</span>
            <div>
              <h4>GitHub</h4>
              <p>View my repositories</p>
            </div>
            <b>↗</b>
          </a>

          {/* ===== LINKEDIN ===== */}
          <a
            href="https://www.linkedin.com/in/nishant-korpe-912a8a3b2"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <span>💼</span>
            <div>
              <h4>LinkedIn</h4>
              <p>Connect with me</p>
            </div>
            <b>↗</b>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;