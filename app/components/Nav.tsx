"use client"
import Link from 'next/link'
import { BookOpen, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  return (
    <header className="container mx-auto px-4 py-6 relative">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 animate-slide-in z-20">
          <span className="font-bold text-3xl font-ohno-softie">Learn Ol Chiki</span>
          <span className="text-[#FFD600] text-3xl">ᱚᱞ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/features" 
            className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform animate-slide-in"
            style={{ animationDelay: '100ms' }}
          >
            Learn
          </Link>
          <Link 
            href="/mission" 
            className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform animate-slide-in"
            style={{ animationDelay: '200ms' }}
          >
            About
          </Link>
          <Link 
            href="/downloads" 
            className="text-gray-600 hover:text-black font-ohno-softie font-normal text-lg hover:scale-105 transition-transform animate-slide-in"
            style={{ animationDelay: '300ms' }}
          >
            Resources
          </Link>
          <Link 
            href="https://play.google.com/store/apps/details?id=com.olchiki.learn"
            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-black/90 font-ohno-softie text-lg transition-all hover:scale-105 animate-slide-in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: '400ms' }}
          >
            <BookOpen className="w-5 h-5" />
            Start Learning
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-20 text-black hover:text-gray-600 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-10 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-4">
          {[
            { href: '/features', label: 'Learn' },
            { href: '/mission', label: 'About' },
            { href: '/downloads', label: 'Resources' },
          ].map((link, i) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-2xl text-black font-ohno-softie font-normal hover:text-gray-600 transition-colors transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="https://play.google.com/store/apps/details?id=com.olchiki.learn"
            className={`flex items-center gap-3 px-8 py-4 bg-[#FFD600] text-black rounded-full hover:bg-[#FFD600]/90 font-ohno-softie text-xl transition-all transform ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            } duration-300`}
            style={{ transitionDelay: '300ms' }}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <BookOpen className="w-6 h-6" />
            Start Learning
          </Link>
        </nav>
      </div>
    </header>
  )
}

