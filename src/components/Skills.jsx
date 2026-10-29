const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Git & GitHub", icon: "🔧" },
  { name: "Python", icon: "🐍" },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-title">
        <p>WHAT I KNOW</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;