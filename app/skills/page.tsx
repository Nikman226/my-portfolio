import { Code, Database, Layers, Palette, PenToolIcon as Tool } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Databases",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: ["Python", "C/C++", "JavaScript", "SQL", "MongoDB"]
    },
    {
      title: "Frameworks & Technologies",
      icon: <Layers className="w-6 h-6 text-green-400" />,
      skills: ["React", "Node.js", "Express", "Arduino", "Raspberry Pi"]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      skills: ["UI/UX Design", "Figma", "Adobe XD"]
    },
    {
      title: "Tools & Platforms",
      icon: <Tool className="w-6 h-6 text-yellow-400" />,
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-red-400" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
    }
  ]

  return (
    <div className="min-h-screen pt-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
      <main className="container mx-auto px-6 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-12 text-center">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-2xl font-semibold ml-2 text-blue-300">{category.title}</h2>
              </div>
              <ul className="list-disc list-inside">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 mb-2">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

