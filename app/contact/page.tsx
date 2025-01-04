'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen pt-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
      <main className="container mx-auto px-6 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-12 text-center">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/10 p-8 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-300">Send Me a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white/10 p-8 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-400 mr-4" />
                <p>nikiemaabdoulrazack38@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-green-400 mr-4" />
                <p>+22672449248 / +22665922684</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-red-400 mr-4" />
                <p>Ouagadougou, Pissy, Burkina Faso</p>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 text-blue-400 mr-4" />
                <a href="https://www.linkedin.com/in/abdoul-razack-nikiema-b69638225" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Abdoul Razack Nikiema</a>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Connect with Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

