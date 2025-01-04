import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdoul Razack Nikiema - Portfolio',
  description: 'IoT Developer and Community Leader',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 to-gray-800`}>
        <div className="fixed inset-0 bg-grid-pattern opacity-10"></div>
        <div className="fixed inset-0 bg-noise-pattern opacity-5 mix-blend-overlay"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}

