import React, { useState, useEffect } from 'react'
import Button from '../ui/Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600 truncate max-w-[280px] sm:max-w-none">
              <span className="hidden sm:inline">UAE | MENA Software Dev Group</span>
              <span className="sm:hidden">UAE | MENA Dev</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-primary-600 transition-colors">
              Mission
            </button>
            <button onClick={() => scrollToSection('founders')} className="text-gray-700 hover:text-primary-600 transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-primary-600 transition-colors">
              Events
            </button>
            <Button size="sm" onClick={() => scrollToSection('join')}>
              Join Community
            </Button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                About
              </button>
              <button onClick={() => scrollToSection('mission')} className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Mission
              </button>
              <button onClick={() => scrollToSection('founders')} className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Team
              </button>
              <button onClick={() => scrollToSection('events')} className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Events
              </button>
              <div className="px-3 py-2">
                <Button size="sm" onClick={() => scrollToSection('join')} className="w-full">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header