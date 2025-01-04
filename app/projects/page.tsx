import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      name: "Equilearn",
      description: "An educational solution that will give young people affected by insecurity and in remote areas access to quality education at lower cost.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      name: "FireOff",
      description: "Gas leak detection and warning system via telephone call to two predefined telephone numbers.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      name: "Intelligent air-conditioning management system",
      description: "This device will reduce the energy consumption of our air conditioners, thus saving you money.",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div className="min-h-screen pt-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
      <main className="container mx-auto px-6 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 rounded-lg shadow-md overflow-hidden backdrop-filter backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.name}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

