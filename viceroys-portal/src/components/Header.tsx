'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, LogOut } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-maroon-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-maroon-600 rounded-full flex items-center justify-center text-white font-bold text-sm text-center">
              VISA
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-maroon-600 text-sm">VICEROYS</h1>
              <p className="text-xs text-gray-600">Islamic Academy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-maroon-600 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-maroon-600 font-medium">About</Link>
            <Link href="/programs" className="text-gray-700 hover:text-maroon-600 font-medium">Programs</Link>
            <Link href="/announcements" className="text-gray-700 hover:text-maroon-600 font-medium">Announcements</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-maroon-600 font-medium">Gallery</Link>
            <Link href="/results" className="text-gray-700 hover:text-maroon-600 font-medium">Results</Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="px-4 py-2 text-maroon-600 font-medium">
                  Dashboard
                </Link>
                <button onClick={() => setIsLoggedIn(false)} className="flex items-center gap-2 px-4 py-2 bg-maroon-600 text-white rounded-lg hover:bg-maroon-700">
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="px-4 py-2 text-maroon-600 font-medium hover:bg-visa-pink/20 rounded-lg">
                  Sign In
                </Link>
                <Link href="/auth/signup" className="px-4 py-2 bg-maroon-600 text-white rounded-lg hover:bg-maroon-700 font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <Link href="/" className="block py-2 text-gray-700 hover:text-maroon-600">Home</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-maroon-600">About</Link>
            <Link href="/programs" className="block py-2 text-gray-700 hover:text-maroon-600">Programs</Link>
            <Link href="/announcements" className="block py-2 text-gray-700 hover:text-maroon-600">Announcements</Link>
            <Link href="/gallery" className="block py-2 text-gray-700 hover:text-maroon-600">Gallery</Link>
            <Link href="/results" className="block py-2 text-gray-700 hover:text-maroon-600">Results</Link>
            <div className="flex gap-2 mt-4">
              <Link href="/auth/signin" className="flex-1 px-4 py-2 text-maroon-600 border border-maroon-600 rounded-lg text-center">
                Sign In
              </Link>
              <Link href="/auth/signup" className="flex-1 px-4 py-2 bg-maroon-600 text-white rounded-lg text-center">
                Sign Up
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
