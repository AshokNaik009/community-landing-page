import React from 'react'
import Card from '../ui/Card'

const Mission = () => {
  return (
    <section id="mission" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering tech professionals to collaborate, innovate, and build the future of technology together across the UAE and MENA region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                Bridge the gap between talented professionals across different Emirates and create lasting professional relationships that transcend geographical boundaries.
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovate</h3>
              <p className="text-gray-600 leading-relaxed">
                Foster a culture of innovation where ideas flourish, cutting-edge technologies are explored, and collaborative solutions are born through diverse perspectives.
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build</h3>
              <p className="text-gray-600 leading-relaxed">
                Create impactful projects, mentor emerging talent, and contribute to building a robust tech ecosystem that positions the UAE as a global technology leader.
              </p>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Join the Movement
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're based in Dubai's bustling tech scene, Abu Dhabi's innovation hubs, 
                Sharjah's growing startup ecosystem, or anywhere else across the Emirates, 
                <strong className="text-primary-600"> all software engineers and QA professionals are welcome</strong> 
                to join UAE | MENA Software Dev Group!
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  "Let's collaborate, innovate, and build the future of technology together."
                </p>
                <p className="text-gray-600">
                  - The UAE | MENA Software Dev Group Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission