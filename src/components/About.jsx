function About() {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-container">

        <div className="about-text">
          <h3>I'm an MCA Student & Developer</h3>

          <p>
            Hello! I am <strong>NISHANT</strong>, currently pursuing
            Master of Computer Applications (MCA) from
            <strong> UTU(UKA TARSADIA UNIVERSITY) </strong>.
          </p>

          <p>
            I am interested in software development and enjoy
            creating websites and applications. I am continuously
            improving my programming and problem-solving skills.
          </p>

          <p>
            My goal is to become a skilled Full Stack Developer and
            build useful, scalable and user-friendly applications.
          </p>
        </div>

        <div className="about-info">
          <div className="info-box">
            <span>🎓</span>
            <div>
              <h4>Education</h4>
              <p>MCA</p>
            </div>
          </div>

          <div className="info-box">
            <span>💻</span>
            <div>
              <h4>Role</h4>
              <p>Student Developer</p>
            </div>
          </div>

          <div className="info-box">
            <span>🚀</span>
            <div>
              <h4>Goal</h4>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;