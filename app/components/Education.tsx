export default function Education() {
    const educationData = [
      {
        institution: "Burkina Institute of Technology (BIT)",
        degree: "Master in Artificial Intelligence",
        status: "In progress",
        year: "2024-2026"
      },
      {
        institution: "University of The People/USA",
        degree: "Bachelor in Computer Science",
        status: "In progress",
        year: "2023-2026"
      },
      {
        institution: "Virtual University of Burkina Faso",
        degree: "Bachelor's degree in physics and energy engineering",
        status: "Completed",
        year: "2020-2023"
      },
      // Add more education entries here
    ]
  
    return (
      <section id="education" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <div className="max-w-3xl mx-auto">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-500">{edu.status} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  