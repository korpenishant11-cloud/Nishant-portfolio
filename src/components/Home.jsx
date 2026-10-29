function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="welcome">HELLO, I'M</p>

        {/* ===== CHANGE YOUR NAME HERE ===== */}
        <h1>
          KORPE <span>NISHANT</span>
        </h1>

        <h2>MCA Student & Aspiring Full Stack Developer</h2>

        <p className="hero-text">
          I am an MCA student passionate about web development,
          programming, and building modern applications using
          technologies like React, Node.js, Express.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>

          {/* ===== PUT YOUR GITHUB LINK HERE ===== */}
          <a
            href="https://github.com/korpenishant0405-beep"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub ↗
          </a>

          {/* ===== PUT YOUR LINKEDIN LINK HERE ===== */}
          <a
            href="https://www.linkedin.com/in/nishant-korpe-912a8a3b2"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>

      <div className="hero-image">
        {/* ===== PUT YOUR PHOTO IN public/profile.jpg ===== */}
        <div className="image-wrapper">
          <img src="/profile1.jpg" alt="YOUR NAME" />
        </div>
      </div>
    </section>
  );
}

export default Home;