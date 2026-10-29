const projects = [
  {
    title: "Foodies",
    description:
      "A food delivery website with food categories, cart, checkout, orders and admin management.",
    technologies: "PHP • MySQL • HTML • CSS • JavaScript",
  },
  {
    title: "Online Shoes Store",
    description:
      "An e-commerce website concept for browsing shoes, categories, products, wishlist and shopping cart.",
    technologies: "React • JavaScript • CSS • Bootstrap",
  },
  {
    title: "Student Performance Prediction",
    description:
      "A machine learning project that analyzes student data and predicts academic performance.",
    technologies: "Python • Pandas • NumPy • Scikit-learn",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technologies">
              {project.technologies}
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;