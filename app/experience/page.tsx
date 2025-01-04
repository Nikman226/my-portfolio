import Image from 'next/image'

export default function Experience() {
  const experienceData = [
    {
      company: "DargaTech SARL",
      position: "Embedded and IoT systems developer",
      period: "October 2023 - April 2024",
      description: "Developing energy-saving solutions for homes and technical premises.",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      company: "GIP/PNVB",
      position: "Community Health Worker",
      period: "July 2023 - October 2023",
      description: "Well-being, Family planning, Hygiene.",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      company: "Wakatlab-D-CLIC",
      position: "Embedded systems and IoT training",
      period: "March 2023 - September 2023",
      description: "Agence Universitaire de la Francophonie's D-CLIC program to train 25 young people in IoT and embedded systems in Ouagadougou.",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      company: "Scientific Club of Students of the Virtual University of Burkina Faso",
      position: "Secretary in charge of organization",
      period: "October 2022 - October 2024",
      description: "Planning and organizing club activities.",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      company: "Orange",
      position: "Orange Angels",
      period: "March 2022 - June 2022",
      description: "Program to improve and identify problems at Orange Money points of sale.",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      company: "Sayer Technology",
      position: "Sales agent",
      period: "December 2020 - January 2022",
      description: "Ouagadougou rue Bassi",
      image: "/placeholder.svg?height=100&width=100"
    }
  ]

  return (
    <div className="min-h-screen pt-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
      <main className="container mx-auto px-6 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Work Experience</h1>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300">
              <Image
                src={exp.image}
                alt={`${exp.company} logo`}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-300">{exp.company}</h3>
                <p className="text-gray-300">{exp.position}</p>
                <p className="text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-200">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

