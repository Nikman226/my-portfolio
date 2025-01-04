export default function Projects() {
    const projects = [
      {
        name: "Equilearn",
        description: "An educational solution that will give young people affected by insecurity and in remote areas access to quality education at lower cost."
      },
      {
        name: "FireOff",
        description: "Gas leak detection and warning system via telephone call to two predefined telephone numbers."
      },
      {
        name: "Intelligent air-conditioning management system for technical rooms",
        description: "This device will reduce the energy consumption of our air conditioners, thus saving you money."
      }
    ]
  
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="max-w-3xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  