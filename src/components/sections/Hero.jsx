import React from 'react'
import Button from '../ui/Button'

const Hero = () => {
  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center py-12 sm:py-16 lg:py-20">
          <div className="animate-fade-in space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block mb-2 sm:mb-4">Welcome to</span>
              <span className="block text-primary-600 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent break-words">
                UAE | MENA Software Dev Group
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              The premier tech community connecting 100+ software engineers and QA professionals 
              across Dubai, Abu Dhabi, Sharjah, and the entire UAE region.
            </p>
            
            <div className="py-4">
              <p className="text-base sm:text-lg text-gray-700 font-medium px-4">
                <span className="block sm:inline">🚀 From virtual meetups to in-person networking</span>
                <span className="block sm:inline sm:ml-2">• Every weekend • Growing fast</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up px-4">
              <Button 
                size="lg" 
                onClick={scrollToJoin} 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 min-w-[200px]"
              >
                Join Our Community
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={scrollToAbout} 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 min-w-[200px]"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 lg:mt-20 animate-fade-in px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
              <div className="text-center py-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-sm sm:text-base text-gray-600">Active Members</div>
              </div>
              <div className="text-center py-4 border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-2">2023</div>
                <div className="text-sm sm:text-base text-gray-600">Founded</div>
              </div>
              <div className="text-center py-4 border-t sm:border-t-0 border-gray-200">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-2">Weekly</div>
                <div className="text-sm sm:text-base text-gray-600">Meetups</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero