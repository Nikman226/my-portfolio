export default function Experience() {
    const experienceData = [
      {
        company: "DargaTech SARL",
        position: "Embedded and IoT systems developer",
        period: "October 2023 - April 2024",
        description: "Developing energy-saving solutions for homes and technical premises."
      },
      {
        company: "GIP/PNVB",
        position: "Community Health Worker",
        period: "July 2023 - October 2023",
        description: "Well-being, Family planning, Hygiene."
      },
      {
        company: "Wakatlab-D-CLIC",
        position: "Embedded systems and IoT training",
        period: "March 2023 - September 2023",
        description: "Agence Universitaire de la Francophonie's D-CLIC program to train 25 young people in IoT and embedded systems in Ouagadougou."
      },
      // Add more experience entries here
    ]
  
    return (
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experienceData.map((exp, index) => (
              <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-gray-500">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  