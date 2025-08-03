import React from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Founders = () => {
  return (
    <section id="founders" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Team Behind
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Senior software engineers with 5+ years of experience who brought this community to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold">
                  AN
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ashok Naik</h3>
              <p className="text-primary-600 font-semibold mb-4">Senior Software Engineer</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                A passionate technologist and community builder with 5+ years of experience 
                in software development. Dedicated to fostering innovation and collaboration 
                in the UAE's tech ecosystem, connecting talented professionals across the region.
              </p>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://www.linkedin.com/in/ashok-naik-82513b111/', '_blank')}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  MSR
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Muhammad Shahid Rafi</h3>
              <p className="text-primary-600 font-semibold mb-1">Senior Software Engineer</p>
              <p className="text-gray-500 text-sm mb-4">(Shahid Rafi C P)</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                An innovative senior software engineer with 5+ years of experience and deep 
                understanding of quality assurance and software development practices. 
                Committed to building bridges between technical excellence and community growth throughout the MENA region.
              </p>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://www.linkedin.com/in/muhammadshahidraficp/', '_blank')}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                UAE | MENA Software Dev Group
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Together, Ashok and Shahid recognized the need for a unified platform where 
                UAE and MENA region's tech talent could connect, learn, and grow. Their combined 
                5+ years of software engineering expertise and commitment to community building 
                laid the foundation for what has become the region's fastest-growing tech community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founders