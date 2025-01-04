import Image from 'next/image'

export default function Education() {
  const educationData = [
    {
      institution: "Burkina Institute of Technology (BIT)",
      degree: "Master in Artificial Intelligence",
      status: "In progress",
      year: "2024-2026",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      institution: "University of The People/USA",
      degree: "Bachelor in Computer Science",
      status: "In progress",
      year: "2023-2026",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      institution: "Virtual University of Burkina Faso",
      degree: "Bachelor's degree in physics and energy engineering",
      status: "Completed",
      year: "2020-2023",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      institution: "Nabig-Tenga Municipal High School",
      degree: "High school diploma",
      status: "Completed",
      year: "2017-2020",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      institution: "Nabig-Tenga Municipal High School",
      degree: "Certificate of First Cycle Studies",
      status: "Completed",
      year: "2013-2017",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      institution: "Koumdayonré Primary School",
      degree: "Primary School Certificate",
      status: "Completed",
      year: "2007-2013",
      image: "/placeholder.svg?height=100&width=100"
    }
  ]

  return (
    <div className="min-h-screen pt-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
      <main className="container mx-auto px-6 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Education & Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Image
                  src={edu.image}
                  alt={`${edu.institution} logo or certificate`}
                  width={80}
                  height={80}
                  className="rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">{edu.institution}</h3>
                  <p className="text-gray-300">{edu.degree}</p>
                  <p className="text-gray-400">{edu.status} • {edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

