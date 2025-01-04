import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900/50 backdrop-filter backdrop-blur-lg shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link></li>
          <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">About</Link></li>
          <li><Link href="/skills" className="text-gray-300 hover:text-blue-400 transition duration-300">Skills</Link></li>
          <li><Link href="/education" className="text-gray-300 hover:text-blue-400 transition duration-300">Education</Link></li>
          <li><Link href="/experience" className="text-gray-300 hover:text-blue-400 transition duration-300">Experience</Link></li>
          <li><Link href="/projects" className="text-gray-300 hover:text-blue-400 transition duration-300">Projects</Link></li>
          <li><Link href="/resume" className="text-gray-300 hover:text-blue-400 transition duration-300">Resume</Link></li>
          <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition duration-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

