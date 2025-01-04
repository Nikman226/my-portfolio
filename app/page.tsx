'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = [
    "IoT Developer",
    "Community Leader",
    "Embedded Systems Expert",
    "Energy Solution Innovator"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/20 to-pink-500/20"></div>
      <div className="z-10 text-center">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Abdoul Razack Nikiema"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg animate-float"
        />
        <h1 className="text-5xl font-bold mb-4">Abdoul Razack Nikiema</h1>
        <p className="text-2xl mb-8 h-8 text-blue-300">{roles[roleIndex]}</p>
        <div className="flex justify-center space-x-4 mb-8">
          <SocialLink href="https://github.com/Nikman226" icon={<FaGithub size={24} />} />
          <SocialLink href="https://www.linkedin.com/in/abdoul-razack-nikiema-b69638225" icon={<FaLinkedin size={24} />} />
          <SocialLink href="https://www.facebook.com/your-facebook-profile" icon={<FaFacebook size={24} />} />
          <SocialLink href="mailto:nikiemaabdoulrazack38@gmail.com" icon={<FaEnvelope size={24} />} />
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/about" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300 shadow-md">
            About Me
          </Link>
          <Link href="/projects" className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full font-bold hover:bg-white hover:text-blue-600 transition duration-300 shadow-md">
            My Projects
          </Link>
        </div>
      </div>
    </main>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition duration-300">
      {icon}
    </a>
  )
}
