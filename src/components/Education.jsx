const education = [
  {
    year: "2026 - Present",
    degree: "Master of Computer Applications (MCA)",
    college: "SHRIMAD RAJCHANDRA INSTITUTE OF MANAGEMENT AND COMPUTER APPLACTION MALIBA CAMPUS,UKA TARSADIA UNIVERSITY",
    description:
      "Currently pursuing MCA with a focus on software development, web technologies and computer applications.",
  },
  {
    year: "2023-26",
    degree: "Bachelor's Degree (BCA)",
    college: "VIVEKANAND COLLAGE FOR ADVANCED COMPUTER AND INFORMATION SCIENCE",
    description:
      "Completed undergraduate studies with an interest in programming and technology.",
  },
];

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-title">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>My <span>Education</span></h2>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <div className="timeline-item" key={item.degree}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="education-year">
                {item.year}
              </span>

              <h3>{item.degree}</h3>

              <h4>{item.college}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;