export default function Skills() {
    const skills = [
      "Embedded Systems: Microcontroller programming (Arduino, Raspberry Pi)",
      "Internet of Things (IoT): Design and deployment of connected sensor networks",
      "Energy: Energy optimization, management of electrical systems",
      "Programming Languages: Python, C/C++",
      "Project Management: Agile methodologies",
      "Languages: English (Level B2), French (Fluent)"
    ]
  
    return (
      <section id="skills" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index} className="mb-2 text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }
  
  